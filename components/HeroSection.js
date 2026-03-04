"use client";
// import Image from "next/image";

export default function HeroSection() {
  // অর্ডার বাটনে ক্লিক করলে স্মুথলি ফর্মের কাছে নিয়ে যাবে (ফর্মটা আমরা পরে বানাবো)
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout-form");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12 md:py-20">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16">
        
        {/* বাম পাশ: প্রোডাক্টের প্রধান ছবি */}
        <div className="w-full md:w-1/2 relative group">
          <div className="absolute inset-0 bg-gray-900 rounded-2xl transform translate-x-3 translate-y-3 opacity-10 transition-transform group-hover:translate-x-4 group-hover:translate-y-4 duration-300"></div>
          <img 
            src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/image-3.jpg" 
            alt="Deep Charcoal Jafran Print Punjabi" 
            className="relative z-10 w-full h-auto object-cover rounded-2xl shadow-lg border border-gray-100"
          />
        </div>

        {/* ডান পাশ: প্রোডাক্টের ইনফো ও ক্যাচি হেডলাইন */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="inline-block px-4 py-1 bg-gray-900 text-white text-xs font-bold tracking-widest uppercase rounded-full w-max mb-6">
            Premium Collection
          </div>
          
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
            প্রিমিয়াম ডিপ চারকোল <br/>
            <span className="text-gray-600 font-light text-2xl md:text-4xl">‘জাফরান প্রিন্ট’ ডিজিটাল পাঞ্জাবি</span>
          </h1>
          
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            আপনার মার্জিত রুচি ও ব্যক্তিত্বকে ফুটিয়ে তুলতে আমরা নিয়ে এসেছি এই এক্সক্লুসিভ পাঞ্জাবি। গর্জিয়াস কালার এবং আরামদায়ক ফেব্রিক্সের এই কম্বিনেশন যেকোনো উৎসবের মধ্যমণি হতে আপনাকে সাহায্য করবে।
          </p>

          {/* মূল্য এবং বাটন */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-6 mb-8 border-t border-gray-200 pt-6">
            <div>
              <p className="text-sm text-gray-500 uppercase tracking-wide font-semibold mb-1">অফারে আজকের মূল্য</p>
              <div className="flex items-end gap-3">
                <span className="text-4xl font-black text-gray-900">৳ ১,২৯৯</span>
                <span className="text-xl text-gray-400 line-through mb-1">৳ ২,২০০</span>
              </div>
            </div>
          </div>

          <button 
            onClick={scrollToCheckout}
            className="w-full sm:w-auto px-10 py-4 bg-gray-900 hover:bg-black text-white text-lg font-bold rounded-xl shadow-2xl hover:shadow-gray-900/50 transition-all transform hover:-translate-y-1"
          >
            অর্ডার করতে ক্লিক করুন
          </button>
          
          <p className="text-sm text-gray-500 mt-4 flex items-center gap-2">
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
            সারা বাংলাদেশে ক্যাশ অন ডেলিভারি (চার্জ: ১২০৳)
          </p>
        </div>
      </div>
    </section>
  );
}