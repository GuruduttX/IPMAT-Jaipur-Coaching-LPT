import Navbar from "@/components/Navbar";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import CuetHighlights from "@/components/CuetHighlights";
import SuccessPrograms from "@/components/SuccessPrograms";
import WhyCuet from "@/components/WhyIpmat";
import CtaBanner from "@/components/CtaBanner";
import CuetExamPattern from "@/components/CuetExamPattern";
import WhyLpt from "@/components/WhyLpt";
import TopUniversities from "@/components/TopUniversities";
import ResultsBanner from "@/components/ResultsBanner";
import EarlyWinners from "@/components/EarlyWinners";
import InlineFormCta from "@/components/InlineFormCta";
import ProgramChecklist from "@/components/ProgramChecklist";
import Testimonials from "@/components/Testimonials";
import Centers from "@/components/Centers";
import FaqSection from "@/components/FaqSection";
import FinalCta from "@/components/FinalCta";
import FloatingCta from "@/components/FloatingCta";

const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const Index = () => (
  <div className="min-h-screen bg-background pb-16 md:pb-0">
    <UrgencyBanner />
    <Navbar />
    <HeroSection />
    <CuetHighlights />
    <SuccessPrograms />
    <WhyCuet />
    <CtaBanner
      yellowLabel="Have Questions About CUET or University Admissions?"
      heading="Talk to experts who understand CUET exam patterns, top university admissions, and preparation strategies inside out."
      buttons={[
        { label: "Request a Callback", style: "filled", onClick: scrollToForm },
        { label: "📞 8750581505", style: "outline", href: "tel:+918750581505" },
      ]}
    />
    <CuetExamPattern />
    <WhyLpt />
    <TopUniversities />
    <ResultsBanner />
    <EarlyWinners />
    <InlineFormCta />
    <ProgramChecklist />
    <CtaBanner
      yellowLabel="Big Goals Need the Right Starting Point."
      heading="Take the first confident step toward your dream university today."
      buttons={[
        { label: "Book Free Counselling", style: "filled", onClick: scrollToForm },
      ]}
    />
    <Testimonials />
    <Centers />
    <FaqSection />
    <FinalCta />
    <FloatingCta />
  </div>
);

export default Index;
