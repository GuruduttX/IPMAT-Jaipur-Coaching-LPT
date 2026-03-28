const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const FloatingCta = () => (
  <>
    {/* Desktop — Side floating buttons with labels */}
    <div className="fixed right-5 bottom-6 z-50 hidden md:flex flex-col gap-3">
      {/* WhatsApp */}
      <a
        href="https://wa.me/919217577446?text=Hi%2C%20I%20want%20to%20know%20more%20about%20CUET%20coaching"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3"
      >
        <span className="rounded-lg bg-gray-900/80 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 shadow-lg">
          WhatsApp Us
        </span>
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_14px_rgba(37,211,102,0.4)] transition-all duration-300 hover:shadow-[0_6px_20px_rgba(37,211,102,0.5)] hover:scale-110">
          <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
      </a>
      {/* Call */}
      <a
        href="tel:+919217577446"
        className="group flex items-center gap-3"
      >
        <span className="rounded-lg bg-gray-900/80 px-3 py-1.5 text-xs font-semibold text-white opacity-0 transition-all duration-300 group-hover:opacity-100 shadow-lg">
          Call Us
        </span>
        <span className="flex h-[52px] w-[52px] items-center justify-center rounded-full bg-white text-[#AE202C] shadow-[0_4px_14px_rgba(0,0,0,0.12)] border border-gray-100 transition-all duration-300 hover:shadow-[0_6px_20px_rgba(174,32,44,0.3)] hover:scale-110 hover:bg-[#AE202C] hover:text-white">
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </span>
      </a>
    </div>

    {/* Mobile — Sticky bottom bar */}
    <div className="fixed inset-x-0 bottom-0 z-50 flex md:hidden bg-white shadow-[0_-2px_16px_rgba(0,0,0,0.08)]">
      <a
        href="tel:+919217577446"
        className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold text-gray-600 transition-colors active:bg-gray-50"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#AE202C]/10">
          <svg className="h-4 w-4 text-[#AE202C]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
        </span>
        Call
      </a>
      <div className="my-2 w-px bg-gray-200" />
      <a
        href="https://wa.me/919217577446?text=Hi%2C%20I%20want%20to%20know%20more%20about%20CUET%20coaching"
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 flex-col items-center justify-center gap-1 py-2.5 text-[11px] font-semibold text-gray-600 transition-colors active:bg-gray-50"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#25D366]/10">
          <svg className="h-4 w-4 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </span>
        WhatsApp
      </a>
      <div className="my-2 w-px bg-gray-200" />
      <button
        onClick={scrollToForm}
        className="flex flex-1 flex-col items-center justify-center gap-1 bg-[#AE202C] py-2.5 text-[11px] font-bold text-white transition-colors active:bg-[#8a1923]"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20">
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </span>
        Register
      </button>
    </div>
  </>
);

export default FloatingCta;
