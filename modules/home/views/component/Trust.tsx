const Trust = () => {
  return (
    <section className="w-full">
      <div className="relative w-full min-h-[60vh] overflow-hidden shadow-sm border border-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/background-home-bawah.webp"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50" />

        {/* Content Wrapper (CENTERED) */}
        <div className="relative z-10 min-h-[60vh] flex items-center">
          <div className="w-full px-6 md:px-16 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* LEFT CONTENT */}
            <div className="flex-1 space-y-6 text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-extrabold text-[#FDF4E2]">
                NFC Group Indonesia
              </h3>
              <p className="text-lg text-[#FDF4E2] font-medium leading-relaxed">
                NFC Group Indonesia telah dipercaya oleh <br />
                berbagai pelanggan berkat komitmen terhadap <br />
                layanan yang konsisten, akurat, dan terpercaya.
              </p>
            </div>

            {/* DIVIDER */}
            <div className="hidden md:block w-px h-40 border-l-2 border-dashed border-[#FDF4E2]" />

            {/* RIGHT CONTENT */}
            <div className="flex-1 w-full space-y-10">
              {/* ITEM 1 */}
              <div className="flex items-center gap-6">
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-10 bottom-[-40px] w-px border-l-2 border-dashed border-[#FDF4E2]" />
                  <svg
                    className="w-10 h-10 text-[#FDF4E2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-[#FDF4E2]">
                  100% Jaminan Kualitas Terbaik
                </span>
              </div>

              {/* ITEM 2 */}
              <div className="flex items-center gap-6">
                <div className="relative flex flex-col items-center">
                  <div className="absolute top-10 bottom-[-40px] w-px border-l-2 border-dashed border-[#FDF4E2]" />
                  <svg
                    className="w-10 h-10 text-[#FDF4E2]"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <span className="text-lg font-bold text-[#FDF4E2]">
                  1000+ Perusahaan dengan jangkauan operasional di seluruh kota
                  Indonesia
                </span>
              </div>

              {/* ITEM 3 */}
              <div className="flex items-center gap-6">
                <svg
                  className="w-10 h-10 text-[#FDF4E2]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
                </svg>
                <span className="text-lg font-bold text-[#FDF4E2]">
                  100% Rasio Kepuasan Pelanggan
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
