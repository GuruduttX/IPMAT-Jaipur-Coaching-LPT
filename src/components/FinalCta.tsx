const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const FinalCta = () => (
  <section className="py-10 px-4 md:px-6">
    <div
      className="mx-auto max-w-[1158px] rounded-2xl px-8 py-16 text-center"
      style={{ background: "linear-gradient(135deg, #AE202C 0%, #483E9F 50%, #F9C474 100%)" }}
    >
      <h2 className="text-[28px] font-bold text-white" style={{ textWrap: "balance" }}>
        Still Thinking? Let's Talk.
      </h2>
      <p className="mx-auto mt-3 max-w-lg text-base text-white/90">
        A short conversation can bring clarity that weeks of research cannot.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <button
          onClick={scrollToForm}
          className="rounded-lg border border-white px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-white hover:text-foreground active:scale-[0.97]"
        >
          Request a Call Back
        </button>
        <a
          href="tel:+919217577446"
          className="inline-flex items-center gap-2 rounded-lg bg-foreground/70 px-7 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-foreground/60 active:scale-[0.97]"
        >
          <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 384 512">
            <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422z" />
          </svg>
          9217577446
        </a>
      </div>
    </div>
  </section>
);

export default FinalCta;
