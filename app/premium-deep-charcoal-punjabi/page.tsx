import HeroSection from "../../components/HeroSection";
import FeaturesSection from "../../components/FeaturesSection";
import CheckoutSection from "../../components/CheckoutSection"; // নতুন ইমপোর্ট

export default function PremiumPunjabiPage() {
  return (
    <main className="bg-[#FAFAFA] min-h-screen font-sans text-gray-800">
      <HeroSection />
      <FeaturesSection />
      
      {/* ৩. ফাইনাল চেকআউট সেকশন */}
      <CheckoutSection />
      
      {/* ফুটারে ছোট করে কপিরাইট দিতে পারেন */}
      <footer className="py-10 text-center text-gray-400 text-sm">
        © 2026 Abhijaatya. All rights reserved.
      </footer>
    </main>
  );
}