import { useState } from "react";

const HeroSection = () => {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  return (
    <section id="register" className="bg-white py-8 md:py-12 px-4 md:px-6">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 lg:flex-row lg:items-start">
        {/* Left — Banner */}
        <div className="w-full lg:w-[65%]">
          <picture>
            <source 
              media="(max-width: 640px)" 
              srcSet="/hero-image-mobile.webp" 
              type="image/webp" 
            />
            <source 
              srcSet="/hero-image.webp" 
              type="image/webp" 
            />
            <img
              src="/hero-image-optimized.png"
              alt="CUET 2026 — Prepare Now"
              className="w-full rounded-xl"
              width={832}
              height={624}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        {/* Right — Form Card */}
        <div className="w-full lg:w-[35%]">
          <div className="rounded-2xl border border-border bg-white p-8 shadow-lg">
            <h2 className="text-[22px] font-bold text-foreground">Limited Slots!</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill the form to register or request more details.</p>

            <form className="mt-6 space-y-3" onSubmit={(e) => e.preventDefault()}>
              <input
                type="text"
                placeholder="Enter Your Name"
                aria-label="Your Name"
                className="h-12 w-full rounded-md border border-border px-3.5 text-base outline-none focus:ring-2 focus:ring-primary/40"
              />
              <input
                type="email"
                placeholder="Enter Your Email Address"
                aria-label="Email Address"
                className="h-12 w-full rounded-md border border-border px-3.5 text-base outline-none focus:ring-2 focus:ring-primary/40"
              />
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number (without +91)"
                  aria-label="Phone Number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => {
                    const val = e.target.value.replace(/\D/g, "");
                    setPhone(val);
                    if (val.length >= 10) setShowOtp(true);
                  }}
                  className="h-12 w-full rounded-md border border-border px-3.5 text-base outline-none focus:ring-2 focus:ring-primary/40"
                />
                <p className="mt-1 text-xs text-muted-foreground">{phone.length} of 10 max characters.</p>
              </div>
              {showOtp && (
                <input
                  type="text"
                  placeholder="Enter OTP"
                  aria-label="OTP"
                  className="h-12 w-full rounded-md border border-border px-3.5 text-base outline-none focus:ring-2 focus:ring-primary/40"
                />
              )}
              <select
                defaultValue=""
                aria-label="Current class"
                className="h-12 w-full rounded-md border border-border bg-white px-3.5 text-base text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40"
              >
                <option value="" disabled>~Which class are you currently in?~</option>
                <option>Class 10th</option>
                <option>Class 11th</option>
                <option>Class 12th</option>
                <option>Class 12th Passed</option>
              </select>
              <button
                type="submit"
                className="h-12 w-full rounded-md bg-cta-red text-[17px] font-bold text-white transition-colors duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
              >
                Register Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
