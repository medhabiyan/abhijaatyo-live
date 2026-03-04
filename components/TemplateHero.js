"use client";

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
  
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout-section");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28">
      {/* ব্যাকগ্রাউন্ড ডিজাইন */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 opacity-40">
        <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[70%] rounded-full bg-[#F3EFE6] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* বাম পাশ: ডাইনামিক ছবি ও ব্যাজ */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <div className="relative p-2 rounded-t-[140px] rounded-b-[20px] border border-[#E5DFD3] bg-white shadow-2xl">
            <img src={image} alt={mainTitle} className="w-full max-w-md h-[550px] object-cover rounded-t-[130px] rounded-b-[12px]" />
            <div className="absolute -right-4 top-24 bg-[#B8905B] text-white text-sm font-bold tracking-widest uppercase px-6 py-2 rounded-full shadow-lg rotate-3">
              {badgeText}
            </div>
          </div>
        </div>

        {/* ডান পাশ: ডাইনামিক টেক্সট ও দাম */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h3 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-4">
            {topHeading}
          </h3>
          
          <h1 className="text-4xl lg:text-6xl font-black text-[#2C2A29] leading-[1.15] mb-6">
            {mainTitle} <br />
            <span className="text-3xl lg:text-5xl font-light italic text-[#5A5753] mt-2 block">
              {italicTitle}
            </span>
          </h1>
          
          <p className="text-[#5A5753] text-lg leading-relaxed mb-10 max-w-lg mx-auto lg:mx-0">
            {description}
          </p>
          
          <div className="flex items-baseline justify-center lg:justify-start gap-3 mb-10">
            <span className="text-4xl font-black text-[#800020]">৳ {price}</span>
            {regularPrice && (
              <span className="text-xl text-[#A9A49E] line-through">৳ {regularPrice}</span>
            )}
          </div>

          <button onClick={scrollToCheckout} className="inline-block px-12 py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-lg font-bold transition-all shadow-lg transform hover:-translate-y-1">
            এখনই অর্ডার করুন
          </button>
        </div>
      </div>
    </section>
  );
}