import TemplateHero from "../../components/TemplateHero";
import TemplateFeatures from "../../components/TemplateFeatures";
import TemplateCheckoutForm from "../../components/TemplateCheckoutForm";

export const metadata = {
  title: 'প্রিমিয়াম ডিপ চারকোল ডিজিটাল পাঞ্জাবি | Abhijaatyo',
  description: 'গাম্ভীর্য আর শৈল্পিকতার এক অপূর্ব মেলবন্ধন— জাফরান প্রিন্ট ফেব্রিক্স। যারা ডিপ চারকোল রঙের আভিজাত্যে নিজেকে একটু ভিন্নভাবে উপস্থাপন করতে চান, এটি তাদের জন্য।',
}

export default function DeepCharcoalPage() {
  
  // প্রোডাক্টের ৫টি এক্সক্লুসিভ বৈশিষ্ট্য
  const productFeatures = [
    { title: "গাম্ভীর্যপূর্ণ কালার", desc: "আকর্ষণীয় ডিপ চারকোল (Deep Charcoal) রং, যা আপনার লুকে এনে দিবে এক আলাদা গাম্ভীর্য ও আভিজাত্য।" },
    { title: "জাফরান প্রিন্ট ফেব্রিক্স", desc: "উন্নত মানের জাফরান প্রিন্ট ফেব্রিক্স, যা পরতে অত্যন্ত আরামদায়ক এবং দীর্ঘক্ষণ সতেজ থাকে।" },
    { title: "শৈল্পিক ডিজিটাল প্রিন্ট", desc: "আধুনিক ডিজিটাল প্রিন্ট এবং সূক্ষ্ম কারুকাজ, যা ঐতিহ্যের সাথে আধুনিকতার এক অপূর্ব মেলবন্ধন তৈরি করেছে।" },
    { title: "স্মার্ট ও আধুনিক লুক", desc: "নিখুঁত ফিটিং এবং চমৎকার ফিনিশিং, যা যেকোনো শারীরিক গঠনে আপনাকে স্মার্ট লুক দিবে।" },
    { title: "মাস্ট-হ্যাভ কালেকশন", desc: "ক্যাজুয়াল আড্ডা থেকে শুরু করে যেকোনো উৎসবের আয়োজনে নিজেকে ভিন্নভাবে উপস্থাপন করতে এটি একটি মাস্ট-হ্যাভ পাঞ্জাবি।" },
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      {/* ১. ডাইনামিক হিরো */}
      <TemplateHero 
        badgeText="Digital Print"
        topHeading="গাম্ভীর্য আর শৈল্পিকতার এক অপূর্ব মেলবন্ধন"
        mainTitle="প্রিমিয়াম ডিপ চারকোল"
        italicTitle="‘জাফরান প্রিন্ট’ ডিজিটাল পাঞ্জাবি"
        description="যারা ডিপ চারকোল রঙের আভিজাত্যে নিজেকে একটু ভিন্নভাবে উপস্থাপন করতে চান, তাদের জন্য এই ডিজিটাল প্রিন্টেড পাঞ্জাবিটি হবে একটি মাস্ট-হ্যাভ কালেকশন। এর সূক্ষ্ম কারুকাজ আপনাকে দিবে এক আধুনিক অথচ ঐতিহ্যবাহী লুক।"
        price={1299}
        regularPrice={2200}
        image="https://abhijaatyo.com/wp-content/uploads/2026/03/image-3.jpg"
      />
      
      {/* ২. ডাইনামিক ফিচারস (গ্যালারি ছাড়া) */}
      <TemplateFeatures 
        sectionSubTitle="কোয়ালিটি ও ডিজাইন"
        mainHeading="কেন এই পাঞ্জাবিটি আপনার"
        italicHeading="সংগ্রহে থাকা উচিত?"
        features={productFeatures}
        images={[]} // এখানে ফাঁকা অ্যারে দিয়ে গ্যালারি হাইড করা হয়েছে
        quoteText="&quot;গাম্ভীর্য আর শৈল্পিকতায় <br/> ফুটে উঠুক আপনার ব্যক্তিত্ব&quot;" 
      />
      
      {/* ৩. ডাইনামিক চেকআউট ফর্ম */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={23} 
          productPrice={1299}
          deliveryCharge={120}
          title="প্রিমিয়াম ডিপ চারকোল"
          subtitle="জাফরান প্রিন্ট ডিজিটাল পাঞ্জাবি"
          image="https://abhijaatyo.com/wp-content/uploads/2026/03/image-3.jpg"
        />
      </div>

      {/* ফুটার */}
      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase mt-10">
        © 2026 Abhijaatyo. Elegance Redefined.
      </footer>
    </main>
  );
}