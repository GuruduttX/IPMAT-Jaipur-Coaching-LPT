import Navbar from "@/components/Navbar";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import SuccessPrograms from "@/components/SuccessPrograms";
import WhyIpmat from "@/components/WhyIpmat";
import CtaBanner from "@/components/CtaBanner";
import WhyLpt from "@/components/WhyLpt";
import ResultsBanner from "@/components/ResultsBanner";
import EarlyWinners from "@/components/EarlyWinners";
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
    <SuccessPrograms />
    <WhyIpmat />
    <CtaBanner
      yellowLabel="Have Questions About IPMAT or IIM Admissions?"
      heading="Talk to experts who understand IPMAT Indore, Rohtak, and JIPMAT inside out."
      buttons={[
        { label: "Request a Callback", style: "filled", onClick: scrollToForm },
        { label: "📞 8750581505", style: "outline", href: "tel:+918750581505" },
      ]}
    />
    <WhyLpt />
    <ResultsBanner />
    <EarlyWinners />
    <ProgramChecklist />
    <CtaBanner
      yellowLabel="Big Goals Need the Right Starting Point."
      heading="Take the first confident step toward the IIM ecosystem today."
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
