"use client";
import Link from "next/link";

export default function HeritageFeatures() {
  const features = [
    { 
      title: "উন্নত ফেব্রিক্স", 
      desc: "উন্নত মানের 'জাফরান প্রিন্ট ফেব্রিক্স' (Jafran Print Fabrics)। যা দীর্ঘক্ষণ পরে থাকলেও দেবে আরামদায়ক অনুভূতি।" 
    },
    { 
      title: "ডিজিটাল কারুকাজ", 
      desc: "কাপড়ের প্রতিটি ভাঁজে থাকা জাফরান মোটিফ এবং ডিজিটাল প্রিন্টের সূক্ষ্ম কারুকাজ এর সৌন্দর্য বহুগুণ বাড়িয়ে দেয়।" 
    },
    { 
      title: "আভিজাত্যময় কালার", 
      desc: "ডিপ চারকোল (Deep Charcoal Color) কালার, যা আপনার ব্যক্তিত্বকে করবে আরও আকর্ষণীয় ও মার্জিত।" 
    },
    { 
      title: "পারফেক্ট লুক", 
      desc: "মডার্ন ও ট্র্যাডিশনাল লুকের এক দারুণ সংমিশ্রণ। ঈদ, পার্টি বা যেকোনো বিশেষ প্রোগ্রামের জন্য সেরা পছন্দ।" 
    },
  ];

  return (
    <section className="bg-[#F3EFE6] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* সেকশন টাইটেল */}
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            কোয়ালিটি ও ডিজাইন
          </h2>
          <h3 className="text-3xl lg:text-5xl font-black text-[#2C2A29]">
            কেন এই পাঞ্জাবিটি আপনার <br className="hidden md:block" /> 
            <span className="font-light italic text-[#5A5753]">সংগ্রহে থাকা উচিত?</span>
          </h3>
          <div className="w-24 h-[2px] bg-[#B8905B] mx-auto mt-8 opacity-50"></div>
        </div>

        {/* বৈশিষ্ট্যসমূহ (Royal Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {features.map((f, index) => (
            <div key={index} className="flex gap-6 items-start bg-white p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-[0_10px_40px_rgba(44,42,41,0.05)] border border-[#E5DFD3] hover:shadow-[0_10px_40px_rgba(184,144,91,0.15)] transition-all">
              <div className="text-[#800020] text-4xl font-black opacity-20 mt-1">
                0{index + 1}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2A29] mb-3">{f.title}</h4>
                <p className="text-[#5A5753] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ছবির গ্যালারি - রয়্যাল ফ্রেম লেআউট */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mb-20">
          {[
            "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P4.webp",
            "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P3.webp",
            "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P1.webp",
            "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P7.webp",
            "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P6.webp"
          ].map((img, i) => (
            <div key={i} className={`p-2 bg-white rounded-sm shadow-lg border border-[#E5DFD3] ${i === 2 ? 'row-span-2' : ''}`}>
              <img src={img} alt={`Gallery Image ${i+1}`} className="w-full h-full object-cover border border-[#F3EFE6]" />
            </div>
          ))}
          <div className="bg-[#2C2A29] flex items-center justify-center p-8 text-center border-4 border-[#B8905B]/30">
             <p className="text-[#E5DFD3] text-xl font-light italic leading-relaxed">
               "প্রতিটি সুতোয় <br/> আভিজাত্যের ছোঁয়া"
             </p>
          </div>
        </div>

        {/* বটম কল টু অ্যাকশন (CTA) */}
        <div className="text-center bg-white p-12 lg:p-20 rounded-[20px] border border-[#E5DFD3] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#2C2A29] mb-6">স্টক সীমিত! আজই অর্ডার করুন</h2>
            <p className="text-[#5A5753] mb-10 max-w-xl mx-auto">
              প্রিমিয়াম কোয়ালিটির এই পাঞ্জাবিটি পেতে নিচের বাটনে ক্লিক করে আপনার ডেলিভারি তথ্য দিন।
            </p>
            <Link 
              href="/heritage-panjabi/checkout"
              className="inline-block px-12 py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-lg font-bold tracking-wide transition-all shadow-[0_8px_30px_rgba(128,0,32,0.3)] hover:shadow-[0_8px_30px_rgba(128,0,32,0.5)] transform hover:-translate-y-1"
            >
              চেকআউট পেজে যান ➔
            </Link>
          </div>
          {/* ডিজাইন এলিমেন্ট */}
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#F3EFE6] rounded-full blur-3xl opacity-50 z-0"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#F3EFE6] rounded-full blur-3xl opacity-50 z-0"></div>
        </div>

      </div>
    </section>
  );
}