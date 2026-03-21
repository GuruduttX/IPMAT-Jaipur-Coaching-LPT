interface CtaBannerProps {
  yellowLabel: string;
  heading: string;
  buttons: { label: string; style: "filled" | "outline"; onClick?: () => void; href?: string }[];
}

const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const PhoneIcon = () => (
  <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 384 512">
    <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422z" />
  </svg>
);

const CtaBanner = ({ yellowLabel, heading, buttons }: CtaBannerProps) => (
  <section className="py-10 px-4 md:px-6">
    <div
      className="mx-auto max-w-[1158px] rounded-2xl px-8 py-12 text-center md:px-12"
      style={{ background: "linear-gradient(135deg, #AE202C 0%, #483E9F 100%)" }}
    >
      <h2 className="text-[24px] font-semibold leading-snug text-white md:text-[28px]">{yellowLabel}</h2>
      <p className="mx-auto mt-3 max-w-2xl text-base text-white/90">{heading}</p>
      <div className="mt-6 flex flex-col items-center justify-center gap-3 sm:flex-row">
        {buttons.map((b) =>
          b.style === "filled" ? (
            <button
              key={b.label}
              onClick={b.onClick ?? scrollToForm}
              className="rounded-lg bg-white px-8 py-3.5 text-sm font-semibold text-primary transition-all duration-300 hover:bg-white/90 active:scale-[0.97]"
            >
              {b.label}
            </button>
          ) : b.href ? (
            <a
              key={b.label}
              href={b.href}
              className="inline-flex items-center gap-2 rounded-lg bg-foreground/80 px-8 py-3.5 text-sm font-semibold text-white text-center transition-all duration-300 hover:bg-foreground/70 active:scale-[0.97]"
            >
              <PhoneIcon />
              {b.label.replace("📞 ", "")}
            </a>
          ) : (
            <button
              key={b.label}
              onClick={b.onClick}
              className="rounded-lg border border-white/60 px-8 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.97]"
            >
              {b.label}
            </button>
          )
        )}
      </div>
    </div>
  </section>
);

export default CtaBanner;
