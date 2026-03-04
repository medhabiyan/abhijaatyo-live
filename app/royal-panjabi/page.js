import TemplateHero from "../../components/TemplateHero";
import TemplateFeatures from "../../components/TemplateFeatures";
import TemplateCheckoutForm from "../../components/TemplateCheckoutForm";

export default function SingleProductPage() {
  
  const productFeatures = [
    { title: "উন্নত ফেব্রিক্স", desc: "উন্নত মানের 'জাফরান প্রিন্ট ফেব্রিক্স'। যা দীর্ঘক্ষণ পরে থাকলেও দেবে আরামদায়ক অনুভূতি।" },
    { title: "ডিজিটাল কারুকাজ", desc: "কাপড়ের প্রতিটি ভাঁজে থাকা জাফরান মোটিফ এবং সূক্ষ্ম কারুকাজ।" },
    { title: "আভিজাত্যময় কালার", desc: "ডিপ চারকোল কালার, যা আপনার ব্যক্তিত্বকে করবে আরও আকর্ষণীয়।" },
    { title: "পারফেক্ট লুক", desc: "মডার্ন ও ট্র্যাডিশনাল লুকের এক দারুণ সংমিশ্রণ। ঈদ বা পার্টির জন্য সেরা।" },
  ];

  const galleryImages = [
    "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P4.webp",
    "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P3.webp",
    "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P1.webp",
    "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P7.webp",
    "https://fast.medhabiyan.com/wp-content/uploads/2026/02/Maroon-P6.webp"
  ];

  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      
      <TemplateHero 
        badgeText="Premium"
        topHeading="আভিজাত্যের নতুন সংজ্ঞা"
        mainTitle="ডিপ চারকোল"
        italicTitle="‘জাফরান প্রিন্ট’ ডিজিটাল পাঞ্জাবি"
        description="গর্জিয়াস কালার এবং আরামদায়ক ফেব্রিক্সের এই অনন্য কম্বিনেশন আপনার মার্জিত রুচিকে ফুটিয়ে তুলবে।"
        price={1299}
        regularPrice={2200}
        image="https://fast.medhabiyan.com/wp-content/uploads/2026/02/image-3.jpg"
      />
      
      <TemplateFeatures 
        sectionSubTitle="কোয়ালিটি ও ডিজাইন"
        mainHeading="কেন এই পাঞ্জাবিটি আপনার"
        italicHeading="সংগ্রহে থাকা উচিত?"
        features={productFeatures}
        images={galleryImages}
        quoteText="&quot;প্রতিটি সুতোয় <br/> আভিজাত্যের ছোঁয়া&quot;"
      />
      
      {/* ৩. ডায়নামিক চেকআউট ফর্ম */}
      <div id="checkout-section">
        <TemplateCheckoutForm 
          productId={46} // আপনার আসল প্রোডাক্ট আইডি দিন
          productPrice={1299}
          deliveryCharge={120}
          title="ডিপ চারকোল"
          subtitle="জাফরান পাঞ্জাবি"
          image="https://fast.medhabiyan.com/wp-content/uploads/2026/02/image-3.jpg"
        />
      </div>

      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase mt-10">
        © 2026 Abhijaatya. Elegance Redefined.
      </footer>
    </main>
  );
}