import TemplateHero from "../../components/TemplateHero";
import TemplateFeatures from "../../components/TemplateFeatures";
import TemplateCheckoutForm from "../../components/TemplateCheckoutForm";

export const metadata = {
  title: 'Exclusive মেরুন ডিজিটাল প্রিন্ট পাঞ্জাবি | Abhijaatyo',
  description: 'গাম্ভীর্য আর শৈল্পিকতার এক অপূর্ব মেলবন্ধন— জাফরান প্রিন্ট ফেব্রিক্স। যারা মেরুন রঙের আভিজাত্যে নিজেকে ভিন্নভাবে উপস্থাপন করতে চান, এটি তাদের জন্য।',
}

export default function MaroonJafranPage() {
  
  // প্রোডাক্টের ৫টি এক্সক্লুসিভ বৈশিষ্ট্য
  const productFeatures = [
    { title: "গর্জিয়াস মেরুন কালার", desc: "উৎসবের রঙ মেরুন, যা আপনাকে ভিড়ের মাঝেও এক আলাদা গর্জিয়াস লুক এনে দেবে।" },
    { title: "জাফরান প্রিন্ট ফেব্রিক্স", desc: "উন্নত মানের জাফরান প্রিন্ট ফেব্রিক্স, যা সারাদিন পরার পরও সতেজ থাকে এবং আরাম দেয়।" },
    { title: "শৈল্পিক ডিজিটাল প্রিন্ট", desc: "কাপড়ের প্রতিটি ভাঁজে রয়েছে ডিজিটাল প্রিন্টের সূক্ষ্ম কারুকাজ, যা আপনাকে দেবে আধুনিকতার ছোঁয়া।" },
    { title: "স্মার্ট ও আধুনিক লুক", desc: "নিখুঁত ফিটিং এবং চমৎকার ফিনিশিং, যা সব বয়সের এবং শারীরিক গঠনের সাথে মানানসই।" },
    { title: "পারফেক্ট কালেকশন", desc: "বিয়ে, হলুদ বা ঈদের মতো যেকোনো বড় উৎসবে নিজেকে উৎসবের মধ্যমণি করে তুলতে এটি সেরা পছন্দ।" },
  ];

  // গ্যালারির জন্য ৫টি হাই-কোয়ালিটি ছবি (আগের ফাইলের মেরুন ছবিগুলো এখানে যুক্ত করা হলো)
  const galleryImages = [
    "https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P1.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P3.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P4.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P6.webp",
    "https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P7.webp"
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      {/* ১. ডাইনামিক হিরো */}
      <TemplateHero 
        badgeText="Festive"
        topHeading="গাম্ভীর্য আর শৈল্পিকতার এক অপূর্ব মেলবন্ধন"
        mainTitle="Exclusive মেরুন"
        italicTitle="‘জাফরান প্রিন্ট’ প্রিমিয়াম পাঞ্জাবি"
        description="যারা মেরুন রঙের আভিজাত্যে নিজেকে ভিন্নভাবে উপস্থাপন করতে চান, তাদের জন্য এই ডিজিটাল প্রিন্টেড পাঞ্জাবিটি হবে একটি পারফেক্ট কালেকশন। আরামদায়ক ফেব্রিক্স আর গর্জিয়াস কালারের এই কম্বিনেশন আপনাকে যেকোনো উৎসবের মধ্যমণি করে তুলবে।"
        price={1299}
        regularPrice={2200}
        image="https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P2.webp"
      />
      
      {/* ২. ডাইনামিক ফিচারস ও গ্যালারি */}
      <TemplateFeatures 
        sectionSubTitle="কোয়ালিটি ও ডিজাইন"
        mainHeading="কেন এই পাঞ্জাবিটি আপনার"
        italicHeading="সংগ্রহে থাকা উচিত?"
        features={productFeatures}
        images={galleryImages}
        quoteText="&quot;উৎসবের রঙে <br/> ফুটে উঠুক আপনার আভিজাত্য&quot;" // মেরুন কালারের সাথে মিলিয়ে কোটেশন!
      />
      
      {/* ৩. ডাইনামিক চেকআউট ফর্ম */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={22} 
          productPrice={1299}
          deliveryCharge={120}
          title="Exclusive মেরুন"
          subtitle="জাফরান প্রিন্ট ডিজিটাল পাঞ্জাবি"
          image="https://abhijaatyo.com/wp-content/uploads/2026/03/Maroon-P2.webp"
        />
      </div>

      {/* ফুটার */}
      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase mt-10">
        © 2026 Abhijaatyo. Elegance Redefined.
      </footer>
    </main>
  );
}