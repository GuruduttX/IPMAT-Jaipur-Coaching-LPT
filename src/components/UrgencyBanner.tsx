import { useEffect, useState } from "react";

const UrgencyBanner = () => {
  const [slotsLeft] = useState(7);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="relative z-40 overflow-hidden bg-[#AE202C] px-4 py-2.5 text-center text-sm font-semibold text-white">
      <div className="flex items-center justify-center gap-3 flex-wrap">
        <span className="animate-pulse">🔥</span>
        <span>
          Limited Seats! Only <strong className="text-yellow-300">{slotsLeft} slots left</strong> for IPMAT 2026 Batch
        </span>
        <span className="hidden sm:inline">|</span>
        <button
          onClick={() => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" })}
          className="rounded-full bg-white px-4 py-1 text-xs font-bold text-[#AE202C] transition-all duration-200 hover:bg-yellow-300 hover:text-black active:scale-95"
        >
          Register Now →
        </button>
      </div>
    </div>
  );
};

export default UrgencyBanner;
