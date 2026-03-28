const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const stats = [
  { value: "2000+", label: "Students Placed" },
  { value: "24+", label: "Years Experience" },
  { value: "98%", label: "Success Rate" },
];

const CheckIcon = () => (
  <svg className="h-5 w-5 text-yellow-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const InlineFormCta = () => {
  return (
    <section className="py-12 px-4 md:px-6">
      <div
        className="mx-auto max-w-[1158px] overflow-hidden rounded-3xl"
        style={{ background: "linear-gradient(135deg, #1e1b4b 0%, #312e81 50%, #4c1d95 100%)" }}
      >
        <div className="flex flex-col md:flex-row md:items-center">
          {/* Left — Text */}
          <div className="px-8 py-10 md:w-[55%] md:py-14 md:px-12">
            <span className="inline-block rounded-full bg-yellow-400/20 px-4 py-1.5 text-xs font-bold text-yellow-400 mb-5">
              ⏰ Admissions Closing Soon
            </span>
            <h2 className="text-[24px] md:text-[30px] font-bold leading-tight text-white">
              Don't Miss Your Chance to Crack CUET 2026
            </h2>
            <p className="mt-4 text-sm md:text-base leading-relaxed text-white/75">
              Every year, thousands of students miss top university admissions because they start too late. 
              Our expert faculty has helped 2000+ students secure admissions in DU, JNU, BHU & more.
            </p>
            <div className="mt-6 flex flex-wrap gap-5 text-sm text-white">
              <span className="flex items-center gap-2">
                <CheckIcon />
                Expert CUET Faculty
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                Personal Mentorship
              </span>
              <span className="flex items-center gap-2">
                <CheckIcon />
                Free Mock Tests
              </span>
            </div>
          </div>

          {/* Right — Stats & CTA */}
          <div className="px-8 pb-10 md:w-[45%] md:py-14 md:px-10">
            <div className="rounded-2xl bg-white/10 backdrop-blur-sm p-8 border border-white/10">
              {/* Stats Grid */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {stats.map((stat) => (
                  <div key={stat.label} className="text-center">
                    <p className="text-2xl md:text-3xl font-extrabold text-yellow-400">{stat.value}</p>
                    <p className="text-[11px] md:text-xs text-white/70 mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
              
              {/* Divider */}
              <div className="border-t border-white/15 my-6"></div>
              
              {/* CTA Section */}
              <div className="text-center">
                <p className="text-white font-semibold mb-5">
                  🎯 Join India's Most Trusted CUET Coaching
                </p>
                <button
                  onClick={scrollToForm}
                  className="w-full rounded-full bg-yellow-400 px-8 py-4 text-[15px] font-bold text-gray-900 transition-all duration-300 hover:bg-yellow-300 active:scale-[0.97] shadow-lg shadow-yellow-400/25"
                >
                  Register Now — Limited Seats →
                </button>
                <p className="mt-5 text-xs text-white/60">
                  📞 Or call us at <a href="tel:+919217577446" className="text-yellow-400 hover:underline font-medium">9217577446</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InlineFormCta;
