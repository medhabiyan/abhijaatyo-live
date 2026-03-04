"use client";
import Link from "next/link";
import { useEffect } from "react";

export default function HeritageThankYouPage() {
  
  // মার্কেটিং হ্যাক: এই পেজটি লোড হলেই ফেসবুক পিক্সেলকে সেলসের সিগন্যাল দেবে
  useEffect(() => {
    // এখানে পরবর্তীতে আপনার পিক্সেলের Purchase ইভেন্ট কোড বসবে
    console.log("Pixel Event: Purchase Successful!");
  }, []);

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29] flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* ব্যাকগ্রাউন্ড ডিজাইন এলিমেন্টস */}
      <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-[#B8905B] rounded-full blur-[100px] opacity-20"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-96 h-96 bg-[#800020] rounded-full blur-[100px] opacity-10"></div>
      </div>

      {/* মেইন থ্যাঙ্ক ইউ কার্ড */}
      <div className="max-w-2xl w-full bg-white p-10 lg:p-16 text-center border border-[#E5DFD3] shadow-[0_20px_60px_rgba(44,42,41,0.05)] relative z-10 animate-in zoom-in-95 duration-700">
        
        {/* টপ বর্ডার ডিজাইন */}
        <div className="absolute top-0 left-0 w-full h-2 bg-[#800020]"></div>
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#B8905B]"></div>

        {/* রয়্যাল সাকসেস আইকন */}
        <div className="w-24 h-24 mx-auto border-2 border-[#B8905B] rounded-full flex items-center justify-center mb-8 bg-[#FCFBF8] shadow-inner">
          <svg className="w-10 h-10 text-[#800020]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>

        {/* টাইপোগ্রাফি */}
        <h3 className="text-[#B8905B] font-bold tracking-[0.3em] uppercase text-sm mb-4">
          অর্ডার সম্পন্ন
        </h3>
        
        <h1 className="text-4xl lg:text-5xl font-black text-[#2C2A29] mb-6 leading-tight">
          অসংখ্য ধন্যবাদ! <br/>
          <span className="font-light italic text-[#5A5753] text-2xl lg:text-3xl mt-2 block">
            আপনার অর্ডারটি গৃহীত হয়েছে
          </span>
        </h1>

        <div className="w-16 h-[1px] bg-[#B8905B] mx-auto mb-8 opacity-50"></div>

        <p className="text-[#5A5753] text-lg leading-relaxed mb-10 max-w-lg mx-auto">
          খুব শিগগিরই আমাদের একজন প্রতিনিধি আপনার দেওয়া নম্বরে কল করে অর্ডারটি কনফার্ম করবেন। আভিজাত্য আর ঐতিহ্যের এই যাত্রায় <strong className="text-[#800020]">অভিজাত্য</strong>-এর সাথে থাকার জন্য আপনাকে আন্তরিক ধন্যবাদ।
        </p>

        {/* কল টু অ্যাকশন বাটন */}
        <Link 
          href="/"
          className="inline-block px-10 py-4 border-2 border-[#800020] text-[#800020] hover:bg-[#800020] hover:text-white font-bold tracking-widest uppercase text-sm transition-all hover:shadow-[0_10px_20px_rgba(128,0,32,0.2)]"
        >
          আমাদের স্টোর ভিজিট করুন
        </Link>

        {/* ফুটনোট */}
        <div className="mt-14">
           <p className="text-[#A9A49E] text-xs uppercase tracking-widest font-bold">
             Elegance • Heritage • Comfort
           </p>
        </div>

      </div>
    </main>
  );
}