const testimonials = [
  {
    quote: "LPT's guidance helped me secure my dream IIM.",
    name: "Parth Baheti (IIM Indore)",
    videoId: "fpqssXDe1CI",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/01/PARTH.jpg",
  },
  {
    quote: "The faculty believed in me before I believed in myself.",
    name: "Anshi Arora (IIM Indore)",
    videoId: "n7P8kSlWbVo",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/01/Anshi.jpg",
  },
  {
    quote: "The best decision for my IIM journey, without doubt.",
    name: "Adrik Agarwal (IIM Indore)",
    videoId: "VLL7QmxxBtM",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/01/Adrik.jpg",
  },
  {
    quote: "I scored better because they trained me better.",
    name: "Rakshi Jaiswal (IIM Indore)",
    videoId: "",
    img: "https://live.lptedtech.com/wp-content/uploads/2026/01/Rakshit.jpg",
  },
];

const QuoteIcon = () => (
  <svg className="h-7 w-7" fill="none" viewBox="0 0 29 28" xmlns="http://www.w3.org/2000/svg">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M9.75225 2.96804C9.02535 3.23933 7.89094 3.83529 7.07006 4.37705C6.08793 5.02524 4.73856 6.26147 4.06657 7.12872C2.85956 8.68639 2.22812 10.2707 1.86529 12.6522C1.62127 14.2536 1.60392 14.6602 1.58141 19.3083C1.55747 24.2516 1.53564 23.9413 1.9346 24.333C2.31956 24.711 2.09181 24.694 6.78076 24.694C11.3095 24.694 11.151 24.7031 11.5251 24.4229C11.6207 24.3513 11.7586 24.193 11.8316 24.0711L11.9643 23.8494L11.9777 19.6377L11.991 15.4259L11.8848 15.1835C11.7601 14.8989 11.4178 14.5817 11.1593 14.5112C11.0533 14.4823 10.1701 14.4625 8.97801 14.4624L6.97484 14.4621V14.1586C6.97484 13.4676 7.1755 12.2949 7.42669 11.518C7.76062 10.485 8.27014 9.6522 9.0082 8.93292C9.61033 8.34608 10.3076 7.88005 11.2877 7.40918C12.0045 7.06492 12.112 6.97949 12.3089 6.59767C12.361 6.49656 12.3958 6.31634 12.3975 6.1382C12.4 5.88033 12.3672 5.7756 12.1251 5.26685C11.2038 3.33093 11.1285 3.2081 10.7436 3.01534C10.4614 2.87397 10.0561 2.85467 9.75225 2.96804ZM24.2888 2.93266C24.0163 2.98203 22.7353 3.5975 22.0417 4.01228C19.9372 5.27066 18.2945 6.95656 17.3332 8.8445C16.6303 10.225 16.2822 11.6195 16.037 14.0369C15.9718 14.6793 15.9531 15.6398 15.9355 19.2596C15.9112 24.2572 15.8891 23.9408 16.2886 24.333C16.6736 24.711 16.4461 24.694 21.1322 24.694C25.6998 24.694 25.5397 24.7038 25.9112 24.4032C26.0086 24.3243 26.1456 24.1469 26.2156 24.0089L26.343 23.758L26.3419 19.5807C26.3408 15.4824 26.3389 15.3991 26.2407 15.186C26.1256 14.9364 25.95 14.7419 25.7039 14.5914C25.5358 14.4886 25.483 14.4856 23.4188 14.4621L21.3057 14.4379L21.3207 14.0518C21.3595 13.0546 21.6046 11.8677 21.9452 11.0293C22.2954 10.1672 22.7147 9.53834 23.3511 8.92115C23.9303 8.35945 24.5216 7.9592 25.4498 7.50069C26.3396 7.06115 26.5883 6.85859 26.689 6.4914C26.8082 6.05678 26.7455 5.83781 26.1588 4.64038C25.8313 3.97212 25.5408 3.44595 25.4287 3.31834C25.144 2.99415 24.7273 2.85317 24.2888 2.93266Z"
      fill="#F7B551"
    />
  </svg>
);

const PlayIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 512 512">
    <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm115.7 272l-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42z" />
  </svg>
);

const Testimonials = () => (
  <section className="py-16 px-4 md:px-6 bg-white">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-8 text-center text-[28px] font-bold text-foreground">
        Hear from Our IPMAT 2025 Toppers
      </h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {testimonials.map((t) => (
          <div
            key={t.name}
            className="relative flex flex-col justify-between overflow-hidden rounded-2xl text-white"
            style={{
              background: "linear-gradient(180deg, #AE202C 0%, #000000 40%)",
              minHeight: 420,
            }}
          >
            {/* Student photo as background overlay at bottom */}
            <div
              className="absolute inset-0 z-0"
              style={{
                backgroundImage: `url(${t.img})`,
                backgroundPosition: "bottom left",
                backgroundRepeat: "no-repeat",
                backgroundSize: "60% auto",
              }}
            />

            {/* Content */}
            <div className="relative z-10 p-5 pb-[220px]">
              <QuoteIcon />
              <p className="mt-4 text-[17px] font-medium leading-relaxed">"{t.quote}"</p>
              <p className="mt-2 text-sm text-white/70">{t.name}</p>
            </div>

            {/* Watch Video button at bottom */}
            {t.videoId && (
              <div className="relative z-10 p-5 pt-0">
                <a
                  href={`https://www.youtube.com/watch?v=${t.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 rounded-full px-4 py-3 text-[15px] font-medium text-white transition-all duration-300 hover:bg-white/20 active:scale-[0.97]"
                  style={{ backgroundColor: "rgba(183, 151, 151, 0.5)" }}
                >
                  Watch Video
                  <PlayIcon />
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
