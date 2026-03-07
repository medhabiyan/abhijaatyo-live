import Link from 'next/link';

export const metadata = {
  title: 'Abhijaatyo | আভিজাত্যের নতুন সংজ্ঞা',
  description: 'আমাদের প্রিমিয়াম পাঞ্জাবি কালেকশন। উৎসবের রঙে নিজেকে সাজান।',
};

export default function HomePage() {
  // আমাদের ৬টি মাস্টারপিস প্রোডাক্টের ডেটাবেস
  const products = [
    {
      id: 79,
      name: "প্রিমিয়াম White জাফরান",
      badge: "Premium",
      price: 1080,
      regularPrice: 1999,
      image: "https://abhijaatyo.com/wp-content/uploads/2026/03/7.webp",
      link: "/premium-white"
    },
    {
      id: 78,
      name: "মিল্ক হোয়াইট চমক ফেব্রিক্স",
      badge: "Classic",
      price: 1199,
      regularPrice: 1999,
      image: "https://abhijaatyo.com/wp-content/uploads/2026/03/Milk-2-scaled-1.jpg",
      link: "/milk-white"
    },
    {
      id: 19,
      name: "সফট স্কাই ব্লু এমব্রয়ডারি",
      badge: "Exclusive",
      price: 1199,
      regularPrice: 1999,
      image: "https://abhijaatyo.com/wp-content/uploads/2026/03/Soft-Sky-Blue-5-scaled-1.jpg",
      link: "/soft-sky-blue"
    },
    {
      id: 21,
      name: "রোজ কালার প্রিমিয়াম কাতান",
      badge: "Royal",
      price: 1599,
      regularPrice: 2500,
      image: "https://abhijaatyo.com/wp-content/uploads/2026/03/6-3-scaled-1.jpg",
      link: "/rose-katan"
    },
    {
      id: 23,
      name: "ডিপ চারকোল ডিজিটাল প্রিন্ট",
      badge: "Digital",
      price: 1299,
      regularPrice: 2200,
      image: "https://abhijaatyo.com/wp-content/uploads/2026/03/image-3.jpg",
      link: "/deep-charcoal"
    },
    {
      id: 22,
      name: "মেরুন জাফরান ডিজিটাল প্রিন্ট",
      badge: "Festive",
      price: 1299,
      regularPrice: 2200,
      image: "https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P2.webp",
      link: "/maroon-jafran"
    }
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      {/* ১. গ্র্যান্ড হিরো সেকশন */}
      <section className="bg-[#2C2A29] text-white py-20 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-[#B8905B] font-bold tracking-[0.3em] uppercase text-sm mb-4">Abhijaatyo Exclusive</h2>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            আভিজাত্যের <span className="italic font-serif font-light">নতুন সংজ্ঞা</span>
          </h1>
          <p className="text-[#A9A49E] text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            উৎসবের রঙে নিজেকে সাজান। আমাদের প্রতিটি পাঞ্জাবি তৈরি হয়েছে উন্নত মানের ফেব্রিক্স এবং নিখুঁত কারুকাজ দিয়ে, যা আপনার ব্যক্তিত্বে যোগ করবে রাজকীয় আভিজাত্য।
          </p>
          <a href="#collection" className="inline-block bg-[#B8905B] text-white px-8 py-4 font-bold tracking-widest uppercase text-sm hover:bg-[#a07b4c] transition-colors duration-300 shadow-lg">
            পুরো কালেকশন দেখুন
          </a>
        </div>
      </section>

      {/* ২. ব্র্যান্ড ট্রাস্ট / USP সেকশন */}
      <section className="bg-white py-12 border-b border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-[#E5DFD3]">
          <div className="p-4">
            <h3 className="text-[#800020] font-bold text-xl mb-2">১০০% প্রিমিয়াম ফেব্রিক্স</h3>
            <p className="text-[#5A5753] text-sm">দিনভর সতেজতা এবং সর্বোচ্চ আরামের নিশ্চয়তা।</p>
          </div>
          <div className="p-4">
            <h3 className="text-[#800020] font-bold text-xl mb-2">নিখুঁত ফিটিং</h3>
            <p className="text-[#5A5753] text-sm">প্রতিটি শারীরিক গঠনের জন্য মানানসই স্মার্ট লুক।</p>
          </div>
          <div className="p-4">
            <h3 className="text-[#800020] font-bold text-xl mb-2">ক্যাশ অন ডেলিভারি</h3>
            <p className="text-[#5A5753] text-sm">প্রোডাক্ট হাতে পেয়ে পেমেন্ট করার নিশ্চিন্ত সুবিধা।</p>
          </div>
        </div>
      </section>

      {/* ৩. প্রোডাক্ট আর্কাইভ গ্রিড */}
      <section id="collection" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-[#2C2A29]">আমাদের এক্সক্লুসিভ কালেকশন</h2>
            <div className="w-24 h-1 bg-[#B8905B] mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {products.map((product) => (
              <div key={product.id} className="bg-white border border-[#E5DFD3] shadow-sm hover:shadow-xl transition-shadow duration-300 group">
                
                {/* প্রোডাক্ট ইমেজ ও ব্যাজ */}
                <div className="relative overflow-hidden aspect-[3/4]">
                  <span className="absolute top-4 left-4 z-10 bg-[#2C2A29] text-white text-xs font-bold px-3 py-1 tracking-widest uppercase shadow-md">
                    {product.badge}
                  </span>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>

                {/* প্রোডাক্ট ডিটেইলস ও বাটন */}
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-[#2C2A29] mb-2 h-14">{product.name}</h3>
                  <div className="flex justify-center items-center gap-3 mb-6">
                    <span className="text-[#A9A49E] line-through text-sm font-medium">৳ {product.regularPrice}</span>
                    <span className="text-[#800020] font-black text-xl">৳ {product.price}</span>
                  </div>

                  {/* ডুয়াল বাটন */}
                  <div className="grid grid-cols-2 gap-3">
                    <Link 
                      href={product.link}
                      className="border-2 border-[#2C2A29] text-[#2C2A29] font-bold py-3 text-sm hover:bg-[#2C2A29] hover:text-white transition-colors duration-300"
                    >
                      বিস্তারিত জানুন
                    </Link>
                    <Link 
                      href={`${product.link}#checkout-section`}
                      className="bg-[#800020] text-white font-bold py-3 text-sm hover:bg-[#5a0016] transition-colors duration-300 shadow-md"
                    >
                      এখনই কিনুন
                    </Link>
                  </div>
                </div>
                
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ৪. ফুটার */}
      <footer className="bg-[#2C2A29] py-12 text-center border-t-4 border-[#B8905B]">
        <h3 className="text-white text-2xl font-bold mb-4 tracking-widest">ABHIJAATYO</h3>
        <p className="text-[#A9A49E] text-sm tracking-widest uppercase mb-6">Elegance Redefined</p>
        <p className="text-[#5A5753] text-xs">© 2026 Abhijaatyo. All Rights Reserved.</p>
      </footer>
    </main>
  );
}