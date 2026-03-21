const ResultsBanner = () => (
  <section className="px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      {/* Desktop */}
      <div className="hidden md:block w-full overflow-hidden rounded-2xl">
        <img
          src="https://live.lptedtech.com/wp-content/uploads/2025/08/IPMAT_2025Desktop.jpg"
          alt="IPMAT 2025 Results"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
      {/* Mobile */}
      <div className="md:hidden w-full overflow-hidden rounded-2xl">
        <img
          src="https://live.lptedtech.com/wp-content/uploads/2025/08/IPMAT_2025.jpg"
          alt="IPMAT 2025 Results"
          className="w-full object-cover"
          loading="lazy"
        />
      </div>
    </div>
  </section>
);

export default ResultsBanner;
