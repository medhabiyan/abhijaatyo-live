"use client";
import Link from "next/link";

export default function HeritageHero() {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* ব্যাকগ্রাউন্ডের হালকা টেক্সচার বা ডিজাইন (ঐচ্ছিক) */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#F3EFE6] blur-3xl"></div>
        <div className="absolute top-[60%] -left-[10%] w-[40%] h-[60%] rounded-full bg-[#F3EFE6] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* বাম পাশ: রয়্যাল ইমেজ ফ্রেম */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="relative p-2 rounded-t-[140px] rounded-b-[20px] border border-[#E5DFD3] bg-white shadow-2xl shadow-[#E5DFD3]/50">
              <img 
                src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/image-3.jpg" 
                alt="Deep Charcoal Jafran Print Punjabi" 
                className="w-full max-w-md h-[550px] object-cover rounded-t-[130px] rounded-b-[12px]"
              />
              {/* গোল্ডেন ব্যাজ */}
              <div className="absolute -right-4 top-24 bg-[#B8905B] text-white text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-full shadow-lg transform rotate-3">
                Premium
              </div>
            </div>
          </div>

          {/* ডান পাশ: প্রিমিয়াম টাইপোগ্রাফি */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-4">
              আভিজাত্যের নতুন সংজ্ঞা
            </h3>
            
            <h1 className="text-4xl lg:text-6xl font-black text-[#2C2A29] leading-[1.15] mb-6">
              ডিপ চারকোল <br />
              <span className="text-3xl lg:text-5xl font-light italic text-[#5A5753] mt-2 block">
                ‘জাফরান প্রিন্ট’ ডিজিটাল পাঞ্জাবি
              </span>
            </h1>
            
            <p className="text-[#5A5753] text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              গর্জিয়াস কালার এবং আরামদায়ক ফেব্রিক্সের এই অনন্য কম্বিনেশন আপনার মার্জিত রুচিকে ফুটিয়ে তুলবে। যেকোনো উৎসবের মধ্যমণি হতে বেছে নিন আমাদের এই এক্সক্লুসিভ কালেকশন।
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8 mb-10">
              <div className="text-center lg:text-left">
                <p className="text-[#B8905B] text-sm font-bold uppercase tracking-wider mb-1">অফার মূল্য</p>
                <div className="flex items-baseline gap-3">
                  <span className="text-4xl font-black text-[#800020]">৳ ১,২৯৯</span>
                  <span className="text-xl text-[#A9A49E] line-through">৳ ২,২০০</span>
                </div>
              </div>
            </div>

            {/* বাটনটি এখন লিংক হিসেবে কাজ করবে এবং চেকআউট পেজে যাবে */}
            <Link 
              href="/heritage-panjabi/checkout"
              className="inline-block px-12 py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-lg font-bold rounded-none tracking-wide transition-all shadow-[0_8px_30px_rgba(128,0,32,0.3)] hover:shadow-[0_8px_30px_rgba(128,0,32,0.5)] transform hover:-translate-y-1"
            >
              এখনই অর্ডার করুন
            </Link>
            
            <p className="mt-5 text-sm text-[#8C8781] font-medium flex items-center justify-center lg:justify-start gap-2">
              <svg className="w-4 h-4 text-[#B8905B]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
              সারা বাংলাদেশে ক্যাশ অন ডেলিভারি
            </p>
          </div>
          
        </div>
      </div>
    </section>
  );
}