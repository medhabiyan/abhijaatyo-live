import TemplateHero from "../../components/TemplateHero";
import TemplateFeatures from "../../components/TemplateFeatures";
import TemplateCheckoutForm from "../../components/TemplateCheckoutForm";

export const metadata = {
  title: 'প্রিমিয়াম Soft Sky Blue এমব্রয়ডারি পাঞ্জাবি | Abhijaatyo',
  description: 'আরাম আর আভিজাত্যের এক নিখুঁত সমন্বয়— চমক ফেব্রিক্স। এই সফট স্কাই ব্লু পাঞ্জাবিটি উৎসবের ভিড়ে আপনার ব্যক্তিত্বকে ফুটিয়ে তুলবে।',
}

export default function SoftSkyBluePage() {
  
  // প্রোডাক্টের ৫টি এক্সক্লুসিভ বৈশিষ্ট্য
  const productFeatures = [
    { title: "উন্নত ফেব্রিক্স", desc: "হাই-কোয়ালিটি ‘চমক ফেব্রিক্স’ যা আপনাকে দেবে সুতির আরাম ও সিল্কের উজ্জ্বলতা।" },
    { title: "স্নিগ্ধ কালার", desc: "মন মাতানো সফট স্কাই ব্লু (Soft Sky Blue) কালার, যা চোখের জন্য অত্যন্ত প্রশান্তিদায়ক।" },
    { title: "নান্দনিক এমব্রয়ডারি", desc: "বুকের প্যানেলে রয়েছে সূক্ষ্ম ও নান্দনিক এমব্রয়ডারি ডিজাইন, যা পাঞ্জাবিটিকে করে তুলেছে আরও এক্সক্লুসিভ।" },
    { title: "আকর্ষণীয় বাটন", desc: "প্রিমিয়াম মেটাল বাটন ব্যবহার করা হয়েছে, যা পাঞ্জাবির সৌন্দর্য বহুগুণ বাড়িয়ে দেয়।" },
    { title: "স্মার্ট ফিট", desc: "বডি শেপের সাথে মানানসই স্মার্ট ফিট, যা সব ধরনের শারীরিক গঠনে একদম পারফেক্ট।" },
  ];

  // গ্যালারির জন্য ৫টি হাই-কোয়ালিটি ছবি
  const galleryImages = [
    "https://abhijaatyo.com/wp-content/uploads/2026/03/3-1-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/5-1-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/2-1-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/6-1-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/4-1-scaled-1.jpg"
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      {/* ১. ডাইনামিক হিরো */}
      <TemplateHero 
        badgeText="Exclusive"
        topHeading="আরাম আর আভিজাত্যের এক নিখুঁত সমন্বয়"
        mainTitle="প্রিমিয়াম Soft Sky Blue"
        italicTitle="‘চমক ফেব্রিক্স’ এমব্রয়ডারি পাঞ্জাবি"
        description="যারা সাধারণ সুতির আরাম চান কিন্তু সিল্কের মতো উজ্জ্বল লুক পছন্দ করেন, তাদের জন্য এই সফট স্কাই ব্লু পাঞ্জাবিটি হবে সেরা কালেকশন। উৎসবের ভিড়ে আপনার ব্যক্তিত্বকে ফুটিয়ে তুলবে এই বিশেষ ফেব্রিক্সের আভিজাত্য।"
        price={1199}
        regularPrice={1999}
        image="https://abhijaatyo.com/wp-content/uploads/2026/03/Soft-Sky-Blue-5-scaled-1.jpg"
      />
      
      {/* ২. ডাইনামিক ফিচারস ও গ্যালারি */}
      <TemplateFeatures 
        sectionSubTitle="কোয়ালিটি ও ডিজাইন"
        mainHeading="কেন এই পাঞ্জাবিটি আপনার"
        italicHeading="সংগ্রহে থাকা উচিত?"
        features={productFeatures}
        images={galleryImages}
        quoteText="&quot;স্নিগ্ধতায় মিশে থাকুক <br/> আপনার আভিজাত্য&quot;" // স্কাই ব্লু কালারের সাথে মিল রেখে কোটেশন!
      />
      
      {/* ৩. ডাইনামিক চেকআউট ফর্ম */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={19} 
          productPrice={1199}
          deliveryCharge={120}
          title="প্রিমিয়াম Soft Sky Blue"
          subtitle="এমব্রয়ডারি ‘চমক ফেব্রিক্স’ পাঞ্জাবি"
          image="https://abhijaatyo.com/wp-content/uploads/2026/03/Soft-Sky-Blue-5-scaled-1.jpg"
        />
      </div>

      {/* ফুটার */}
      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase mt-10">
        © 2026 Abhijaatyo. Elegance Redefined.
      </footer>
    </main>
  );
}