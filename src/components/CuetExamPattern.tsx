const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const sections = [
  {
    name: "Section IA — Languages",
    details: "13 languages offered",
    questions: "50 Questions (40 to attempt)",
    marks: "200 Marks",
    duration: "45 Minutes",
    color: "#6366f1",
  },
  {
    name: "Section IB — Languages",
    details: "20 languages offered",
    questions: "50 Questions (40 to attempt)",
    marks: "200 Marks",
    duration: "45 Minutes",
    color: "#8b5cf6",
  },
  {
    name: "Section II — Domain Subjects",
    details: "27 domain subjects",
    questions: "50 Questions (40 to attempt) per subject",
    marks: "200 Marks each",
    duration: "45 Minutes each",
    color: "#a855f7",
  },
  {
    name: "Section III — General Test",
    details: "General Knowledge, Reasoning, Numerical Ability, Current Affairs",
    questions: "75 Questions (60 to attempt)",
    marks: "300 Marks",
    duration: "60 Minutes",
    color: "#c026d3",
  },
];

const CuetExamPattern = () => (
  <section className="py-16 px-4 md:px-6 bg-[#fafafa]">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-2 text-center text-[28px] font-bold text-foreground">
        CUET Exam Pattern 2026
      </h2>
      <p className="mb-10 text-center text-sm text-muted-foreground">
        Understanding the exam structure is the first step to cracking it
      </p>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((s) => (
          <div
            key={s.name}
            className="relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg border border-border"
          >
            {/* Color stripe */}
            <div className="absolute left-0 top-0 h-full w-1.5 rounded-l-2xl" style={{ background: s.color }} />

            <div className="pl-4">
              <h3 className="text-lg font-bold text-foreground">{s.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{s.details}</p>
              <div className="mt-4 flex flex-wrap gap-3">
                <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                  {s.questions}
                </span>
                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                  {s.marks}
                </span>
                <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-semibold text-amber-700">
                  {s.duration}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <p className="mb-4 text-sm text-muted-foreground">
          Not sure which subjects to choose? Our experts will guide you.
        </p>
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-cta-red px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
        >
          Get Free Subject Guidance →
        </button>
      </div>
    </div>
  </section>
);

export default CuetExamPattern;
