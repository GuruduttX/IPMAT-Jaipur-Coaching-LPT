const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const universities = [
  { name: "Delhi University (DU)", location: "New Delhi", programs: "BA, B.Com, B.Sc & more" },
  { name: "Jawaharlal Nehru University (JNU)", location: "New Delhi", programs: "BA, M.Sc, MA & more" },
  { name: "Banaras Hindu University (BHU)", location: "Varanasi", programs: "BA, B.Com, B.Sc & more" },
  { name: "Jamia Millia Islamia", location: "New Delhi", programs: "BA, B.Com, B.Tech & more" },
  { name: "Aligarh Muslim University (AMU)", location: "Aligarh", programs: "BA, B.Com, B.Sc & more" },
  { name: "Allahabad University", location: "Prayagraj", programs: "BA, B.Com, B.Sc & more" },
  { name: "Visva-Bharati University", location: "West Bengal", programs: "BA, B.Com, BFA & more" },
  { name: "Tezpur University", location: "Assam", programs: "BA, B.Sc, BBA & more" },
];

const GradCapIcon = () => (
  <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zM12 14v7" />
  </svg>
);

const TopUniversities = () => (
  <section className="py-16 px-4 md:px-6 bg-white">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-2 text-center text-[28px] font-bold text-foreground">
        Top Universities Accepting CUET Score
      </h2>
      <p className="mb-10 text-center text-sm text-muted-foreground">
        One exam score — admission to India's most prestigious institutions
      </p>

      <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {universities.map((u) => (
          <div
            key={u.name}
            className="rounded-xl border border-border bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-primary/30"
          >
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
              <GradCapIcon />
            </div>
            <h3 className="text-[15px] font-bold text-foreground leading-snug">{u.name}</h3>
            <p className="mt-1 text-xs text-muted-foreground">{u.location}</p>
            <p className="mt-2 text-xs font-medium text-primary">{u.programs}</p>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-primary/5 to-purple-50 px-6 py-8 text-center border border-primary/10">
        <p className="text-lg font-bold text-foreground">
          🎓 And 240+ more universities across India!
        </p>
        <p className="mt-2 text-sm text-muted-foreground">
          Don't miss the deadline — secure your spot in the best CUET coaching program today.
        </p>
        <button
          onClick={scrollToForm}
          className="mt-5 rounded-lg bg-primary px-8 py-3.5 text-sm font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.97]"
        >
          Register Now — Limited Seats Available
        </button>
      </div>
    </div>
  </section>
);

export default TopUniversities;
