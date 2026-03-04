"use client";
import { useState } from "react";

export default function SinglePageFunnel() {
  // প্রোডাক্টের বেসিক তথ্য
  const productId = 43; 
  const productPrice = 1250; // আপনার প্রোডাক্টের দাম (প্রয়োজনে পরিবর্তন করুন)
  const deliveryCharge = 120; // ফিক্সড ডেলিভারি চার্জ

  // স্টেট ম্যানেজমেন্ট
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("");
  const [formData, setFormData] = useState({ name: '', phone: '', address: '', bkashNumber: '', trxId: '' });
  const [paymentMethod, setPaymentMethod] = useState('cod');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // ডাইনামিক হিসাব
  const totalPrice = (productPrice * quantity) + deliveryCharge;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedSize) {
      alert("দয়া করে প্রোডাক্টের সাইজ সিলেক্ট করুন!");
      return;
    }
    if (formData.phone.length !== 11) {
      alert("দয়া করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন।");
      return;
    }

    setLoading(true);
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, productId, quantity, size: selectedSize, paymentMethod, totalPrice })
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      setSuccess(true);
    } else {
      alert("অর্ডার প্রসেস করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  // অর্ডার সাকসেস হলে এই পেজ দেখাবে (Thank You Page)
  if (success) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <div className="bg-white p-10 rounded-2xl shadow-xl text-center border-t-8 border-green-500 max-w-lg w-full">
          <h1 className="text-3xl font-extrabold text-gray-800 mb-4">অর্ডার সফল হয়েছে! 🎉</h1>
          <p className="text-gray-600 text-lg">ধন্যবাদ! আমরা আপনার অর্ডারটি পেয়েছি। খুব দ্রুত আমাদের প্রতিনিধি আপনার সাথে যোগাযোগ করবেন।</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans selection:bg-[#f85606] selection:text-white">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* বাম পাশ: প্রোডাক্ট ডিটেইলস ও সিলেকশন */}
        <div className="md:w-1/2 bg-white p-6 rounded-2xl shadow-lg h-fit sticky top-6">
          <img src="https://via.placeholder.com/600x600?text=Product+ID+43" alt="Product" className="w-full rounded-xl object-cover mb-6 border" />
          <h1 className="text-2xl font-bold text-gray-800 mb-2">এক্সক্লুসিভ প্রিমিয়াম শার্ট/পাঞ্জাবি</h1>
          <p className="text-gray-500 mb-4">১০০% প্রিমিয়াম কোয়ালিটি। আকর্ষণীয় ডিজাইনের এই প্রোডাক্টটি আপনার স্টাইলকে আরও বাড়িয়ে তুলবে।</p>
          <div className="text-3xl font-black text-[#f85606] mb-6">৳ {productPrice}</div>

          {/* সাইজ ভ্যারিয়েশন (M, L, XL) */}
          <div className="mb-6">
            <label className="block text-sm font-bold text-gray-700 mb-2">সাইজ সিলেক্ট করুন *</label>
            <div className="flex gap-3">
              {['M-40"', 'L-42"', 'XL-44"'].map((size) => (
                <button
                  key={size}
                  type="button"
                  onClick={() => setSelectedSize(size)}
                  className={`flex-1 py-2 border-2 rounded-lg font-bold transition-all ${selectedSize === size ? 'border-[#f85606] bg-orange-50 text-[#f85606]' : 'border-gray-200 text-gray-600 hover:border-gray-300'}`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* কোয়ান্টিটি (Quantity) */}
          <div className="mb-6 border-t pt-4">
            <label className="block text-sm font-bold text-gray-700 mb-2">পরিমাণ (Quantity)</label>
            <div className="flex items-center gap-4">
              <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))} className="w-10 h-10 bg-gray-200 rounded-full font-bold text-xl hover:bg-gray-300">-</button>
              <span className="text-xl font-bold w-8 text-center">{quantity}</span>
              <button type="button" onClick={() => setQuantity(q => q + 1)} className="w-10 h-10 bg-gray-200 rounded-full font-bold text-xl hover:bg-gray-300">+</button>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg border mt-4">
            <div className="flex justify-between text-gray-600 mb-1"><span>দাম:</span> <span>৳ {productPrice * quantity}</span></div>
            <div className="flex justify-between text-gray-600 mb-1"><span>ডেলিভারি চার্জ:</span> <span>৳ {deliveryCharge}</span></div>
            <div className="flex justify-between text-xl font-black text-[#f85606] mt-2 border-t pt-2"><span>মোট বিল:</span> <span>৳ {totalPrice}</span></div>
          </div>
        </div>

        {/* ডান পাশ: স্মার্ট চেকআউট ফর্ম */}
        <div className="md:w-1/2 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">অর্ডার কনফার্ম করুন</h2>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <input required type="text" placeholder="আপনার সম্পূর্ণ নাম *" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, name: e.target.value})} />
            <input required type="tel" maxLength="11" placeholder="মোবাইল নম্বর (১১ ডিজিট) *" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, phone: e.target.value})} />
            <textarea required placeholder="সম্পূর্ণ ডেলিভারি ঠিকানা (গ্রাম/মহল্লা, থানা, জেলা) *" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none h-24" onChange={e => setFormData({...formData, address: e.target.value})} />

            {/* পেমেন্ট অপশন */}
            <div className="pt-4">
              <h3 className="text-md font-bold text-gray-800 mb-3">পেমেন্ট মেথড</h3>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 text-[#f85606]" />
                  <span className="ml-3 font-semibold text-gray-700">ক্যাশ অন ডেলিভারি</span>
                </label>
                <label className="flex items-center p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                  <input type="radio" value="bkash" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} className="w-5 h-5 text-[#f85606]" />
                  <span className="ml-3 font-semibold text-gray-700">বিকাশ পার্সোনাল</span>
                </label>
              </div>
            </div>

            {paymentMethod === 'bkash' && (
              <div className="bg-orange-50 p-4 rounded-lg border border-orange-200 mt-2">
                <p className="font-bold text-orange-800 mb-2">বিকাশ পার্সোনাল: 01XXXXXXXXX</p>
                <p className="text-sm text-orange-700 mb-3">প্রথমে ৳{totalPrice} সেন্ড মানি করুন।</p>
                <input required type="text" placeholder="যে নম্বর থেকে পাঠিয়েছেন" className="w-full p-3 border border-orange-300 rounded-lg mb-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, bkashNumber: e.target.value})} />
                <input required type="text" placeholder="Transaction ID (TrxID)" className="w-full p-3 border border-orange-300 rounded-lg focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, trxId: e.target.value})} />
              </div>
            )}

            <button disabled={loading} type="submit" className="w-full bg-[#f85606] hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-xl mt-6 transition-all shadow-lg disabled:bg-gray-400">
              {loading ? "অর্ডার পাঠানো হচ্ছে..." : `৳ ${totalPrice} - অর্ডার কনফার্ম করুন`}
            </button>
          </form>
        </div>

      </div>
    </div>
  );
}