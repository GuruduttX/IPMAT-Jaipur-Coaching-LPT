import { lazy, Suspense } from "react";

// Critical above-the-fold components - load immediately
import Navbar from "@/components/Navbar";
import UrgencyBanner from "@/components/UrgencyBanner";
import HeroSection from "@/components/HeroSection";
import CuetHighlights from "@/components/CuetHighlights";

// Below-the-fold components - lazy load for better initial load
const SuccessPrograms = lazy(() => import("@/components/SuccessPrograms"));
const WhyCuet = lazy(() => import("@/components/WhyIpmat"));
const CtaBanner = lazy(() => import("@/components/CtaBanner"));
const CuetExamPattern = lazy(() => import("@/components/CuetExamPattern"));
const WhyLpt = lazy(() => import("@/components/WhyLpt"));
const TopUniversities = lazy(() => import("@/components/TopUniversities"));
const ResultsBanner = lazy(() => import("@/components/ResultsBanner"));
const EarlyWinners = lazy(() => import("@/components/EarlyWinners"));
const InlineFormCta = lazy(() => import("@/components/InlineFormCta"));
const ProgramChecklist = lazy(() => import("@/components/ProgramChecklist"));
const Testimonials = lazy(() => import("@/components/Testimonials"));
const Centers = lazy(() => import("@/components/Centers"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const FinalCta = lazy(() => import("@/components/FinalCta"));
const FloatingCta = lazy(() => import("@/components/FloatingCta"));

// Loading fallback component
const SectionLoader = () => (
  <div className="flex items-center justify-center py-16">
    <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
  </div>
);

const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const Index = () => (
  <div className="min-h-screen bg-background pb-16 md:pb-0">
    {/* Critical above-the-fold content - renders immediately */}
    <UrgencyBanner />
    <Navbar />
    <HeroSection />
    <CuetHighlights />
    
    {/* Below-the-fold content - lazy loaded */}
    <Suspense fallback={<SectionLoader />}>
      <SuccessPrograms />
      <WhyCuet />
      <CtaBanner
        yellowLabel="Have Questions About CUET or University Admissions?"
        heading="Talk to experts who understand CUET exam patterns, top university admissions, and preparation strategies inside out."
        buttons={[
          { label: "Request a Callback", style: "filled", onClick: scrollToForm },
          { label: "📞 9217577446", style: "outline", href: "tel:+919217577446" },
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
    </Suspense>
  </div>
);

export default Index;
