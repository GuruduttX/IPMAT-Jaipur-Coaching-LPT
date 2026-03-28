import { useEffect, useRef } from "react";

const HeroSection = () => {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load the NoPaperForms script dynamically after the widget div is in the DOM
    const loadWidget = () => {
      const win = window as any;

      // If the NPF init function already exists, just re-trigger it
      if (typeof win.npf_d === "function") {
        win.npf_d();
        return;
      }

      // Otherwise, load the script fresh
      const existing = document.querySelector(
        'script[src*="nopaperforms"]'
      );
      if (existing) existing.remove();

      const s = document.createElement("script");
      s.type = "text/javascript";
      s.async = true;
      s.src = "https://widgets.in6.nopaperforms.com/emwgts.js";
      document.body.appendChild(s);
    };

    // Small delay to ensure the DOM element is painted before script runs
    const timer = setTimeout(loadWidget, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="register" className="bg-white py-8 md:py-12 px-4 md:px-6">
      <div className="mx-auto flex max-w-[1280px] flex-col gap-6 lg:flex-row lg:items-stretch">
        {/* Left — Banner */}
        <div className="w-full lg:w-[60%] flex rounded-xl overflow-hidden bg-[#f3f4f6]">
          <picture className="w-full flex">
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
              className="w-full h-auto object-contain rounded-xl"
              width={832}
              height={624}
              fetchPriority="high"
              decoding="async"
            />
          </picture>
        </div>

        {/* Right — NoPaperForms Widget */}
        <div className="w-full lg:w-[40%]">
          <div className="rounded-2xl border border-border bg-white p-6 shadow-lg">
            <h2 className="text-[22px] font-bold text-foreground">Limited Slots!</h2>
            <p className="mt-1 text-sm text-muted-foreground">Fill the form to register or request more details.</p>
            <div className="mt-4" ref={widgetRef}>
              <div
                className="npf_wgts"
                data-height="400px"
                data-w="1b77a6fea5e0e0e10b6d10b8d9637367"
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
