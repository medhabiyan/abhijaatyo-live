import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, address, bkashNumber, trxId, productId, quantity, size, paymentMethod } = body;

    const authHeader = 'Basic ' + Buffer.from(`${process.env.WC_CONSUMER_KEY}:${process.env.WC_CONSUMER_SECRET}`).toString('base64');

    const orderData = {
      payment_method: paymentMethod === 'bkash' ? 'bKash' : 'cod',
      payment_method_title: paymentMethod === 'bkash' ? 'bKash Personal' : 'Cash on Delivery',
      set_paid: false,
      // অর্ডারের অরিজিন বা সোর্স ফিক্স করার জন্য নিচের লাইনটি যোগ করা হয়েছে
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
      // অতিরিক্ত সুরক্ষার জন্য মেটা ডাটাতেও সোর্স লিখে দেওয়া হলো
      meta_data: [
        { key: '_order_source', value: 'Landing Page' }
      ],
      customer_note: paymentMethod === 'bkash' 
        ? `পেমেন্ট: বিকাশ\nনম্বর: ${bkashNumber}\nTrxID: ${trxId}\nসাইজ: ${size}` 
        : `পেমেন্ট: ক্যাশ অন ডেলিভারি\nসাইজ: ${size}`
    };

    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_URL}/wp-json/wc/v3/orders`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authHeader
      },
      body: JSON.stringify(orderData)
    });

    if (res.ok) {
      return NextResponse.json({ success: true });
    } else {
      const errorData = await res.json();
      return NextResponse.json({ success: false, message: errorData.message }, { status: 400 });
    }
  } catch (err) {
    return NextResponse.json({ success: false, message: 'Server Error' }, { status: 500 });
  }
}