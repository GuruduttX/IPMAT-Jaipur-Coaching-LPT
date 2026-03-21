import { useState } from "react";

const faqs = [
  { q: "Where are your IPMAT coaching centres located?", a: "Our IPMAT classroom coaching is available across Delhi NCR — South Delhi (Hauz Khas), Gurugram (Sector 14), North Delhi (GTB Nagar), and Noida (Sector 62)." },
  { q: "Are non-math or commerce students eligible for IPMAT coaching?", a: "Yes. IPMAT focuses on aptitude and reasoning, making it suitable for commerce and non-math background students." },
  { q: "What is IPMAT and which IIMs accept it?", a: "IPMAT is an entrance exam for integrated management programs offered by IIM Indore, IIM Rohtak, IIM Jammu, IIM Bodh Gaya and more." },
  { q: "Can a student apply for IPMAT Indore, Rohtak, and JIPMAT together?", a: "Yes. Students can appear for IPMAT Indore, IPMAT Rohtak, and JIPMAT in the same academic year." },
  { q: "Is IPMAT tougher than JIPMAT?", a: "Yes. IPMAT Indore is considered the toughest, followed by Rohtak, while JIPMAT is relatively moderate." },
  { q: "What courses do students get through IPMAT and JIPMAT?", a: "Both exams offer admission to five-year Integrated Programme in Management (IPM) at respective IIMs." },
  { q: "Who will teach in the IPMAT classroom programs?", a: "Classes are led by highly experienced faculty from India, including mentors with IIM academic and teaching backgrounds." },
  { q: "Does your IPMAT coaching include mock tests and analysis?", a: "Yes. Students receive regular sectional and full-length IPMAT mocks with detailed performance analysis and feedback." },
  { q: "Can students manage school studies along with IPMAT preparation?", a: "Yes. Our batch structure is designed to balance school academics with consistent IPMAT preparation." },
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
