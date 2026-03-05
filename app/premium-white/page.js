import TemplateHero from "../../components/TemplateHero";
import TemplateFeatures from "../../components/TemplateFeatures";
import TemplateCheckoutForm from "../../components/TemplateCheckoutForm";

export default function PremiumWhitePage() {
  
  // আপনার দেওয়া ৫টি বৈশিষ্ট্য একটু সুন্দর করে টাইটেল দিয়ে সাজিয়ে দিলাম
  const productFeatures = [
    { title: "উন্নত ফেব্রিক্স", desc: "উন্নত মানের 'জাফরান ফেব্রিক্স' (প্রিমিয়াম টেক্সচার্ড ফিনিশ)।" },
    { title: "ধবধবে সাদা কালার", desc: "পিওর হোয়াইট (Pure White), যা মার্জিত রুচি আর আভিজাত্যের প্রতীক।" },
    { title: "দীর্ঘক্ষণ সতেজ", desc: "উৎসবের দিনে দীর্ঘক্ষণ পরে থাকলেও এটি সহজে কুঁচকায় না, ফলে আপনি থাকবেন সবসময় সতেজ।" },
    { title: "স্মার্ট ও আধুনিক লুক", desc: "ইউনিক টেক্সচার ডিজাইন যা সাধারণ পাঞ্জাবির চেয়ে অনেক বেশি আধুনিক ও স্মার্ট।" },
    { title: "পারফেক্ট ব্যবহার", desc: "ঈদ, জুম্মা বা যেকোনো সামাজিক অনুষ্ঠানে পরার জন্য একদম পারফেক্ট।" },
  ];

  // টেমপ্লেটের সুন্দর লেআউট (৩x২ গ্রিড) ঠিক রাখার জন্য ৫টি ছবি ব্যবহার করা হলো
  const galleryImages = [
    "https://abhijaatyo.com/wp-content/uploads/2026/03/9.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/6.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/5.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/4.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/2.webp"
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      {/* ১. ডাইনামিক হিরো */}
      <TemplateHero 
        badgeText="Premium"
        topHeading="আভিজাত্যের নতুন সংজ্ঞা"
        mainTitle="প্রিমিয়াম White"
        italicTitle="‘জাফরান ফেব্রিক্স’ টেক্সচার্ড পাঞ্জাবি"
        description="মার্জিত রুচি আর আভিজাত্যের সমন্বয় নিয়ে এল আমাদের হোয়াইট জাফরান ফেব্রিক্স পাঞ্জাবি। সাধারণ সুতির চেয়েও বেশি উজ্জ্বল এবং প্রিমিয়াম টেক্সচারের কারণে এটি আপনাকে যেকোনো ভিড়ে আলাদা করে চিনিয়ে দেবে।"
        price={1299}
        regularPrice={1999}
        image="https://abhijaatyo.com/wp-content/uploads/2026/03/7.webp"
      />
      
      {/* ২. ডাইনামিক ফিচারস ও গ্যালারি */}
      <TemplateFeatures 
        sectionSubTitle="কোয়ালিটি ও ডিজাইন"
        mainHeading="কেন এই পাঞ্জাবিটি আপনার"
        italicHeading="সংগ্রহে থাকা উচিত?"
        features={productFeatures}
        images={galleryImages}
        quoteText="&quot;শুভ্রতায় মিশে থাকুক <br/> আপনার আভিজাত্য&quot;" // সাদা পাঞ্জাবির সাথে মিলিয়ে কোটেশন দিলাম!
      />
      
      {/* ৩. ডাইনামিক চেকআউট ফর্ম */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={79} 
          productPrice={1080}
          deliveryCharge={120}
          title="প্রিমিয়াম White"
          subtitle="জাফরান ফেব্রিক্স পাঞ্জাবি"
          image="https://abhijaatyo.com/wp-content/uploads/2026/03/7.webp"
        />
      </div>

      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase mt-10">
        © 2026 Abhijaatyo. Elegance Redefined.
      </footer>
    </main>
  );
}