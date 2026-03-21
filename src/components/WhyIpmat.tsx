const cards = [
  { title: "Direct Entry into IIM After 12th", text: "IPMAT gives you a rare opportunity to enter prestigious IIMs right after Class 12. Instead of waiting till post-graduation, you start your management journey early and grow within the IIM ecosystem from day one." },
  { title: "Save 2–3 Critical Career Years", text: "Traditional routes include graduation + CAT + MBA. IPMAT compresses this journey into a single integrated program, saving years of uncertainty, repeated entrances, and career delays." },
  { title: "Integrated BBA + MBA Curriculum", text: "IPMAT programs blend undergraduate fundamentals with postgraduate-level management thinking. Students develop business acumen, leadership skills, and analytical ability much earlier than conventional college students." },
  { title: "Limited Seats, Massive ROI", text: "With very limited seats at top IIMs, IPMAT selections carry immense brand value. Graduates benefit from elite peer groups, strong alumni networks, and long-term career advantages that far outweigh the preparation effort." },
];

const WhyIpmat = () => (
  <section className="py-16 px-4 md:px-6" style={{ background: "linear-gradient(135deg, #f5f3ff 0%, #ede9fe 100%)" }}>
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-center text-[28px] font-bold text-foreground">
        Why IPMAT is a Smarter Career Path After 12th?
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
    </div>
  </section>
);

export default WhyIpmat;
