const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const cards = [
  { title: "Direct Entry into Top Central Universities After 12th", text: "CUET gives you a single gateway to prestigious universities like Delhi University, JNU, BHU, Jamia Millia, and 250+ others. Instead of appearing for multiple separate entrance exams, one CUET score opens doors to the best institutions in India." },
  { title: "One Exam, 250+ University Options", text: "CUET is accepted by over 250 central, state, and deemed universities. A single well-prepared attempt can secure admission to top programmes across sciences, humanities, commerce, and professional courses." },
  { title: "Flexible Subject Choices", text: "Unlike rigid entrance exams, CUET allows you to choose subjects based on your strengths and interests. Whether you're from science, commerce, or arts, CUET lets you play to your strongest areas." },
  { title: "Massive ROI from Top University Degrees", text: "Graduating from a top central university like DU, BHU, or JNU carries immense brand value. Strong alumni networks, top recruiters, and nationally recognised degrees ensure long-term career advantages." },
];

const WhyCuet = () => (
  <section className="py-16 px-4 md:px-6" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" }}>
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-center text-[28px] font-bold text-foreground">
        Why CUET is a Smarter Career Path After 12th?
      </h2>
      <div className="grid gap-6 sm:grid-cols-2">
        {cards.map((c) => (
          <div
            key={c.title}
            className="relative overflow-hidden rounded-2xl bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Gradient decoration blob matching live site */}
            <div
              className="absolute -right-6 -top-6 h-[120px] w-[120px] rounded-full opacity-60"
              style={{ background: "linear-gradient(135deg, #c4b5fd 0%, #a78bfa 50%, #e9d5ff 100%)" }}
            />
            <div
              className="absolute right-12 -top-4 h-[80px] w-[80px] rounded-full opacity-40"
              style={{ background: "linear-gradient(135deg, #818cf8 0%, #c084fc 100%)" }}
            />
            <div className="relative z-10">
              <h3 className="text-lg font-bold text-foreground">{c.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">{c.text}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={scrollToForm}
          className="rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.97]"
        >
          Start Your CUET Preparation Today →
        </button>
      </div>
    </div>
  </section>
);

export default WhyCuet;
