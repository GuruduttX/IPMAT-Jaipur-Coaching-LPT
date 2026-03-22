const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const features = [
  { title: "Highest University Admission Calls from Delhi NCR Last Year", desc: "Our Delhi NCR students secured maximum admission calls from top central universities, reflecting strong preparation and consistent outcomes." },
  { title: "Built on 24+ Years of Excellence", desc: "Two decades of consistent results, refined pedagogy, and deep understanding of competitive exam preparation." },
  { title: "India's Most Experienced CUET Faculty", desc: "Learn from highly experienced teachers who understand the CUET exam pattern, marking scheme, and preparation strategies inside out." },
  { title: "1:1 Personal Mentorship for Every Student", desc: "Individual mentoring ensures focused guidance, clarity in direction, and personalised preparation strategies." },
  { title: "AI-Powered Learning Management System", desc: "Smart LMS adapts to student performance and ensures data-driven, outcome-focused learning at every stage." },
  { title: "Advanced Performance Tracking & Analysis", desc: "Every test, topic, and mistake is analysed to continuously improve accuracy, speed, and confidence." },
];

const WhyLpt = () => (
  <section className="bg-white py-16 px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-[28px] font-bold text-foreground text-center">
        Why Join LPT for Your CUET Preparation?
      </h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((f) => (
          <div
            key={f.title}
            className="rounded-xl border border-border bg-white p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-primary/5 hover:shadow-md"
          >
            <h3 className="text-base font-bold text-foreground">{f.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-cta-red px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
        >
          Book Free Demo Class →
        </button>
      </div>
    </div>
  </section>
);

export default WhyLpt;
