import TemplateHero from "../../components/TemplateHero";
import TemplateFeatures from "../../components/TemplateFeatures";
import TemplateCheckoutForm from "../../components/TemplateCheckoutForm";

export const metadata = {
  title: 'এক্সক্লুসিভ রোজ কালার কাতান পাঞ্জাবি | Abhijaatyo',
  description: 'আভিজাত্য আর ঐতিহ্যের এক অপূর্ব মিলন— কাতান ফেব্রিক্স। যারা নিজেকে রাজকীয় লুকে ফুটিয়ে তুলতে চান, তাদের জন্য এই রোজ কালার কাতান পাঞ্জাবিটি সেরা পছন্দ।',
}

export default function RoseKatanPage() {
  
  // প্রোডাক্টের ৫টি এক্সক্লুসিভ বৈশিষ্ট্য
  const productFeatures = [
    { title: "প্রিমিয়াম কাতান", desc: "উন্নত কাতান (Katan Fabrics) যা ঐতিহ্যের সাথে আধুনিকতার ছোঁয়া দেয়।" },
    { title: "আকর্ষণীয় রোজ কালার", desc: "চোখ ধাঁধানো রোজ কালার (Rose Color), যা আপনাকে যেকোনো ভিড়ে আলাদা করে চেনাবে।" },
    { title: "রাজকীয় উজ্জ্বলতা", desc: "কাপড়ের নিজস্ব একটি শাইন বা রাজকীয় উজ্জ্বলতা রয়েছে, যা রাতের বা দিনের আলোতে আপনাকে দারুণ উজ্জ্বল দেখাবে।" },
    { title: "ক্ল্যাসিক বুনন", desc: "নিখুঁত কাতান বুনন ও প্রিমিয়াম মানের ফিনিশিং, যা পরতে অত্যন্ত আরামদায়ক।" },
    { title: "পারফেক্ট কালেকশন", desc: "বিয়ে, গায়ে হলুদ, ঈদ বা যেকোনো বড় সামাজিক অনুষ্ঠানের জন্য এটি সেরা পছন্দ।" },
  ];

  // গ্যালারির জন্য ৫টি হাই-কোয়ালিটি ছবি
  const galleryImages = [
    "https://abhijaatyo.com/wp-content/uploads/2026/03/7-2-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/1-3-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/5-3-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/2-3-scaled-1.jpg",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/4-3-scaled-1.jpg"
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      {/* ১. ডাইনামিক হিরো */}
      <TemplateHero 
        badgeText="Exclusive"
        topHeading="আভিজাত্য আর ঐতিহ্যের এক অপূর্ব মিলন"
        mainTitle="এক্সক্লুসিভ রোজ কালার"
        italicTitle="‘কাতান ফেব্রিক্স’ প্রিমিয়াম পাঞ্জাবি"
        description="যারা সাধারণের মাঝেও নিজেকে রাজকীয় লুকে ফুটিয়ে তুলতে চান, তাদের জন্য এই রোজ কালার কাতান পাঞ্জাবিটি হবে সেরা পছন্দ। এর চিরন্তন উজ্জ্বলতা এবং ঘন বুনন আপনার ব্যক্তিত্বে যোগ করবে এক প্রিমিয়াম আভিজাত্য।"
        price={1599}
        regularPrice={2500}
        image="https://abhijaatyo.com/wp-content/uploads/2026/03/6-3-scaled-1.jpg"
      />
      
      {/* ২. ডাইনামিক ফিচারস ও গ্যালারি */}
      <TemplateFeatures 
        sectionSubTitle="কোয়ালিটি ও ডিজাইন"
        mainHeading="কেন এই পাঞ্জাবিটি আপনার"
        italicHeading="সংগ্রহে থাকা উচিত?"
        features={productFeatures}
        images={galleryImages}
        quoteText="&quot;রাজকীয় আভিজাত্যে <br/> রঙিন হোক আপনার মুহূর্ত&quot;" // কাতান এবং রোজ কালারের সাথে মিল রেখে!
      />
      
      {/* ৩. ডাইনামিক চেকআউট ফর্ম */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={21} 
          productPrice={1599}
          deliveryCharge={120}
          title="এক্সক্লুসিভ রোজ কালার"
          subtitle="প্রিমিয়াম কাতান পাঞ্জাবি"
          image="https://abhijaatyo.com/wp-content/uploads/2026/03/6-3-scaled-1.jpg"
        />
      </div>

      {/* ফুটার */}
      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase mt-10">
        © 2026 Abhijaatyo. Elegance Redefined.
      </footer>
    </main>
  );
}