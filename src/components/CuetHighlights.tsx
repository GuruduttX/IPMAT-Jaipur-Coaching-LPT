const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const stats = [
  { value: "250+", label: "Universities Accept CUET" },
  { value: "NTA", label: "Conducted By" },
  { value: "13+", label: "Languages Available" },
  { value: "60+", label: "Domain Subjects" },
  { value: "1", label: "Exam, Unlimited Possibilities" },
];

const CuetHighlights = () => (
  <section className="py-10 px-4 md:px-6">
    <div
      className="mx-auto max-w-[1158px] rounded-2xl px-6 py-10 md:py-12"
      style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)" }}
    >
      <h2 className="mb-2 text-center text-[22px] md:text-[26px] font-bold text-white">
        Why India's Top Students Are Choosing CUET
      </h2>
      <p className="mb-8 text-center text-sm text-white/70">
        CUET — The single gateway to India's most prestigious universities
      </p>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-white/10 backdrop-blur-sm px-4 py-5 text-center transition-all duration-300 hover:bg-white/20 hover:-translate-y-1"
          >
            <p className="text-[28px] md:text-[32px] font-extrabold text-yellow-300">{s.value}</p>
            <p className="mt-1 text-xs md:text-sm font-medium text-white/80">{s.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-yellow-400 px-8 py-3.5 text-sm font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.97] shadow-lg shadow-yellow-400/30"
        >
          Start Your CUET Journey → Register Free
        </button>
      </div>
    </div>
  </section>
);

export default CuetHighlights;
