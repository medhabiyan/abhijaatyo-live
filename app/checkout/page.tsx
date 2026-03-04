"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const router = useRouter();
  const productId = 4611; // আপনার আসল প্রোডাক্ট আইডি
  const productPrice = 1250;
  const deliveryCharge = 120; // ফিক্সড ডেলিভারি চার্জ
  const totalPrice = productPrice + deliveryCharge;

  const [formData, setFormData] = useState({ name: '', phone: '', address: '', bkashNumber: '', trxId: '' });
  const [paymentMethod, setPaymentMethod] = useState('cod'); // cod বা bkash
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.phone.length !== 11) {
      alert("দয়া করে সঠিক ১১ ডিজিটের মোবাইল নম্বর দিন।");
      return;
    }

    setLoading(true);
    const res = await fetch('/api/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...formData, productId, paymentMethod })
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      // অর্ডার সফল হলে থ্যাঙ্ক ইউ পেজে নিয়ে যাবে
      router.push('/thank-you');
    } else {
      alert("অর্ডার প্রসেস করতে সমস্যা হয়েছে। আবার চেষ্টা করুন।");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 font-sans">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-6">
        
        {/* বাম পাশ: ফর্ম */}
        <div className="md:w-2/3 bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 border-b pb-4">চেকআউট ফর্ম</h2>
          
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">আপনার নাম *</label>
              <input required type="text" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, name: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">মোবাইল নম্বর *</label>
              <input required type="tel" maxLength="11" placeholder="01XXXXXXXXX" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, phone: e.target.value})} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">সম্পূর্ণ ঠিকানা *</label>
              <textarea required placeholder="গ্রাম/মহল্লা, থানা, জেলা" className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none h-24" onChange={e => setFormData({...formData, address: e.target.value})} />
            </div>

            {/* পেমেন্ট অপশন */}
            <div className="mt-8">
              <h3 className="text-lg font-bold text-gray-800 mb-4">পেমেন্ট মেথড</h3>
              <div className="space-y-3">
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="radio" name="payment" value="cod" checked={paymentMethod === 'cod'} onChange={() => setPaymentMethod('cod')} className="w-5 h-5 text-[#f85606] focus:ring-[#f85606]" />
                  <span className="ml-3 font-semibold text-gray-700">ক্যাশ অন ডেলিভারি (পণ্য হাতে পেয়ে টাকা দিন)</span>
                </label>
                
                <label className="flex items-center p-4 border rounded-lg cursor-pointer hover:bg-gray-50 transition-colors">
                  <input type="radio" name="payment" value="bkash" checked={paymentMethod === 'bkash'} onChange={() => setPaymentMethod('bkash')} className="w-5 h-5 text-[#f85606] focus:ring-[#f85606]" />
                  <span className="ml-3 font-semibold text-gray-700">বিকাশ পার্সোনাল (অ্যাডভান্স পেমেন্ট)</span>
                </label>
              </div>
            </div>

            {/* বিকাশ সিলেক্ট করলে এই অংশটুকু ম্যাজিকের মতো আসবে */}
            {paymentMethod === 'bkash' && (
              <div className="bg-orange-50 p-5 rounded-lg border border-orange-200 mt-4 animate-fade-in">
                <p className="font-bold text-orange-800 mb-2">বিকাশ পার্সোনাল নম্বর: 01XXXXXXXXX</p>
                <p className="text-sm text-orange-700 mb-4">প্রথমে উপরের নম্বরে ৳{totalPrice} সেন্ড মানি করুন। তারপর নিচের তথ্যগুলো দিন।</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input required type="text" placeholder="যে নম্বর থেকে টাকা পাঠিয়েছেন" className="w-full p-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, bkashNumber: e.target.value})} />
                  <input required type="text" placeholder="Transaction ID (TrxID)" className="w-full p-3 border border-orange-300 rounded-lg focus:ring-2 focus:ring-[#f85606] outline-none" onChange={e => setFormData({...formData, trxId: e.target.value})} />
                </div>
              </div>
            )}

            <button disabled={loading} type="submit" className="w-full bg-[#f85606] hover:bg-orange-600 text-white font-bold py-4 rounded-xl text-xl transition-all shadow-lg mt-8 disabled:bg-gray-400 disabled:cursor-not-allowed">
              {loading ? "অর্ডার প্রসেস হচ্ছে..." : `৳ ${totalPrice} - অর্ডার কনফার্ম করুন`}
            </button>
          </form>
        </div>

        {/* ডান পাশ: অর্ডার সামারি */}
        <div className="md:w-1/3">
          <div className="bg-white p-6 rounded-2xl shadow-lg sticky top-6">
            <h2 className="text-xl font-bold text-gray-800 mb-4 border-b pb-3">অর্ডার সামারি</h2>
            
            <div className="flex items-center gap-4 mb-6">
              <img src="https://via.placeholder.com/100" alt="Product" className="w-16 h-16 rounded-md object-cover border" />
              <div>
                <p className="font-bold text-gray-800">প্রিমিয়াম প্রোডাক্ট</p>
                <p className="text-sm text-gray-500">পরিমাণ: ১</p>
              </div>
            </div>

            <div className="space-y-3 text-gray-600 mb-4 border-b pb-4">
              <div className="flex justify-between">
                <span>প্রোডাক্টের দাম:</span>
                <span className="font-semibold text-gray-800">৳ {productPrice}</span>
              </div>
              <div className="flex justify-between">
                <span>ডেলিভারি চার্জ:</span>
                <span className="font-semibold text-gray-800">৳ {deliveryCharge}</span>
              </div>
            </div>

            <div className="flex justify-between items-center text-lg font-black text-[#f85606]">
              <span>সর্বমোট বিল:</span>
              <span>৳ {totalPrice}</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}