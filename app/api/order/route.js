import { NextResponse } from 'next/server';
import crypto from 'crypto'; // ডেটা হ্যাশ করার জন্য

// ফেসবুকের নিয়মানুযায়ী মোবাইল নম্বর সিকিউর (Hash) করার ফাংশন
const hashData = (data) => {
  if (!data) return '';
  return crypto.createHash('sha256').update(data.trim().toLowerCase()).digest('hex');
};

export async function POST(request) {
  try {
    const body = await request.json();
    // frontend থেকে পাঠানো totalPrice রিসিভ করা হলো
    const { name, phone, address, bkashNumber, trxId, productId, quantity, size, paymentMethod, totalPrice } = body;

    const authHeader = 'Basic ' + Buffer.from(`${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`).toString('base64');

    const orderData = {
      payment_method: paymentMethod === 'bkash' ? 'bKash' : 'cod',
      payment_method_title: paymentMethod === 'bkash' ? 'bKash Personal' : 'Cash on Delivery',
      set_paid: false,
      created_via: 'Premium Landing Page', 
      billing: {
        first_name: name,
        address_1: address,
        phone: phone,
        country: 'BD'
      },
      line_items: [
        { 
          product_id: parseInt(productId), 
          quantity: parseInt(quantity),
          meta_data: [{ key: 'Size', value: size }] 
        }
      ],
      shipping_lines: [
        { method_id: 'flat_rate', method_title: 'Delivery Charge', total: '120.00' }
      ],
      meta_data: [
        { key: '_order_source', value: 'Landing Page' }
      ],
      customer_note: paymentMethod === 'bkash' 
        ? `পেমেন্ট: বিকাশ\nনম্বর: ${bkashNumber}\nTrxID: ${trxId}\nসাইজ: ${size}` 
        : `পেমেন্ট: ক্যাশ অন ডেলিভারি\nসাইজ: ${size}`
    };

    // ১. ওয়ার্ডপ্রেসে অর্ডার পাঠানো
    const wpRes = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wc/v3/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(orderData)
    });

    if (wpRes.ok) {
      const wpData = await wpRes.json(); // ওয়ার্ডপ্রেসের জেনারেট করা অর্ডার আইডি বের করা
      const orderId = wpData.id;

      // ==========================================================
      // ২. Facebook Conversions API (CAPI) - Purchase Event
      // ==========================================================
      try {
        // কাস্টমারের ব্রাউজার এবং আইপি অ্যাড্রেস বের করা
        const userAgent = request.headers.get('user-agent') || '';
        const clientIp = request.headers.get('x-forwarded-for')?.split(',')[0] || request.headers.get('x-real-ip') || '';

        const fbPayload = {
          data: [
            {
              event_name: 'Purchase',
              event_time: Math.floor(Date.now() / 1000),
              action_source: 'website',
              event_id: orderId.toString(), // Deduplication এর জন্য ওয়ার্ডপ্রেস অর্ডার আইডি
              user_data: {
                client_ip_address: clientIp,
                client_user_agent: userAgent,
                ph: [hashData(phone)], // মোবাইল নম্বর হ্যাশ করে পাঠানো হলো
              },
              custom_data: {
                currency: 'BDT',
                value: totalPrice,
                content_ids: [productId.toString()],
                content_type: 'product',
              }
            }
          ],
          test_event_code: 'TEST31761' // <--- টেস্ট কোডটি ঠিক এখানে বসানো হয়েছে
        };

        // ফেসবুকের সার্ভারে সরাসরি ডেটা পাঠানো
        await fetch(`https://graph.facebook.com/v19.0/${process.env.NEXT_PUBLIC_FB_PIXEL_ID}/events?access_token=${process.env.FB_CAPI_TOKEN}`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(fbPayload)
        });
      } catch (fbError) {
        console.error('Facebook CAPI Error:', fbError);
        // ফেসবুকের ট্র্যাকিং ফেইল করলেও কাস্টমারের অর্ডার কনফার্ম হবে, কোনো বাধা আসবে না
      }
      // ==========================================================

      // ফ্রন্টএন্ডে সাকসেস মেসেজের সাথে অর্ডার আইডিও পাঠিয়ে দেওয়া হলো
      return NextResponse.json({ success: true, orderId: orderId });
    } else {
      const errorData = await wpRes.json();
      return NextResponse.json({ success: false, message: errorData.message }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}