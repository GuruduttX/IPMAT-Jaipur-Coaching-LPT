import { useState } from "react";

const faqs = [
  { q: "Where are your CUET coaching centres located?", a: "Our CUET classroom coaching is available across Delhi NCR — South Delhi (Hauz Khas), Gurugram (Sector 14), North Delhi (GTB Nagar), and Noida (Sector 62)." },
  { q: "What is CUET and which universities accept it?", a: "CUET (Common University Entrance Test) is a national-level entrance exam conducted by NTA for admission to undergraduate programmes at 250+ central, state, and deemed universities including Delhi University, JNU, BHU, Jamia Millia Islamia, and more." },
  { q: "Who is eligible to appear for CUET?", a: "Any student who has passed or is appearing in Class 12 from a recognised board is eligible to appear for CUET. There is no upper age limit for most universities." },
  { q: "What subjects can I choose in CUET?", a: "CUET offers a wide range of domain-specific subjects across sciences, humanities, commerce, and languages. You can choose subjects based on the university and programme you're applying to." },
  { q: "Is CUET difficult to crack?", a: "CUET is competitive due to the large number of applicants. However, with structured coaching, regular mock tests, and smart preparation, students can secure high percentiles and top university admissions." },
  { q: "Can a student apply to multiple universities through CUET?", a: "Yes. A single CUET score can be used to apply to multiple universities and programmes simultaneously, making it highly efficient." },
  { q: "Who will teach in the CUET classroom programs?", a: "Classes are led by highly experienced faculty with deep expertise in CUET exam patterns, NTA marking schemes, and subject-specific teaching strategies." },
  { q: "Does your CUET coaching include mock tests and analysis?", a: "Yes. Students receive regular sectional and full-length CUET mocks with detailed performance analysis, answer key discussions, and personalised feedback." },
  { q: "Can students manage school studies along with CUET preparation?", a: "Yes. Our batch structure is designed to balance school academics with consistent CUET preparation without overburdening the student." },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="bg-white py-16 px-4 md:px-6">
      <div className="mx-auto max-w-[900px]">
        <h2 className="mb-8 text-center text-[28px] font-bold text-foreground">
          Frequently Asked Questions (FAQs)
        </h2>
        <div className="space-y-2">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className="overflow-hidden rounded-xl border border-border">
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className={`flex w-full items-center justify-between px-5 py-4 text-left transition-colors duration-200 ${
                    isOpen ? "bg-primary/5" : "bg-white hover:bg-secondary/60"
                  }`}
                >
                  <span className="pr-4 text-[15px] font-semibold text-foreground">{faq.q}</span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                    fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="grid transition-all duration-300"
                  style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-4 pt-1 text-sm leading-[1.7] text-muted-foreground">{faq.a}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
