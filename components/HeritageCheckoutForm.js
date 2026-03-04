"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function HeritageCheckoutForm() {
  const router = useRouter();
  const productId = 46; 
  const productPrice = 1299; 
  const deliveryCharge = 120;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', bkashNumber: '', trxId: '' });

  const totalPrice = (productPrice * quantity) + deliveryCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSize) { alert("দয়া করে পাঞ্জাবির সাইজ সিলেক্ট করুন!"); return; }
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
        // ম্যাজিক: অর্ডার সফল হলে সোজা থ্যাঙ্ক ইউ পেজে নিয়ে যাবে
        router.push('/royal-panjabi/thank-you');
      } else {
        alert("অর্ডার পাঠাতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
      }
    } catch (error) {
      alert("সার্ভার এরর!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-2">নিরাপদ চেকআউট</h2>
        <h3 className="text-3xl lg:text-4xl font-black text-[#2C2A29]">অর্ডার কনফার্ম করুন</h3>
        <div className="w-16 h-[2px] bg-[#B8905B] mx-auto mt-6 opacity-50"></div>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
        
        {/* বাম পাশ: ডেলিভারি ও পেমেন্ট ইনফো */}
        <div className="flex-1 bg-white p-8 lg:p-12 border border-[#E5DFD3] shadow-xl">
          <div className="space-y-6">
            <div>
              <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase">আপনার নাম *</label>
              <input required type="text" placeholder="পুরো নাম লিখুন" 
                className="w-full p-4 bg-[#F3EFE6] border border-transparent focus:border-[#B8905B] focus:bg-white text-[#2C2A29] outline-none transition-all"
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>

            <div>
              <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase">মোবাইল নম্বর *</label>
              <input required type="tel" maxLength="11" placeholder="01XXXXXXXXX" 
                className="w-full p-4 bg-[#F3EFE6] border border-transparent focus:border-[#B8905B] focus:bg-white text-[#2C2A29] outline-none transition-all"
                onChange={(e) => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div>
              <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase">সম্পূর্ণ ঠিকানা *</label>
              <textarea required placeholder="গ্রাম/মহল্লা, থানা, জেলা" 
                className="w-full p-4 bg-[#F3EFE6] border border-transparent focus:border-[#B8905B] focus:bg-white text-[#2C2A29] outline-none transition-all h-24 resize-none"
                onChange={(e) => setFormData({...formData, address: e.target.value})} />
            </div>

            <div className="pt-2">
              <label className="block text-[#5A5753] font-bold mb-3 text-sm uppercase">সাইজ সিলেক্ট করুন *</label>
              <div className="flex gap-4">
                {['M-40"', 'L-42"', 'XL-44"'].map((size) => (
                  <button key={size} type="button" onClick={() => setSelectedSize(size)}
                    className={`flex-1 py-3 border-2 font-bold transition-all ${selectedSize === size ? 'border-[#800020] bg-[#800020] text-white' : 'border-[#E5DFD3] text-[#5A5753] hover:border-[#B8905B]'}`}>
                    {size}
                  </button>
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
                  <span className="ml-3 font-bold text-[#2C2A29]">বিকাশ (অ্যাডভান্স)</span>
                </label>
              </div>
            </div>

            {paymentMethod === 'bkash' && (
              <div className="bg-[#FCFBF8] p-6 border border-[#B8905B]/30 mt-4 border-l-4 border-l-[#B8905B]">
                <h4 className="text-[#800020] font-black mb-3">বিকাশ পার্সোনাল: 01XXXXXXXXX</h4>
                <p className="text-sm text-[#5A5753] mb-4">উপরের নম্বরে ৳{totalPrice} সেন্ড মানি করে নিচের তথ্যগুলো দিন।</p>
                <div className="grid grid-cols-1 gap-3">
                  <input required type="text" placeholder="যে নম্বর থেকে পাঠিয়েছেন" 
                    className="w-full p-3 border border-[#E5DFD3] outline-none focus:border-[#B8905B]"
                    onChange={(e) => setFormData({...formData, bkashNumber: e.target.value})} />
                  <input required type="text" placeholder="TrxID (ট্রানজেকশন আইডি)" 
                    className="w-full p-3 border border-[#E5DFD3] outline-none focus:border-[#B8905B]"
                    onChange={(e) => setFormData({...formData, trxId: e.target.value})} />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ডান পাশ: অর্ডার সামারি */}
        <div className="w-full lg:w-[400px]">
          <div className="bg-[#2C2A29] p-8 text-white shadow-2xl sticky top-10">
            <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-6 border-b border-white/10 pb-4">অর্ডারের বিবরণ</h3>
            
            <div className="space-y-4 mb-6 border-b border-white/10 pb-6 text-[#A9A49E]">
              <div className="flex justify-between items-center">
                <span>পরিমাণ</span>
                <div className="flex items-center gap-4 border border-white/20 px-3 py-1">
                  <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-xl hover:text-white">-</button>
                  <span className="font-bold text-white">{quantity}</span>
                  <button type="button" onClick={() => setQuantity(q => q + 1)} className="text-xl hover:text-white">+</button>
                </div>
              </div>
              <div className="flex justify-between">
                <span>পণ্যের মূল্য</span>
                <span className="text-white">৳ {productPrice * quantity}</span>
              </div>
              <div className="flex justify-between">
                <span>ডেলিভারি চার্জ</span>
                <span className="text-white">৳ {deliveryCharge}</span>
              </div>
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
    </section>
  );
}