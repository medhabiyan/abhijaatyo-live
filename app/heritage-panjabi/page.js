import HeritageHero from "../../components/HeritageHero";
import HeritageFeatures from "../../components/HeritageFeatures";

export default function HeritageLandingPage() {
  return (
    <main className="bg-[#FCFBF8] min-h-screen font-sans text-[#2C2A29]">
      {/* ১. রয়্যাল হেরিটেজ হিরো সেকশন */}
      <HeritageHero />
      
      {/* ২. রয়্যাল গ্যালারি ও ফিচারস */}
      <HeritageFeatures />
      
      {/* ফুটার */}
      <footer className="bg-[#2C2A29] py-10 text-center text-[#A9A49E] text-sm tracking-widest uppercase">
        © 2026 Abhijaatya. Elegance Redefined.
      </footer>
    </main>
  );
}