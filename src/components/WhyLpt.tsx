const features = [
  { title: "Highest IIM Calls from Delhi NCR Last Year", desc: "Our Delhi NCR students secured maximum IIM interview calls, reflecting strong preparation and consistent outcomes." },
  { title: "Built on 24+ Years of Excellence", desc: "Two decades of consistent results, refined pedagogy, and deep understanding of competitive exam preparation." },
  { title: "India's Most Experienced IPMAT Faculty", desc: "Learn from highly experienced teachers and IIM alumni who understand aptitude exams inside out." },
  { title: "1:1 Personal Mentorship for Every Student", desc: "Individual mentoring ensures focused guidance, clarity in direction, and personalised preparation strategies." },
  { title: "AI-Powered Learning Management System", desc: "Smart LMS adapts to student performance and ensures data-driven, outcome-focused learning at every stage." },
  { title: "Advanced Performance Tracking & Analysis", desc: "Every test, topic, and mistake is analysed to continuously improve accuracy, speed, and confidence." },
];

const WhyLpt = () => (
  <section className="bg-white py-16 px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-[28px] font-bold text-foreground text-center">
        Why Join LPT for Your IPMAT Preparation?
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
    </div>
  </section>
);

export default WhyLpt;
