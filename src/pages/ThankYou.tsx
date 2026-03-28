import { useEffect } from "react";

const ThankYou = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-white px-4 py-20 text-center">
      {/* Success Icon */}
      <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
        <svg className="h-10 w-10 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>

      <h1 className="text-[32px] md:text-[40px] font-extrabold text-foreground leading-tight">
        Thank You! 🎉
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-base md:text-lg leading-relaxed text-muted-foreground">
        Your registration has been received successfully. Our counselling team will reach out to you shortly.
      </p>

      {/* Key Info */}
      <div className="mx-auto mt-10 grid max-w-md gap-4 text-left">
        <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#AE202C]/10 text-[#AE202C]">
            📞
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Need Immediate Help?</p>
            <a href="tel:+919217577446" className="text-sm text-[#AE202C] font-medium hover:underline">
              Call us at 9217577446
            </a>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl bg-gray-50 p-4">
          <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
            💬
          </span>
          <div>
            <p className="text-sm font-semibold text-foreground">Chat on WhatsApp</p>
            <a
              href="https://wa.me/919217577446?text=Hi%2C%20I%20just%20registered%20for%20CUET%20coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#25D366] font-medium hover:underline"
            >
              Message us on WhatsApp →
            </a>
          </div>
        </div>
      </div>

      {/* Back to Home */}
      <a
        href="/"
        className="mt-10 inline-flex items-center gap-2 rounded-lg bg-[#AE202C] px-8 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:bg-[#8a1923] active:scale-[0.97]"
      >
        ← Back to Home
      </a>
    </section>
  );
};

export default ThankYou;
