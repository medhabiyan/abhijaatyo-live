"use client";
import { useState, useEffect } from "react";

export default function TemplateCheckoutForm({
  productId = 46,
  productPrice = 1299,
  deliveryCharge = 120,
  title = "প্রিমিয়াম প্রোডাক্ট",
  subtitle = "স্পেশাল এডিশন",
  image = ""
}) {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', bkashNumber: '', trxId: '' });
  
  // ট্র্যাকিংয়ের জন্য স্টেট
  const [hasInitiatedCheckout, setHasInitiatedCheckout] = useState(false);

  const totalPrice = (productPrice * quantity) + deliveryCharge;

  // ১. ViewContent ইভেন্ট (পেজ লোড হওয়ার সাথে সাথে ফায়ার হবে)
  useEffect(() => {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', 'ViewContent', {
        content_name: title,
        content_ids: [productId],
        content_type: 'product',
        value: productPrice,
        currency: 'BDT'
      });
    }
  }, [productId, title, productPrice]);

  useEffect(() => {
    if (success) {
      document.getElementById("checkout-section")?.scrollIntoView({ behavior: "smooth" });
    }
  }, [success]);

  // ২. InitiateCheckout ইভেন্ট (ফর্ম ফিলাপ শুরু করলেই ফায়ার হবে)
  const handleFormInteraction = () => {
    if (!hasInitiatedCheckout) {
      if (typeof window !== 'undefined' && window.fbq) {
        window.fbq('track', 'InitiateCheckout', {
          content_name: title,
          content_ids: [productId],
          value: totalPrice,
          currency: 'BDT'
        });
      }
      setHasInitiatedCheckout(true);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSize) { alert("দয়া করে সাইজ সিলেক্ট করুন!"); return; }
    if (formData.phone.length !== 11) { alert("সঠিক মোবাইল নম্বর দিন!"); return; }

    setLoading(true);
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, productId, quantity, size: selectedSize, paymentMethod, totalPrice })
      });

      const data = await res.json();
      if (data.success) {
        // ৩. Purchase ইভেন্ট (অর্ডার সফল হলে ফায়ার হবে)
        if (typeof window !== 'undefined' && window.fbq) {
          window.fbq('track', 'Purchase', {
            content_name: title,
            content_ids: [productId],
            content_type: 'product',
            value: totalPrice,
            currency: 'BDT',
            order_id: data.orderId || Math.floor(Math.random() * 1000000) // ডাইনামিক অর্ডার আইডি
          });
        }
        setSuccess(true);
      } else {
        alert("অর্ডার পাঠাতে সমস্যা হয়েছে।");
      }
    } catch (error) {
      alert("সার্ভার এরর!");
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="max-w-2xl mx-auto bg-white p-10 lg:p-16 text-center border border-[#E5DFD3] shadow-2xl mt-10 mb-20 animate-in zoom-in duration-500">
        <div className="w-20 h-20 mx-auto border-2 border-[#B8905B] rounded-full flex items-center justify-center mb-6 bg-[#FCFBF8]">
          <svg className="w-10 h-10 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
        </div>
        <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-4">অর্ডার সম্পন্ন</h3>
        <h1 className="text-3xl lg:text-4xl font-black text-[#2C2A29] mb-4">অসংখ্য ধন্যবাদ!</h1>
        <p className="text-[#5A5753] text-lg mb-8">আপনার অর্ডারটি গৃহীত হয়েছে। আমাদের প্রতিনিধি খুব শিগগিরই আপনার সাথে যোগাযোগ করবেন।</p>
        <button onClick={() => window.location.reload()} className="px-8 py-3 bg-[#800020] text-white font-bold text-sm uppercase tracking-wider">নতুন অর্ডার করুন</button>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-16" onMouseEnter={handleFormInteraction} onTouchStart={handleFormInteraction}>
      {/* ... ফর্মের বাকি সব কোড আগের মতোই হুবহু থাকবে। 
          নিচে আপনার আগের ডিজাইন করা ফর্মটিই আছে ... */}
      <div className="text-center mb-12">
        <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-2">নিরাপদ চেকআউট</h2>
        <h3 className="text-3xl lg:text-4xl font-black text-[#2C2A29]">অর্ডার কনফার্ম করুন</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
        
        {/* বাম পাশ: ডেলিভারি ও পেমেন্ট ইনফো */}
        <div className="flex-1 bg-white p-8 lg:p-12 border border-[#E5DFD3] shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase">আপনার নাম *</label>
              <input required type="text" placeholder="পুরো নাম লিখুন" className="w-full p-4 bg-[#F3EFE6] outline-none text-lg border border-transparent focus:border-[#B8905B] transition-all" onChange={(e) => { setFormData({...formData, name: e.target.value}); handleFormInteraction(); }} />
            </div>
            <div>
              <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase">মোবাইল নম্বর *</label>
              <input required type="tel" maxLength="11" placeholder="01XXXXXXXXX" className="w-full p-4 bg-[#F3EFE6] outline-none text-lg border border-transparent focus:border-[#B8905B] transition-all" onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>
            <div>
              <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase">সম্পূর্ণ ঠিকানা *</label>
              <textarea required placeholder="গ্রাম/মহল্লা, থানা, জেলা" className="w-full p-4 bg-[#F3EFE6] outline-none h-24 text-lg resize-none border border-transparent focus:border-[#B8905B] transition-all" onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>
            
            <div className="pt-2">
              <label className="block text-[#5A5753] font-bold mb-3 text-sm uppercase">সাইজ সিলেক্ট করুন *</label>
              <div className="flex gap-4">
                {['M-40"', 'L-42"', 'XL-44"'].map((size) => (
                  <button key={size} type="button" onClick={() => setSelectedSize(size)} className={`flex-1 py-3 border-2 font-bold transition-all text-lg ${selectedSize === size ? 'border-[#800020] bg-[#800020] text-white' : 'border-[#E5DFD3] text-[#5A5753] hover:border-[#B8905B]'}`}>{size}</button>
                ))}
              </div>
            </div>

            <div className="pt-6">
              <label className="block text-[#5A5753] font-bold mb-3 text-sm uppercase">পেমেন্ট মেথড</label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <label className={`flex items-center p-4 border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#800020] bg-[#FCFBF8]' : 'border-[#E5DFD3] bg-white'}`}>
                  <input type="radio" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 accent-[#800020]" />
                  <span className="ml-3 font-bold text-[#2C2A29]">ক্যাশ অন ডেলিভারি</span>
                </label>
                <label className={`flex items-center p-4 border-2 cursor-pointer transition-all ${paymentMethod === 'bkash' ? 'border-[#800020] bg-[#FCFBF8]' : 'border-[#E5DFD3] bg-white'}`}>
                  <input type="radio" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} className="w-5 h-5 accent-[#800020]" />
                  <span className="ml-3 font-bold text-[#2C2A29]">বিকাশ পেমেন্ট</span>
                </label>
              </div>
            </div>

            {/* বিকাশ পেমেন্টের ইনস্ট্রাকশন */}
            {paymentMethod === 'bkash' && (
              <div className="bg-[#FCFBF8] p-6 lg:p-8 border border-[#B8905B]/30 mt-4 border-l-4 border-l-[#800020]">
                <h4 className="text-[#800020] text-lg font-black mb-4">বিকাশ সেন্ড মানি (Send Money)</h4>
                <div className="space-y-4 mb-6 text-[#5A5753] text-sm lg:text-base">
                  <p>নিচের পার্সোনাল নম্বরে সর্বমোট বিল <strong>৳ {totalPrice}</strong> টাকা সেন্ড মানি করুন:<br/>
                  <strong className="text-2xl text-[#2C2A29] mt-2 mb-1 block tracking-wider bg-white border border-[#E5DFD3] inline-block px-4 py-2 rounded-md shadow-sm">01966 757474</strong></p>
                </div>
                <div className="bg-white p-5 border border-[#E5DFD3] shadow-inner space-y-4">
                  <div>
                    <label className="block text-[11px] font-bold text-[#5A5753] mb-1 uppercase tracking-widest">যে নম্বর থেকে পাঠিয়েছেন *</label>
                    <input type="tel" maxLength="11" placeholder="01XXXXXXXXX" className="w-full p-3 border border-[#E5DFD3] bg-[#FCFBF8] outline-none" onChange={(e) => setFormData({...formData, bkashNumber: e.target.value})} />
                  </div>
                  <div>
                    <label className="block text-[11px] font-bold text-[#5A5753] mb-1 uppercase tracking-widest">Transaction ID (TrxID) *</label>
                    <input type="text" placeholder="উদাঃ 9J5A6B7C8D" className="w-full p-3 border border-[#E5DFD3] bg-[#FCFBF8] outline-none" onChange={(e) => setFormData({...formData, trxId: e.target.value})} />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ডান পাশ: অর্ডার সামারি */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-[#2C2A29] p-8 text-white shadow-2xl sticky top-10">
            <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-6 border-b border-white/10 pb-4">অর্ডারের বিবরণ</h3>
            
            <div className="flex items-center gap-4 mb-8">
              {image && <img src={image} className="w-20 h-24 object-cover border border-[#B8905B]/30" alt={title} />}
              <div>
                <p className="font-bold text-white text-lg leading-tight mb-2">{title}</p>
                {selectedSize && <p className="text-[#B8905B] text-sm">সাইজ: {selectedSize}</p>}
              </div>
            </div>

            <div className="space-y-4 mb-6 border-b border-white/10 pb-6 text-[#A9A49E]">
              <div className="flex justify-between items-center">
                <span>পরিমাণ</span>
                <div className="flex items-center gap-4 border border-white/20 px-3 py-1">
                  <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-xl">-</button>
                  <span className="font-bold text-white">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(q => q + 1)} className="text-xl">+</button>
                </div>
              </div>
              <div className="flex justify-between"><span>পণ্যের মূল্য</span><span className="text-white">৳ {productPrice * quantity}</span></div>
              <div className="flex justify-between"><span>ডেলিভারি চার্জ</span><span className="text-white">৳ {deliveryCharge}</span></div>
            </div>

            <div className="flex justify-between items-end mb-8">
              <span className="text-lg text-[#E5DFD3]">সর্বমোট বিল</span>
              <span className="text-3xl font-black text-[#B8905B]">৳ {totalPrice}</span>
            </div>

            <button disabled={loading} type="submit" className="w-full py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-xl font-bold transition-all shadow-lg disabled:opacity-70">
              {loading ? "অর্ডার প্রসেস হচ্ছে..." : "অর্ডার কনফার্ম করুন ➔"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}