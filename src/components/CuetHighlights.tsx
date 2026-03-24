const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const stats = [
  { value: "250+", label: "Universities Accept CUET" },
  { value: "NTA", label: "Conducted By" },
  { value: "13+", label: "Languages Available" },
  { value: "60+", label: "Domain Subjects" },
  { value: "1", label: "Exam, Unlimited Possibilities" },
];

const CuetHighlights = () => (
  <section className="py-8 md:py-12 px-4 md:px-6">
    <div
      className="mx-auto max-w-[1158px] rounded-3xl px-5 py-8 md:py-10 md:px-10"
      style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)" }}
    >
      <h2 className="mb-2 text-center text-[20px] md:text-[26px] font-bold text-white">
        Why India's Top Students Are Choosing CUET
      </h2>
      <p className="mb-6 md:mb-8 text-center text-xs md:text-sm text-white/70">
        CUET — The single gateway to India's most prestigious universities
      </p>
      
      <div className="grid grid-cols-3 gap-2 sm:gap-3 lg:grid-cols-5">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl bg-white/10 backdrop-blur-sm px-2 py-3 md:px-4 md:py-4 text-center transition-all duration-300 hover:bg-white/15"
          >
            <p className="text-[22px] md:text-[28px] font-extrabold text-yellow-400 leading-none">{s.value}</p>
            <p className="mt-1 text-[10px] md:text-xs font-medium text-white/80 leading-tight">{s.label}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-6 md:mt-8 text-center">
        <button
          onClick={scrollToForm}
          className="rounded-full bg-yellow-400 px-6 md:px-10 py-3 md:py-3.5 text-[13px] md:text-[15px] font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.97] shadow-lg shadow-yellow-400/25"
        >
          Start Your CUET Journey → Register Free
        </button>
      </div>
    </div>
  </section>
);

export default CuetHighlights;
