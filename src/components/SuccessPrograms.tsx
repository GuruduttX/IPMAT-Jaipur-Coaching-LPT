const programs = [
  {
    label: "CUET Crash Course 2026",
    tagline: "Fast-track your CUET preparation with an intensive crash course",
    discount: "40% OFF",
    rating: 4.5,
    reviews: 11375,
    batchStart: "Batch Starting 01-Jan-2026",
    hours: "150+ Hours",
    mentorship: "Expert Mentorship",
    originalPrice: "₹50,000",
    price: "₹29,999",
    priceNote: "(Excl. GST)",
    popular: false,
  },
  {
    label: "CUET 2027 Offline Batch",
    tagline: "Comprehensive year-long program with in-depth coverage",
    discount: "23% OFF",
    rating: 5,
    reviews: 7757,
    duration: "365 Days",
    hours: "400+ Hours",
    mentorship: "Expert Mentorship",
    originalPrice: "₹80,000",
    price: "₹62,000",
    priceNote: "(Excl. GST)",
    popular: true,
  },
  {
    label: "CUET 2027 Offline Batch",
    tagline: "Get a head start with early and structured preparation",
    discount: null,
    rating: 4.5,
    reviews: 3452,
    duration: "365 Days",
    hours: "650+ Hours",
    mentorship: "Expert Mentorship",
    originalPrice: "₹100,000",
    price: "₹100,000",
    priceNote: "(Excl. GST)",
    popular: false,
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`h-3.5 w-3.5 ${filled ? "text-[hsl(var(--gold))]" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const CheckIcon = () => (
  <svg className="h-4 w-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const SuccessPrograms = () => (
  <section className="bg-[#f8f9fa] py-16 px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-2 text-center text-[28px] font-bold text-foreground">
        Our CUET Success Programs in Delhi NCR
      </h2>
      <p className="mx-auto mb-10 max-w-xl text-center text-sm leading-relaxed text-muted-foreground">
        Expert-led coaching with a proven track record of top university admissions
      </p>

      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <div
            key={p.label}
            className={`relative flex flex-col rounded-xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${
              p.popular
                ? "ring-2 ring-primary shadow-lg"
                : "border border-border shadow-sm"
            }`}
          >
            {/* Popular badge */}
            {p.popular && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-white shadow-sm">
                Most Popular
              </span>
            )}

            {/* Top accent bar */}
            <div
              className="h-1 w-full rounded-t-xl"
              style={{ background: "linear-gradient(90deg, #AE202C, #483E9F)" }}
            />

            {/* Card body */}
            <div className="flex flex-1 flex-col p-6">
              {/* Header row: title + discount */}
              <div className="flex items-start justify-between gap-3 mb-1">
                <h3 className="text-lg font-bold text-foreground leading-tight">{p.label}</h3>
                {p.discount && (
                  <span className="shrink-0 rounded bg-cta-red/10 px-2 py-0.5 text-xs font-bold text-cta-red">
                    {p.discount}
                  </span>
                )}
              </div>

              {/* Tagline */}
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.tagline}</p>

              {/* Rating */}
              <div className="flex items-center gap-0.5 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= Math.floor(p.rating)} />
                ))}
                <span className="ml-1.5 text-xs font-medium text-muted-foreground">
                  {p.rating} · {p.reviews.toLocaleString()} reviews
                </span>
              </div>

              {/* Feature list */}
              <div className="space-y-2.5 mb-6">
                {p.batchStart && (
                  <div className="flex items-center gap-2.5 text-sm text-foreground">
                    <CalendarIcon />
                    <span>{p.batchStart}</span>
                  </div>
                )}
                {p.duration && (
                  <div className="flex items-center gap-2.5 text-sm text-foreground">
                    <CalendarIcon />
                    <span>Duration: {p.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-2.5 text-sm text-foreground">
                  <ClockIcon />
                  <span>{p.hours}</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm text-foreground">
                  <UsersIcon />
                  <span>{p.mentorship}</span>
                </div>
              </div>

              {/* Includes */}
              <div className="rounded-lg bg-secondary/60 p-3.5 mb-6 space-y-2">
                <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Includes</p>
                {["Study material & notes", "Mock tests & analysis", "Doubt clearing sessions"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Spacer */}
              <div className="mt-auto" />

              {/* Price */}
              <div className="mb-4">
                {p.originalPrice !== p.price && (
                  <span className="text-sm text-muted-foreground line-through mr-2">{p.originalPrice}</span>
                )}
                <span className="text-2xl font-extrabold text-foreground">{p.price}</span>
                <span className="ml-1 text-xs text-muted-foreground">{p.priceNote}</span>
              </div>

              {/* CTA */}
              <button
                onClick={scrollToForm}
                className={`w-full rounded-lg py-3 text-sm font-bold transition-all duration-300 active:scale-[0.97] ${
                  p.popular
                    ? "bg-cta-red text-white hover:bg-cta-red/90 shadow-sm"
                    : "border-2 border-cta-red text-cta-red hover:bg-cta-red hover:text-white"
                }`}
              >
                Enroll Now →
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessPrograms;
