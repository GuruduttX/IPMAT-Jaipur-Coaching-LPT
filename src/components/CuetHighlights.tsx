const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const stats = [
  { value: "250+", label: "Universities Accept CUET" },
  { value: "NTA", label: "Conducted By" },
  { value: "13+", label: "Languages Available" },
  { value: "60+", label: "Domain Subjects" },
  { value: "1", label: "Exam, Unlimited Possibilities" },
];

const CuetHighlights = () => (
  <section className="py-12 px-4 md:px-6">
    <div
      className="mx-auto max-w-[1158px] rounded-3xl px-6 py-12 md:py-14 md:px-10"
      style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)" }}
    >
      <h2 className="mb-3 text-center text-[24px] md:text-[28px] font-bold text-white">
        Why India's Top Students Are Choosing CUET
      </h2>
      <p className="mb-10 text-center text-sm md:text-base text-white/70">
        CUET — The single gateway to India's most prestigious universities
      </p>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl bg-white/10 backdrop-blur-sm px-4 py-6 text-center transition-all duration-300 hover:bg-white/15 hover:-translate-y-1"
          >
            <p className="text-[32px] md:text-[36px] font-extrabold text-yellow-400 leading-none">{s.value}</p>
            <p className="mt-2 text-xs md:text-sm font-medium text-white/80 leading-snug">{s.label}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-10 text-center">
        <button
          onClick={scrollToForm}
          className="rounded-full bg-yellow-400 px-10 py-4 text-[15px] font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.97] shadow-lg shadow-yellow-400/25"
        >
          Start Your CUET Journey → Register Free
        </button>
      </div>
    </div>
  </section>
);

export default CuetHighlights;
