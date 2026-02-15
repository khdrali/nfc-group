import Image from "next/image";

export default function Timeline() {
  const items = [
    {
      year: "2023",
      title: "First Concept Launched",
      desc: "NFC Group Indonesia resmi memulai operasional bisnis.",
      icon: "/assets/logo/transparent-image-1.png",
    },
    {
      year: "2024",
      title: "Sales Network Expansion",
      desc: "Memperluas jaringan distribusi di berbagai kota besar Indonesia.",
      icon: "/assets/images/About_3.webp",
    },
    {
      year: "2025",
      title: "High Performance Achievement",
      desc: "Mencapai performa distribusi dan pertumbuhan penjualan terbaik.",
      icon: "/assets/images/About_4.webp",
    },
    {
      year: "2026",
      title: "Sustainable Growth Expansion",
      desc: "Ekspansi berkelanjutan dan penguatan posisi NFC Group Indonesia",
      icon: "/assets/images/About_2.webp",
    },
  ];

  return (
    <div className="w-full bg-[#2D4137] rounded-xl py-6 text-white">
      {/* Top icons */}
      <div className="grid grid-cols-4 gap-6 text-center mb-4">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex flex-col items-center px-1 border-r-4 border-white last:border-none"
          >
            <div className="p-4 border border-white/40 rounded-lg flex items-center justify-center text-xl font-bold">
              <Image
                src={item?.icon}
                alt={item?.title}
                width={100}
                height={100}
                className="aspect-square object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Timeline line */}
      <div className="relative flex items-center mb-6">
        {/* Line */}
        <div className="absolute left-0 right-0 h-[4px] bg-[#F9F9F9]"></div>

        {/* Arrow */}
        <div className="absolute right-2 translate-x-full">
          <div className="w-0 h-0 border-t-8 border-b-8 border-l-[10px] border-t-transparent border-b-transparent border-l-[#F9F9F9]"></div>
        </div>

        {/* Years */}
        <div className="grid grid-cols-4 w-full text-center relative">
          {items.map((item, i) => (
            <div
              key={i}
              className="relative z-10 bg-[#2D4137] w-full max-w-16 rounded-lg mx-auto"
            >
              <div className="font-semibold text-2xl">{item.year}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Text section */}
      <div className="grid grid-cols-4 gap-6 text-center">
        {items.map((item, i) => (
          <div
            key={i}
            className="px-1 border-r-4 border-white last:border-none"
          >
            <h3 className="font-semibold text-sm mb-2">{item.title}</h3>
            <p className="text-xs text-white/80 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
