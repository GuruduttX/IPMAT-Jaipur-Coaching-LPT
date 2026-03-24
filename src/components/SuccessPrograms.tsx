const programs = [
  {
    label: "CUET Crash Course 2026",
    img: "/cuet-crash-course-2026.png",
    discount: "40% OFF",
    rating: 4.5,
    reviews: 11375,
    batchStart: "Batch Starting 01-Jan-2026",
    hours: "150+ Hours",
    mentorship: "Expert mentorship",
    originalPrice: "₹50,000",
    price: "₹29,999",
    priceNote: "(Excl. GST)",
  },
  {
    label: "CUET 2026 Offline Batch",
    img: "/cuet-2027-target-batch.png",
    discount: "23% OFF",
    rating: 5,
    reviews: 7757,
    duration: "Duration : 365 Days",
    hours: "400+ Hours",
    mentorship: "Expert Mentorship",
    originalPrice: "₹80,000",
    price: "₹62,000",
    priceNote: "(Excl. GST)",
  },
  {
    label: "CUET 2027 Offline Batch",
    img: "/cuet-2027-finisher-batch.png",
    discount: null,
    rating: 4.5,
    reviews: 3452,
    duration: "Duration : 365 Days",
    hours: "650+ Hours",
    mentorship: "Expert mentorship",
    originalPrice: "₹100,000",
    price: "₹100,000",
    priceNote: "(Excl. GST)",
  },
];

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg className={`h-4 w-4 ${filled ? "text-yellow-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const ClockIcon = () => (
  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const CalendarIcon = () => (
  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
  </svg>
);

const UsersIcon = () => (
  <svg className="h-4 w-4 text-muted-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
  </svg>
);

const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const SuccessPrograms = () => (
  <section className="bg-[#f8f9fa] py-16 px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-center text-[28px] font-bold text-foreground">
        Our CUET Success Programs in Delhi NCR
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {programs.map((p) => (
          <div key={p.label} className="overflow-hidden rounded-xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-lg">
            {/* Image with discount badge */}
            <div className="relative w-full">
              {p.discount && (
                <span className="absolute left-3 top-3 z-10 rounded bg-cta-red px-2.5 py-1 text-xs font-bold text-white">
                  {p.discount}
                </span>
              )}
              <img
                src={p.img}
                alt={p.label}
                className="aspect-[16/10] w-full object-cover"
                width={352}
                height={220}
                loading="lazy"
                decoding="async"
              />
            </div>
            
            {/* Content */}
            <div className="p-5">
              {/* Rating */}
              <div className="flex items-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <StarIcon key={star} filled={star <= Math.floor(p.rating)} />
                ))}
                <span className="ml-1 text-sm text-muted-foreground">({p.reviews.toLocaleString()})</span>
              </div>
              
              {/* Title */}
              <h3 className="text-lg font-bold text-foreground mb-3">{p.label}</h3>
              
              {/* Details */}
              <div className="space-y-2 mb-4">
                {p.batchStart && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon />
                    <span>{p.batchStart}</span>
                  </div>
                )}
                {p.duration && (
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <CalendarIcon />
                    <span>{p.duration}</span>
                  </div>
                )}
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <ClockIcon />
                    <span>{p.hours}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <UsersIcon />
                    <span>{p.mentorship}</span>
                  </div>
                </div>
              </div>
              
              {/* Price and CTA */}
              <div className="flex items-center justify-between">
                <div>
                  {p.originalPrice !== p.price && (
                    <span className="text-sm text-muted-foreground line-through mr-2">{p.originalPrice}</span>
                  )}
                  <span className="text-xl font-bold text-foreground">{p.price}</span>
                  <span className="text-xs text-muted-foreground ml-1">{p.priceNote}</span>
                </div>
                <button
                  onClick={scrollToForm}
                  className="rounded-lg bg-cta-red px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SuccessPrograms;
