"use client";

import { useState, useEffect } from 'react';

// ওপর থেকে পাঠানো তথ্যগুলো (Props) এখানে রিসিভ করছি
export default function TemplateHero({ 
  badgeText = "Premium", 
  topHeading, 
  mainTitle, 
  italicTitle, 
  description, 
  price, 
  regularPrice, 
  image 
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // পেজ ট্রানজিশনের জন্য ফেড-ইন অ্যানিমেশন
    setIsVisible(true);

    // স্ক্রল ইন্ডিকেটর হাইড করার লজিক (মোবাইলের জন্য)
    const handleScroll = () => {
      if (window.scrollY > 150) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout-section");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    // স্মুথ ফেড-ইন ট্রানজিশন র‍্যাপার
    <div className={`transition-all duration-[800ms] ease-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      
      <section className="relative overflow-hidden pt-6 md:pt-12 pb-16 lg:pt-20 lg:pb-28">
        {/* ব্যাকগ্রাউন্ড ডিজাইন */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#F3EFE6] blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          
          {/* ==================== বাম পাশ: ছবি ও মোবাইল ভিউ বাটন ==================== */}
          <div className="w-full lg:w-1/2 flex flex-col items-center">
            
            {/* আইকনিক আর্চ (গম্বুজ) ডিজাইন */}
            <div className="relative p-2 rounded-t-[140px] rounded-b-[20px] border border-[#E5DFD3] bg-white shadow-2xl">
              <img src={image} alt={mainTitle} className="w-full max-w-md h-[450px] md:h-[550px] object-cover rounded-t-[130px] rounded-b-[12px]" />
              <div className="absolute -right-2 md:-right-4 top-24 bg-[#B8905B] text-white text-xs md:text-sm font-bold tracking-widest uppercase px-5 py-2 rounded-full shadow-lg rotate-3">
                {badgeText}
              </div>
            </div>

            {/* 📱 শুধুমাত্র মোবাইলের জন্য প্রাইস এবং অর্ডার বাটন (ছবির ঠিক নিচে) */}
            <div className="flex flex-col items-center w-full mt-8 lg:hidden">
              <div className="flex items-baseline justify-center gap-3 mb-5">
                <span className="text-4xl font-black text-[#800020]">৳ {price}</span>
                {regularPrice && (
                  <span className="text-xl text-[#A9A49E] line-through">৳ {regularPrice}</span>
                )}
              </div>
              <button onClick={scrollToCheckout} className="w-[90%] py-4 bg-[#800020] hover:bg-[#5C0017] text-white text-lg font-bold transition-all shadow-lg transform hover:-translate-y-1 flex justify-center items-center gap-2">
                এখনই অর্ডার করুন
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>

              {/* 📱 বাউন্সিং স্ক্রল ইন্ডিকেটর (তীর চিহ্ন) */}
              <div className={`flex flex-col items-center justify-center mt-8 transition-opacity duration-500 ${scrolled ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                <span className="text-[10px] text-[#A9A49E] font-bold uppercase tracking-widest mb-2">বিস্তারিত জানুন</span>
                <div className="animate-bounce bg-white border border-[#E5DFD3] rounded-full p-2 shadow-md text-[#800020]">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m6 9 6 6 6-6"></path>
                  </svg>
                </div>
              </div>
            </div>

          </div>

          {/* ==================== ডান পাশ: ডাইনামিক টেক্সট ও পিসি ভিউ বাটন ==================== */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mt-4 lg:mt-0">
            <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-xs md:text-sm mb-4">
              {topHeading}
            </h3>
            
            <h1 className="text-3xl lg:text-6xl font-black text-[#2C2A29] leading-[1.2] lg:leading-[1.15] mb-4 lg:mb-6">
              {mainTitle} <br />
              <span className="text-2xl lg:text-5xl font-light italic text-[#5A5753] mt-2 block">
                {italicTitle}
              </span>
            </h1>
            
            <p className="text-[#5A5753] text-sm lg:text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
              {description}
            </p>
            
            {/* 💻 শুধুমাত্র পিসির জন্য প্রাইস এবং অর্ডার বাটন (ডেসক্রিপশনের নিচে) */}
            <div className="hidden lg:flex items-baseline justify-start gap-3 mb-10">
              <span className="text-4xl font-black text-[#800020]">৳ {price}</span>
              {regularPrice && (
                <span className="text-xl text-[#A9A49E] line-through">৳ {regularPrice}</span>
              )}
            </div>

            <button onClick={scrollToCheckout} className="hidden lg:inline-flex items-center gap-3 px-12 py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-lg font-bold transition-all shadow-lg transform hover:-translate-y-1">
              এখনই অর্ডার করুন
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
              </svg>
            </button>
          </div>

        </div>
      </section>
    </div>
  );
}