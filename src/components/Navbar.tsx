const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-sm" style={{ height: 70 }}>
      <div className="mx-auto flex h-full max-w-[1158px] items-center px-6">
        <a href="#">
          <img
            src="https://live.lptedtech.com/wp-content/uploads/2025/03/Asset-1-1-1.svg"
            alt="LPT Edtech"
            className="h-[40px] w-auto"
          />
        </a>
      </div>
    </header>
  );
};

export default Navbar;
