const centers = [
  {
    name: "LPT Hauz Khas",
    address: "Second Floor, 14, near Vadilal Hangout, Kaushalya Park, Hauz Khas, New Delhi, Delhi 110016",
    phone: "+91-9217577446",
    mapUrl: "https://share.google/CUjDORk4Qr8Ql6ldo",
  },
  {
    name: "LPT Gurgaon",
    address: "M-35, Second Floor, above HDFC Bank, Block M, Old DLF Colony, Sector 14, Gurugram, Haryana 122007",
    phone: "+91-9217577448",
    mapUrl: "https://share.google/pFc7tZ6wbwfal4JNG",
  },
  {
    name: "LPT GTB Nagar",
    address: "Metro Gate No. 1, upstairs Bank of Baroda, 73-75, Ring Road, Mall Road, GTB Nagar, New Delhi, Delhi 110033",
    phone: "+91-9217577445",
    mapUrl: "https://share.google/HDrAGmo4vPeISJGET",
  },
  {
    name: "LPT Noida",
    address: "Ground Floor, Sandesh Tower, C-56/31, C Block, Phase 2, Sector 62, Noida, Uttar Pradesh 201309",
    phone: "+91-9217577449",
    mapUrl: "https://share.google/SDz2XmdpiUzCQyND1",
  },
];

const LocationIcon = () => (
  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-red-50">
    <svg className="h-5 w-5 text-[#AE202C]" fill="currentColor" viewBox="0 0 384 512">
      <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
    </svg>
  </div>
);

const Centers = () => (
  <section className="bg-[#f5f5f5] py-16 px-4 md:px-6">
    <div className="mx-auto max-w-[1158px]">
      <h2 className="mb-10 text-center text-[28px] font-bold text-foreground">
        Visit Our Centers Across Delhi NCR
      </h2>
      <div className="grid gap-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {centers.map((c) => (
          <div
            key={c.name}
            className="rounded-xl bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <LocationIcon />
            <h3 className="text-lg font-bold text-foreground">{c.name}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.address}</p>
            <a
              href={`tel:${c.phone.replace(/-/g, "")}`}
              className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#AE202C] hover:underline"
            >
              <svg className="h-3.5 w-3.5" fill="currentColor" viewBox="0 0 384 512">
                <path d="M97.333 506.966c-129.874-129.874-129.681-340.252 0-469.933 5.698-5.698 14.527-6.632 21.263-2.422l64.817 40.513a17.187 17.187 0 0 1 6.849 20.958l-32.408 81.021a17.188 17.188 0 0 1-17.669 10.719l-55.81-5.58c-21.051 58.261-20.612 122.471 0 179.515l55.811-5.581a17.188 17.188 0 0 1 17.669 10.719l32.408 81.022a17.188 17.188 0 0 1-6.849 20.958l-64.817 40.513a17.19 17.19 0 0 1-21.264-2.422z" />
              </svg>
              {c.phone}
            </a>
            <br />
            <a
              href={c.mapUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-1 text-sm font-semibold text-[#AE202C] hover:underline"
            >
              Get Directions
              <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Centers;
