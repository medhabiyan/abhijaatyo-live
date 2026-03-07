import TemplateHero from '../../components/TemplateHero';
import TemplateCheckoutForm from '../../components/TemplateCheckoutForm';

export const metadata = {
  title: 'প্রিমিয়াম মিল্ক হোয়াইট চমক ফেব্রিক্স পাঞ্জাবি | Abhijaatyo',
  description: 'আভিজাত্য আর আরামের এক অনন্য সমন্বয়! আমাদের বিশেষ চমক ফেব্রিক্স দিয়ে তৈরি এই মিল্ক হোয়াইট পাঞ্জাবি।',
}

export default function MilkWhitePage() {
  return (
    <div className="min-h-screen bg-[#FCFBF8]">
      {/* Hero Section */}
      <TemplateHero 
        badgeText="Premium"
        topHeading="আভিজাত্য আর আরামের এক অনন্য সমন্বয়!"
        mainTitle="প্রিমিয়াম মিল্ক হোয়াইট"
        italicTitle="‘চমক ফেব্রিক্স’ পাঞ্জাবি"
        description="আমাদের বিশেষ 'চমক ফেব্রিক্স' দিয়ে তৈরি এই মিল্ক হোয়াইট পাঞ্জাবিটি আপনাকে দেবে সিল্কের মতো উজ্জ্বলতা এবং সুতির মতো আরাম। যেকোনো উৎসব বা ঘরোয়া অনুষ্ঠানে নিজের ব্যক্তিত্ব ফুটিয়ে তুলতে এটি সেরা পছন্দ।"
        price={1199}
        regularPrice={1999}
        image="https://abhijaatyo.com/wp-content/uploads/2026/03/Milk-2-scaled-1.jpg"
      />

      {/* Features Section (কেন আপনার সংগ্রহে থাকা উচিত?) */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-2">কোয়ালিটি ও ডিজাইন</h2>
          <h3 className="text-3xl lg:text-4xl font-black text-[#2C2A29]">কেন এই পাঞ্জাবিটি আপনার সংগ্রহে থাকা উচিত?</h3>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <img src="https://abhijaatyo.com/wp-content/uploads/2026/03/Milk-4-scaled-1.jpg" alt="Milk White Panjabi Details" className="w-full h-auto border border-[#E5DFD3] shadow-lg" />
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#800020] text-white flex items-center justify-center font-bold text-xl rounded-full shadow-md">১</div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2A29] mb-1">উন্নত ফেব্রিক্স</h4>
                <p className="text-[#5A5753] leading-relaxed">উন্নত মানের 'চমক ফেব্রিক্স' (সিল্কি ফিনিশ ও কটন ফিল), যা আপনাকে গরমে দেবে প্রশান্তি আর লুক দিবে রাজকীয়।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#800020] text-white flex items-center justify-center font-bold text-xl rounded-full shadow-md">২</div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2A29] mb-1">স্মার্ট কালার ও ফিনিশিং</h4>
                <p className="text-[#5A5753] leading-relaxed">স্নিগ্ধ মিল্ক হোয়াইট / ক্রিম কালারের সাথে স্লিম ফিট এবং চমৎকার ফিনিশিং।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#800020] text-white flex items-center justify-center font-bold text-xl rounded-full shadow-md">৩</div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2A29] mb-1">সর্বোচ্চ আরামদায়ক</h4>
                <p className="text-[#5A5753] leading-relaxed">দীর্ঘক্ষণ পরে থাকার জন্য অত্যন্ত আরামদায়ক ও হালকা।</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-12 h-12 shrink-0 bg-[#800020] text-white flex items-center justify-center font-bold text-xl rounded-full shadow-md">৪</div>
              <div>
                <h4 className="text-xl font-bold text-[#2C2A29] mb-1">সব অনুষ্ঠানে পারফেক্ট</h4>
                <p className="text-[#5A5753] leading-relaxed">ঈদ, জুম্মা, বিয়ে বা যেকোনো ফরমাল ও ক্যাজুয়াল প্রোগ্রামের জন্য উপযুক্ত।</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-white py-16 border-t border-[#E5DFD3]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-[#B8905B] font-bold tracking-[0.2em] uppercase text-sm mb-2">গ্যালারি</h2>
            <h3 className="text-3xl lg:text-4xl font-black text-[#2C2A29]">কাছ থেকে দেখুন</h3>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="overflow-hidden border border-[#E5DFD3]">
              <img src="https://abhijaatyo.com/wp-content/uploads/2026/03/6-scaled-1.jpg" alt="Gallery 1" className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden border border-[#E5DFD3]">
              <img src="https://abhijaatyo.com/wp-content/uploads/2026/03/2-scaled-1.jpg" alt="Gallery 2" className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden border border-[#E5DFD3]">
              <img src="https://abhijaatyo.com/wp-content/uploads/2026/03/3-scaled-1.jpg" alt="Gallery 3" className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
            <div className="overflow-hidden border border-[#E5DFD3]">
              <img src="https://abhijaatyo.com/wp-content/uploads/2026/03/4-scaled-1.jpg" alt="Gallery 4" className="w-full h-80 object-cover hover:scale-110 transition-transform duration-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={78}
          productPrice={1199}
          deliveryCharge={120}
          title="প্রিমিয়াম মিল্ক হোয়াইট ‘চমক ফেব্রিক্স’ পাঞ্জাবি"
          subtitle="মার্জিত লুক ও আরামদায়ক"
          image="https://abhijaatyo.com/wp-content/uploads/2026/03/Milk-2-scaled-1.jpg"
        />
      </div>
    </div>
  );
}