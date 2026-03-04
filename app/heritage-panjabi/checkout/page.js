"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function HeritageCheckoutPage() {
  const router = useRouter();
  const productId = 46; 
  const productPrice = 1299; 
  const deliveryCharge = 120;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    name: '', phone: '', address: '', bkashNumber: '', trxId: ''
  });

  const totalPrice = (productPrice * quantity) + deliveryCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSize) { alert("দয়া করে পাঞ্জাবির সাইজ সিলেক্ট করুন!"); return; }
    if (formData.phone.length !== 11) { alert("সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন!"); return; }

    setLoading(true);
    
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, productId, quantity, size: selectedSize, paymentMethod, totalPrice 
        })
      });

      const data = await res.json();
      if (data.success) {
        // ম্যাজিক: অর্ডার সফল হলে সোজা থ্যাঙ্ক ইউ পেজে নিয়ে যাবে
        router.push('/heritage-panjabi/thank-you');
      } else {
        alert("অর্ডার পাঠাতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।");
        setLoading(false);
      }
    } catch (error) {
      alert("সার্ভার এরর! আবার চেষ্টা করুন।");
      setLoading(false);
    }
  };

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29] py-12 lg:py-20 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* ব্যাক বাটন ও লোগো এরিয়া */}
        <div className="mb-10 text-center relative">
          <Link href="/heritage-panjabi" className="absolute left-0 top-1/2 -translate-y-1/2 text-[#8C8781] hover:text-[#800020] flex items-center gap-2 font-bold uppercase tracking-wider text-sm transition-colors">
            <span>←</span> ফিরে যান
          </Link>
          <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-2">নিরাপদ চেকআউট</h2>
          <h1 className="text-3xl lg:text-4xl font-black text-[#2C2A29]">অর্ডার কনফার্মেশন</h1>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-10">
          
          {/* বাম পাশ: ডেলিভারি ও পেমেন্ট ইনফো */}
          <div className="flex-1 bg-white p-8 lg:p-12 border border-[#E5DFD3] shadow-[0_20px_50px_rgba(44,42,41,0.03)]">
            <h3 className="text-xl font-bold text-[#2C2A29] mb-8 pb-4 border-b border-[#F3EFE6]">ডেলিভারি তথ্য</h3>
            
            <div className="space-y-6">
              {/* ইনপুট ফিল্ডস */}
              <div>
                <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase tracking-wide">আপনার নাম *</label>
                <input required type="text" placeholder="পুরো নাম লিখুন" 
                  className="w-full p-4 bg-[#F3EFE6] border border-transparent focus:border-[#B8905B] focus:bg-white text-[#2C2A29] placeholder-[#A9A49E] outline-none transition-all text-lg"
                  onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>

              <div>
                <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase tracking-wide">মোবাইল নম্বর *</label>
                <input required type="tel" maxLength="11" placeholder="01XXXXXXXXX" 
                  className="w-full p-4 bg-[#F3EFE6] border border-transparent focus:border-[#B8905B] focus:bg-white text-[#2C2A29] placeholder-[#A9A49E] outline-none transition-all text-lg"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div>
                <label className="block text-[#5A5753] font-bold mb-2 text-sm uppercase tracking-wide">সম্পূর্ণ ঠিকানা *</label>
                <textarea required placeholder="গ্রাম/মহল্লা, থানা, জেলা" 
                  className="w-full p-4 bg-[#F3EFE6] border border-transparent focus:border-[#B8905B] focus:bg-white text-[#2C2A29] placeholder-[#A9A49E] outline-none transition-all h-32 text-lg resize-none"
                  onChange={(e) => setFormData({...formData, address: e.target.value})} />
              </div>

              {/* সাইজ সিলেকশন */}
              <div className="pt-4">
                <label className="block text-[#5A5753] font-bold mb-3 text-sm uppercase tracking-wide">সাইজ সিলেক্ট করুন *</label>
                <div className="flex gap-4">
                  {['M-40"', 'L-42"', 'XL-44"'].map((size) => (
                    <button key={size} type="button" onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-4 border-2 font-bold transition-all text-lg ${selectedSize === size ? 'border-[#800020] bg-[#800020] text-white shadow-lg shadow-[#800020]/20' : 'border-[#E5DFD3] text-[#5A5753] hover:border-[#B8905B] hover:text-[#B8905B] bg-white'}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* পেমেন্ট মেথড */}
              <div className="pt-8">
                <h3 className="text-xl font-bold text-[#2C2A29] mb-6 pb-4 border-b border-[#F3EFE6]">পেমেন্ট অপশন</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`flex items-center p-5 border-2 cursor-pointer transition-all ${paymentMethod === 'cod' ? 'border-[#800020] bg-[#FCFBF8]' : 'border-[#E5DFD3] bg-white'}`}>
                    <input type="radio" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 accent-[#800020]" />
                    <span className="ml-3 font-bold text-[#2C2A29]">ক্যাশ অন ডেলিভারি</span>
                  </label>
                  <label className={`flex items-center p-5 border-2 cursor-pointer transition-all ${paymentMethod === 'bkash' ? 'border-[#800020] bg-[#FCFBF8]' : 'border-[#E5DFD3] bg-white'}`}>
                    <input type="radio" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} className="w-5 h-5 accent-[#800020]" />
                    <span className="ml-3 font-bold text-[#2C2A29]">বিকাশ (অ্যাডভান্স)</span>
                  </label>
                </div>
              </div>

              {/* বিকাশ ইনস্ট্রাকশন (বিকাশ সিলেক্ট করলে আসবে) */}
              {paymentMethod === 'bkash' && (
                <div className="bg-[#FCFBF8] p-6 lg:p-8 border border-[#B8905B]/30 mt-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-[#B8905B]"></div>
                  
                  <h4 className="text-[#800020] font-black mb-4 flex items-center gap-2 text-lg">
                    <span className="bg-[#B8905B] text-white px-2 py-1 text-xs tracking-widest uppercase">বিকাশ পার্সোনাল</span>
                    01XXXXXXXXX
                  </h4>
                  
                  <div className="space-y-4 text-sm text-[#5A5753] mb-6 leading-relaxed">
                    <p><span className="font-bold text-[#B8905B]">১.</span> বিকাশ অ্যাপ থেকে **Send Money** অপশনে যান।</p>
                    <p><span className="font-bold text-[#B8905B]">২.</span> উপরের নম্বরে মোট **৳{totalPrice}** পাঠিয়ে দিন।</p>
                    <p><span className="font-bold text-[#B8905B]">৩.</span> টাকা পাঠানোর পর নিচের ঘরে আপনার বিকাশ নম্বর ও TrxID দিন।</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="যে নম্বর থেকে পাঠিয়েছেন" 
                      className="w-full p-4 border border-[#E5DFD3] focus:border-[#B8905B] outline-none text-[#2C2A29] placeholder-[#A9A49E] bg-white"
                      onChange={(e) => setFormData({...formData, bkashNumber: e.target.value})} />
                    <input required type="text" placeholder="TrxID (ট্রানজেকশন আইডি)" 
                      className="w-full p-4 border border-[#E5DFD3] focus:border-[#B8905B] outline-none text-[#2C2A29] placeholder-[#A9A49E] bg-white"
                      onChange={(e) => setFormData({...formData, trxId: e.target.value})} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ডান পাশ: অর্ডার সামারি */}
          <div className="w-full lg:w-[420px]">
            <div className="bg-[#2C2A29] p-8 lg:p-10 text-white shadow-2xl sticky top-10">
              <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-6 border-b border-white/10 pb-4">অর্ডারের বিবরণ</h3>
              
              <div className="flex items-center gap-4 mb-8">
                <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/image-3.jpg" className="w-20 h-24 object-cover border border-[#B8905B]/30" alt="Punjabi" />
                <div>
                  <p className="font-bold text-white text-lg leading-tight mb-2">ডিপ চারকোল <br/><span className="font-light italic text-[#A9A49E] text-base">জাফরান পাঞ্জাবি</span></p>
                  {selectedSize && <p className="text-[#B8905B] text-sm">সাইজ: {selectedSize}</p>}
                </div>
              </div>

              <div className="space-y-5 mb-8 border-b border-white/10 pb-8 text-[#A9A49E]">
                <div className="flex justify-between items-center">
                  <span>পরিমাণ</span>
                  <div className="flex items-center gap-4 border border-white/20 px-3 py-1">
                    <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="text-xl hover:text-white transition-colors">-</button>
                    <span className="font-bold text-white">{quantity}</span>
                    <button type="button" onClick={() => setQuantity(q => q + 1)} className="text-xl hover:text-white transition-colors">+</button>
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

              <div className="flex justify-between items-end mb-10">
                <span className="text-lg text-[#E5DFD3]">সর্বমোট বিল</span>
                <span className="text-3xl font-black text-[#B8905B]">৳ {totalPrice}</span>
              </div>

              <button disabled={loading} type="submit" className="w-full py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-xl font-bold tracking-wide transition-all shadow-lg hover:shadow-[#800020]/40 disabled:opacity-70 disabled:cursor-not-allowed">
                {loading ? "অর্ডার প্রসেস হচ্ছে..." : "কনফার্ম করুন ➔"}
              </button>
              
              <div className="mt-6 text-center">
                <p className="text-[#A9A49E] text-xs flex items-center justify-center gap-2">
                  <svg className="w-4 h-4 text-[#B8905B]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd"></path></svg>
                  আপনার তথ্য আমাদের কাছে ১০০% নিরাপদ
                </p>
              </div>
            </div>
          </div>
          
        </form>
      </div>
    </main>
  );
}