const items = [
  "You dream of studying at DU, JNU, BHU, or a top central university.",
  "You believe success isn't one-size-fits-all.",
  "You're ready to own a path most won't dare to take.",
  "You're wired for academics, critical thinking, and excellence.",
  "You're serious about turning big dreams into real outcomes.",
  "You're ready to prepare consistently and stay disciplined.",
  "You're aiming for a top rank in CUET, not just qualification.",
];

const CheckIcon = () => (
  <svg className="mt-0.5 h-5 w-5 shrink-0 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const ProgramChecklist = () => (
  <section className="bg-white py-16 px-4 md:px-6">
    <div className="mx-auto flex max-w-[1158px] flex-col gap-10 md:flex-row md:items-center">
      <div className="md:w-1/2">
        <h2 className="mb-6 text-[28px] font-bold text-foreground" style={{ textWrap: "balance" }}>
          Our CUET Coaching Program is for You, Only if:
        </h2>
        <ul className="space-y-0">
          {items.map((item) => (
            <li key={item} className="flex items-start gap-3 border-b border-secondary py-2.5 text-[15px] text-foreground">
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="md:w-1/2">
        <img
          src="https://live.lptedtech.com/wp-content/uploads/2025/03/nlu-aspirant-1.jpg"
          alt="Student Studying"
          className="aspect-square w-full rounded-2xl object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default ProgramChecklist;
