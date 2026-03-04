"use client";

export default function TemplateFeatures({ 
  sectionSubTitle = "কোয়ালিটি ও ডিজাইন", 
  mainHeading = "কেন এই প্রোডাক্টটি", 
  italicHeading = "সংগ্রহে থাকা উচিত?", 
  features = [], 
  images = [],   
  quoteText = "" 
}) {
  const scrollToCheckout = () => {
    const checkoutSection = document.getElementById("checkout-section");
    if (checkoutSection) {
      checkoutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="bg-[#F3EFE6] py-20 lg:py-28 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-4">{sectionSubTitle}</h2>
          <h3 className="text-3xl lg:text-5xl font-black text-[#2C2A29]">{mainHeading} <br className="hidden md:block" /> <span className="font-light italic text-[#5A5753]">{italicHeading}</span></h3>
          <div className="w-24 h-[2px] bg-[#B8905B] mx-auto mt-8 opacity-50"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-24">
          {features?.map((f, index) => (
            <div key={index} className="flex gap-6 items-start bg-white p-8 rounded-tr-[40px] rounded-bl-[40px] shadow-[0_10px_40px_rgba(44,42,41,0.05)] border border-[#E5DFD3] hover:shadow-[0_10px_40px_rgba(184,144,91,0.15)] transition-all">
              <div className="text-[#800020] text-4xl font-black opacity-20 mt-1">0{index + 1}</div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2A29] mb-3">{f.title}</h4>
                <p className="text-[#5A5753] leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {images?.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 lg:gap-8 mb-20">
            {images.map((img, i) => (
              <div key={i} className={`p-2 bg-white rounded-sm shadow-lg border border-[#E5DFD3] ${i === 2 ? 'row-span-2' : ''}`}>
                <img src={img} alt={`Gallery Image ${i+1}`} className="w-full h-full object-cover border border-[#F3EFE6]" />
              </div>
            ))}
            <div className="bg-[#2C2A29] flex items-center justify-center p-8 text-center border-4 border-[#B8905B]/30">
               <p className="text-[#E5DFD3] text-xl font-light italic leading-relaxed" dangerouslySetInnerHTML={{ __html: quoteText }} />
            </div>
          </div>
        )}

        <div className="text-center bg-white p-12 lg:p-20 rounded-[20px] border border-[#E5DFD3] shadow-2xl relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-3xl font-black text-[#2C2A29] mb-6">স্টক সীমিত! আজই অর্ডার করুন</h2>
            <p className="text-[#5A5753] mb-10 max-w-xl mx-auto">প্রিমিয়াম কোয়ালিটির এই প্রোডাক্টটি পেতে নিচের বাটনে ক্লিক করে আপনার ডেলিভারি তথ্য দিন।</p>
            <button onClick={scrollToCheckout} className="inline-block px-12 py-5 bg-[#800020] hover:bg-[#5C0017] text-white text-lg font-bold shadow-[0_8px_30px_rgba(128,0,32,0.3)] transform hover:-translate-y-1 transition-all">
              এখনই অর্ডার করুন ➔
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}