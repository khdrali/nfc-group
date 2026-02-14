const timelineData = [
  {
    year: "2023",
    title: "First Concept Launched",
    subtitle: "NFC Group Indonesia",
    icon: "NFC",
  },
  {
    year: "2024",
    title: "Establish Sales Networks",
    subtitle: "in Various Cities in Indonesia",
    icon: "map",
  },
  {
    year: "2025",
    title: "Achieved",
    subtitle: "Highly Performance Record",
    icon: "chart",
  },
  {
    year: "2026",
    title: "Sustainable Growth and Expansion",
    subtitle: "of NFC Group Indonesia",
    icon: "globe",
  },
];

export default function Timeline() {
  return (
    <section className="bg-[#EDE7E3] py-12 px-6 rounded-2xl">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center gap-4 mb-10">
          <div className="w-[50%] h-0.5 bg-gray-500"></div>
          <h3 className="text-xl font-medium w-full">
            4 Years of Turning Vision Into Growth Industries
          </h3>
          <div className="w-[50%] h-0.5 bg-gray-500"></div>
        </div>

        <div className="bg-[#2D3E35] p-4 rounded-2xl">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {timelineData.map((item, i) => (
              <div key={i} className="text-center text-white">
                {/* Icon Box */}
                <div className="border border-white rounded-2xl p-6 flex items-center justify-center h-20 mb-4">
                  {item.icon === "NFC" && (
                    <span className="text-2xl font-bold tracking-widest">
                      NFC
                    </span>
                  )}

                  {item.icon === "map" && (
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 6l7-3 7 3 4-2v15l-4 2-7-3-7 3-4-2V6z" />
                    </svg>
                  )}

                  {item.icon === "chart" && (
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M3 3v18h18" />
                      <path d="M7 14l4-4 4 4 4-8" />
                    </svg>
                  )}

                  {item.icon === "globe" && (
                    <svg
                      className="w-10 h-10"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="10" />
                      <path d="M2 12h20M12 2a15 15 0 010 20" />
                    </svg>
                  )}
                </div>

                <p className="text-[#FDF4E2] font-semibold">{item.year}</p>
                <p className="text-[#FDF4E2] text-sm mt-1">{item.title}</p>
                <p className="text-[#FDF4E2] text-sm">{item.subtitle}</p>
              </div>
            ))}
          </div>

          {/* Timeline line */}
          <div className="relative mt-10">
            {/* GARIS */}
            <div className="absolute left-0 right-0 top-1/2 h-[2px] bg-gray-400 -translate-y-1/2"></div>

            {/* PANAH DI UJUNG */}
            <div className="absolute -right-1.5 top-1/2 -translate-y-1/2">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* DOTS */}
            <div className="grid grid-cols-4 relative">
              {timelineData.map((item, i) => (
                <div
                  key={i}
                  className="flex flex-col gap-4 items-center relative"
                >
                  {/* DASHED LINE KE ATAS */}
                  <div className="absolute top-0 bottom-1/2 border-l border-dashed border-gray-400"></div>
                  {/* DOT */}
                  <div className="w-3 h-3 bg-gray-500 rounded-full absolute top-1/2 -translate-y-1/2"></div>

                  {/* SPACER */}
                  <div className="h-6"></div>

                  {/* YEAR */}
                  <span className="text-sm text-[#FDF4E2]">{item.year}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
