"use client";
import { useState } from "react";

export default function CheckoutSection() {
  const productId = 46; 
  const productPrice = 1299; 
  const deliveryCharge = 120;

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ফর্ম ডাটা স্টেট
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    bkashNumber: '',
    trxId: ''
  });

  const totalPrice = (productPrice * quantity) + deliveryCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSize) { alert("দয়া করে সাইজ সিলেক্ট করুন!"); return; }
    if (formData.phone.length !== 11) { alert("সঠিক মোবাইল নম্বর দিন!"); return; }

    setLoading(true);
    
    try {
      const res = await fetch('/api/order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          ...formData, 
          productId, 
          quantity, 
          size: selectedSize, 
          paymentMethod, 
          totalPrice 
        })
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
      } else {
        alert("অর্ডার পাঠাতে সমস্যা হয়েছে। ড্যাশবোর্ড চেক করুন।");
      }
    } catch (error) {
      alert("সার্ভার এরর! আবার চেষ্টা করুন।");
    } finally {
      setLoading(false);
    }
  };

 if (success) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center px-4 py-20 bg-[#F3F4F6]">
        <div className="max-w-xl w-full bg-white rounded-[40px] shadow-2xl p-10 md:p-16 text-center border border-gray-100 animate-in zoom-in duration-500">
          <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-8 shadow-xl shadow-gray-200">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4 tracking-tight">
            অর্ডারটি সফল হয়েছে!
          </h2>
          
          <div className="w-16 h-1 bg-gray-900 mx-auto mb-8"></div>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-10">
            ধন্যবাদ! আপনার মার্জিত রুচির এই পাঞ্জাবিটি আমরা খুব দ্রুত আপনার ঠিকানায় পৌঁছে দেওয়ার ব্যবস্থা করছি। আমাদের একজন প্রতিনিধি কিছুক্ষণের মধ্যেই আপনার নম্বরে কল করবেন।
          </p>

          <button 
            onClick={() => window.location.href = '/'}
            className="inline-block px-10 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all shadow-lg hover:shadow-gray-900/40"
          >
            হোম পেজে ফিরে যান
          </button>
          
          <p className="mt-8 text-xs text-gray-400 uppercase tracking-widest font-bold">
            Stay Elegant with Abhijaatya
          </p>
        </div>
      </div>
    );
  }

  return (
    <section id="checkout-form" className="bg-[#F3F4F6] py-16 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-2">অর্ডারটি কনফার্ম করুন</h2>
          <p className="text-gray-600 italic">সঠিক তথ্য দিয়ে নিচের ফর্মটি পূরণ করুন</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-8">
          {/* বাম পাশ: কাস্টমার ইনফো */}
          <div className="flex-1 bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-200">
            <div className="space-y-6">
              <div>
                <label className="block text-gray-900 font-bold mb-2">আপনার নাম *</label>
                <input required type="text" placeholder="পুরো নাম লিখুন" 
                  className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none text-lg"
                  onChange={(e) => setFormData({...formData, name: e.target.value})} />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2">মোবাইল নম্বর *</label>
                <input required type="tel" maxLength="11" placeholder="01XXXXXXXXX" 
                  className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none text-lg"
                  onChange={(e) => setFormData({...formData, phone: e.target.value})} />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-2">সম্পূর্ণ ঠিকানা *</label>
                <textarea required placeholder="গ্রাম/মহল্লা, থানা, জেলা" 
                  className="w-full p-4 bg-white border-2 border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 focus:border-gray-900 outline-none h-32 text-lg"
                  onChange={(e) => setFormData({...formData, address: e.target.value})} />
              </div>

              <div>
                <label className="block text-gray-900 font-bold mb-3">সাইজ সিলেক্ট করুন *</label>
                <div className="flex gap-4">
                  {['M-40"', 'L-42"', 'XL-44"'].map((size) => (
                    <button key={size} type="button" onClick={() => setSelectedSize(size)}
                      className={`flex-1 py-3 border-2 rounded-xl font-bold transition-all ${selectedSize === size ? 'border-gray-900 bg-gray-900 text-white' : 'border-gray-300 text-gray-700 hover:border-gray-400'}`}>
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* পেমেন্ট মেথড */}
              <div>
                <label className="block text-gray-900 font-bold mb-3">পেমেন্ট মেথড সিলেক্ট করুন</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer ${paymentMethod === 'cod' ? 'border-gray-900 bg-gray-50' : 'border-gray-200'}`}>
                    <input type="radio" name="pay" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 accent-gray-900" />
                    <span className="ml-3 font-bold text-gray-800">ক্যাশ অন ডেলিভারি</span>
                  </label>
                  <label className={`flex items-center p-4 border-2 rounded-xl cursor-pointer ${paymentMethod === 'bkash' ? 'border-gray-900 bg-gray-50' : 'border-gray-200'}`}>
                    <input type="radio" name="pay" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} className="w-5 h-5 accent-gray-900" />
                    <span className="ml-3 font-bold text-gray-800">বিকাশ (পার্সোনাল)</span>
                  </label>
                </div>
              </div>

              {/* বিকাশ ইনস্ট্রাকশন - ম্যাজিক বক্স */}
              {paymentMethod === 'bkash' && (
                <div className="bg-orange-50 p-6 rounded-2xl border-2 border-orange-200 animate-in fade-in slide-in-from-top-4 duration-300">
                  <h4 className="text-orange-900 font-black mb-4 flex items-center gap-2">
                    <span className="bg-orange-600 text-white px-2 py-0.5 rounded text-sm">বিকাশ পেমেন্ট নিয়ম</span>
                    নম্বর: 01XXXXXXXXX (পার্সোনাল)
                  </h4>
                  
                  <div className="space-y-4 text-sm text-orange-900 mb-6">
                    <div className="flex gap-3">
                      <span className="bg-orange-200 w-6 h-6 flex items-center justify-center rounded-full font-bold">১</span>
                      <p>বিকাশ অ্যাপে যান অথবা **\*২৪৭#** ডায়াল করে **'Send Money'** অপশন বেছে নিন।</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-orange-200 w-6 h-6 flex items-center justify-center rounded-full font-bold">২</span>
                      <p>উপরের দেওয়া নম্বরে মোট **৳{totalPrice}** টাকা পাঠিয়ে দিন।</p>
                    </div>
                    <div className="flex gap-3">
                      <span className="bg-orange-200 w-6 h-6 flex items-center justify-center rounded-full font-bold">৩</span>
                      <p>টাকা পাঠানোর পর নিচের ঘরে আপনার **বিকাশ নম্বর** ও **TrxID** লিখে অর্ডার সম্পন্ন করুন।</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input required type="text" placeholder="যে নম্বর থেকে পাঠিয়েছেন" 
                      className="w-full p-4 border-2 border-orange-300 rounded-xl focus:border-orange-600 outline-none text-gray-900 placeholder-gray-500"
                      onChange={(e) => setFormData({...formData, bkashNumber: e.target.value})} />
                    <input required type="text" placeholder="TrxID (ট্রানজেকশন আইডি)" 
                      className="w-full p-4 border-2 border-orange-300 rounded-xl focus:border-orange-600 outline-none text-gray-900 placeholder-gray-500"
                      onChange={(e) => setFormData({...formData, trxId: e.target.value})} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* ডান পাশ: অর্ডার সামারি */}
          <div className="w-full lg:w-[380px]">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-200 sticky top-10">
              <h3 className="text-xl font-black text-gray-900 mb-6 border-b pb-4">অর্ডার সামারি</h3>
              <div className="flex items-center gap-4 mb-6">
                <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/image-3.jpg" className="w-16 h-16 rounded-xl border object-cover" alt="Pro" />
                <div className="text-sm font-bold text-gray-900">ডিপ চারকোল জাফরান পাঞ্জাবি</div>
              </div>

              <div className="space-y-4 mb-8 border-b pb-6 text-gray-700">
                <div className="flex justify-between items-center">
                  <span>পরিমাণ</span>
                  <div className="flex items-center gap-3 border rounded-lg px-2 py-1">
                    <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="font-bold px-2">-</button>
                    <span className="font-bold">{quantity}</span>
                    <button type="button" onClick={() => setQuantity(q => q + 1)} className="font-bold px-2">+</button>
                  </div>
                </div>
                <div className="flex justify-between font-bold text-gray-900">
                  <span>মোট বিল</span>
                  <span className="text-2xl font-black">৳ {totalPrice}</span>
                </div>
              </div>

              <button disabled={loading} type="submit" className="w-full py-5 bg-gray-900 hover:bg-black text-white text-xl font-black rounded-2xl shadow-xl transition-all">
                {loading ? "অর্ডার হচ্ছে..." : "অর্ডার কনফার্ম করুন"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}