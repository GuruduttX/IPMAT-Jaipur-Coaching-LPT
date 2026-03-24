const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const EarlyWinners = () => (
  <section className="bg-white py-16 px-4 md:px-6">
    <div className="mx-auto flex max-w-[1158px] flex-col gap-10 md:flex-row md:items-center">
      {/* Text */}
      <div className="md:w-1/2">
        <h2 className="text-[28px] font-bold leading-tight text-foreground" style={{ textWrap: "balance" }}>
          "Early decisions create early winners."
        </h2>
        <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">
          CUET rewards students who act early, plan smartly, and prepare with intent. Those who wait often watch opportunities slip away.
        </p>
        <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
          Start your journey with LPT's CUET Coaching in Delhi NCR and stay ahead of the curve from day one.
        </p>
        <p className="mt-3 text-[15px] font-medium text-foreground">👉 Take the first step toward your dream university today.</p>
        <button
          onClick={scrollToForm}
          className="mt-6 rounded-lg bg-primary px-10 py-3.5 text-base font-bold text-primary-foreground transition-all duration-300 hover:bg-primary/90 active:scale-[0.97]"
        >
          REGISTER NOW
        </button>
      </div>
      {/* Image */}
      <div className="md:w-1/2">
        <img
          src="https://live.lptedtech.com/wp-content/uploads/2025/12/IPMK2026.jpg"
          alt="CUET 2026"
          className="aspect-square w-full rounded-2xl object-cover"
          width={560}
          height={560}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

export default EarlyWinners;
