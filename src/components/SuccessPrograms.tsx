const programs = [
  {
    label: "IPMAT Crash Course 2026",
    desc: "For Aspirants Looking for Intensive Prep for IPMAT 2026.",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/02/6643591150_ipmat-crash-course-2026.jpg",
  },
  {
    label: "IPMAT 2027 Course Offline",
    desc: "For Students Entering Class 12th This Year.",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/02/1480453147_ipmat-2027-course-offline.jpg",
  },
  {
    label: "IPMAT 2027 Finisher Batch",
    desc: "For Students Taking Drop Year After Class 12th.",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/02/1331322146_ipmat-2027-finisher-batch.jpg",
  },
  {
    label: "IPMAT Foundation Course",
    desc: "For Students Entering Class 11th This Year.",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/02/2998055145_ipmat-foundation-course.jpg",
  },
];

const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const SuccessPrograms = () => (
  <section className="bg-white py-16 px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-center text-[28px] font-bold text-foreground">
        Our IPMAT Success Programs in Delhi NCR
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {programs.map((p) => (
          <div key={p.label} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-md">
            <div className="w-full">
              <img
                src={p.img}
                alt={p.label}
                className="aspect-[701/423] w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-5 text-center">
              <p className="mb-4 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
              <button
                onClick={scrollToForm}
                className="h-10 rounded-md bg-cta-red px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
              >
                Book Free Demo Class
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessPrograms;
