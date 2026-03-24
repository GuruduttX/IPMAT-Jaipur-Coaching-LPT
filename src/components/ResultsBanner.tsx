const ResultsBanner = () => (
  <section className="px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <div className="relative w-full aspect-[3/1] overflow-hidden rounded-2xl bg-gray-100">
        <picture>
          <source srcSet="/Picture1.webp" type="image/webp" />
          <img
            src="/Picture1.png"
            alt="IPMAT 2025 Results"
            className="absolute inset-0 h-full w-full object-cover"
            width={1158}
            height={400}
            loading="lazy"
            decoding="async"
          />
        </picture>
      </div>
    </div>
  </section>
);

export default ResultsBanner;
