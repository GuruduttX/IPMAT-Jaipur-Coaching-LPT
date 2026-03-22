const scrollToForm = () => document.getElementById("register")?.scrollIntoView({ behavior: "smooth" });

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm" style={{ height: 70 }}>
      <div className="mx-auto flex h-full max-w-[1158px] items-center justify-between px-6">
        <a href="#">
          <img
            src="https://live.lptedtech.com/wp-content/uploads/2025/03/Asset-1-1-1.svg"
            alt="LPT Edtech"
            className="h-[40px] w-auto"
          />
        </a>
        <button
          onClick={scrollToForm}
          className="hidden sm:inline-flex rounded-lg bg-cta-red px-6 py-2.5 text-sm font-bold text-white transition-all duration-300 hover:bg-cta-red/90 active:scale-[0.97]"
        >
          Register Now
        </button>
      </div>
    </header>
  );
};

export default Navbar;
