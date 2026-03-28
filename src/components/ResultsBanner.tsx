const ResultsBanner = () => (
  <section className="px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      {/* Aspect ratio container prevents CLS */}
      <div className="relative w-full overflow-hidden rounded-2xl" style={{ aspectRatio: '1158/400' }}>
        <img
          src="/Picture1.png"
          alt="CUET 2025 Results - Our Toppers"
          className="absolute inset-0 h-full w-full object-cover"
          width={1158}
          height={400}
          loading="lazy"
          decoding="async"
        />
      </div>
    </div>
  </section>
);

export default ResultsBanner;
