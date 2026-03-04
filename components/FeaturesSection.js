"use client";

export default function FeaturesSection() {
  const features = [
    { title: "উন্নত ফেব্রিক্স", desc: "উন্নত মানের 'জাফরান প্রিন্ট ফেব্রিক্স' যা টেকসই এবং লাক্সারি।" },
    { title: "ডিজিটাল প্রিন্ট", desc: "কাপড়ের প্রতিটি ভাঁজে জাফরান মোটিফ এবং ডিজিটাল প্রিন্টের সূক্ষ্ম কারুকাজ।" },
    { title: "গর্জিয়াস কালার", desc: "আভিজাত্যময় ডিপ চারকোল কালার যা আপনাকে করে তুলবে অনন্য।" },
    { title: "মডার্ন লুক", desc: "ঈদ বা পার্টিতে মডার্ন ও ট্র্যাডিশনাল লুকের এক দারুণ সংমিশ্রণ।" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* সেকশন টাইটেল */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">কেন এই পাঞ্জাবিটি সেরা?</h2>
          <div className="w-20 h-1 bg-gray-900 mx-auto"></div>
        </div>

        {/* ছবির গ্যালারি - গ্রিড লেআউট */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-16">
          <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P4.webp" alt="P4" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
          <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P3.webp" alt="P3" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
          <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P1.webp" alt="P1" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
          <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P7.webp" alt="P7" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
          <img src="https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P6.webp" alt="P6" className="rounded-xl border shadow-sm hover:scale-[1.02] transition-transform cursor-pointer" />
          <div className="bg-gray-900 rounded-xl flex items-center justify-center p-6 text-center text-white">
             <p className="text-lg font-medium italic">"আভিজাত্য ও আরামের অনন্য সংমিশ্রণ"</p>
          </div>
        </div>

        {/* বৈশিষ্ট্যসমূহ (Features Card) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((f, index) => (
            <div key={index} className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 hover:border-gray-300 transition-colors">
              <div className="w-10 h-10 bg-gray-900 text-white rounded-full flex items-center justify-center mb-4 font-bold">
                {index + 1}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{f.title}</h3>
              <p className="text-gray-600 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}