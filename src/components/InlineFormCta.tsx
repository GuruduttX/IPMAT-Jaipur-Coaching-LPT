import { useState } from "react";

const InlineFormCta = () => {
  const [phone, setPhone] = useState("");

  return (
    <section className="py-10 px-4 md:px-6">
      <div
        className="mx-auto max-w-[1158px] overflow-hidden rounded-2xl"
        style={{ background: "linear-gradient(135deg, #AE202C 0%, #7c1420 50%, #1e1b4b 100%)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Left — Text */}
          <div className="px-8 py-10 md:w-[55%] md:py-12 md:px-12">
            <span className="inline-block rounded-full bg-yellow-400/20 px-4 py-1.5 text-xs font-bold text-yellow-300 mb-4">
              ⏰ Admissions Closing Soon
            </span>
            <h2 className="text-[24px] md:text-[28px] font-bold leading-tight text-white">
              Don't Miss Your Chance to Crack CUET 2026
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-white/80">
              Every year, thousands of students miss top university admissions because they start too late. 
              Our expert faculty has helped 2000+ students secure admissions in DU, JNU, BHU & more.
            </p>
            <div className="mt-5 flex flex-wrap gap-4 text-sm text-white/90">
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Expert CUET Faculty
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Personal Mentorship
              </span>
              <span className="flex items-center gap-2">
                <svg className="h-4 w-4 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                Free Mock Tests
              </span>
            </div>
          </div>

          {/* Right — Quick Form */}
          <div className="px-8 pb-10 md:w-[45%] md:py-12 md:px-10">
            <div className="rounded-xl bg-white p-6 shadow-xl">
              <h3 className="text-lg font-bold text-foreground">Book Free Counselling</h3>
              <p className="mt-1 text-xs text-muted-foreground">Get expert guidance on CUET subject selection & preparation</p>
              <form className="mt-4 space-y-3" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  maxLength={10}
                  value={phone}
                  onChange={(e) => setPhone(e.target.value.replace(/\D/g, ""))}
                  className="h-11 w-full rounded-md border border-border px-3.5 text-sm outline-none focus:ring-2 focus:ring-primary/40"
                />
                <select
                  defaultValue=""
                  className="h-11 w-full rounded-md border border-border bg-white px-3.5 text-sm text-muted-foreground outline-none focus:ring-2 focus:ring-primary/40"
                >
                  <option value="" disabled>Select your class</option>
                  <option>Class 10th</option>
                  <option>Class 11th</option>
                  <option>Class 12th</option>
                  <option>Class 12th Passed</option>
                </select>
                <button
                  type="submit"
                  className="h-11 w-full rounded-md bg-cta-red text-sm font-bold text-white transition-colors duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
                >
                  Get Free Counselling →
                </button>
              </form>
              <p className="mt-3 text-center text-[10px] text-muted-foreground">
                🔒 Your information is 100% secure &amp; confidential
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InlineFormCta;
