const Trust = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto bg-white rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-xl border border-gray-50">
        {/* Left Content */}
        <div className="flex-1 space-y-6">
          <h3 className="text-3xl font-extrabold text-[#333]">
            NFC Group Indonesia
          </h3>
          <p className="text-lg text-gray-600 font-medium leading-relaxed">
            NFC Group Indonesia telah dipercaya
            <br />
            oleh berbagai pelanggan berkat komitmen
            <br />
            terhadap layanan yang konsisten,
            <br />
            akurat, dan terpercaya.
          </p>
        </div>

        {/* Dashed Divider */}
        <div className="hidden md:block dashed-divider"></div>

        {/* Right Content: Stats */}
        <div className="flex-1 w-full space-y-10">
          <div className="flex items-center gap-6">
            <div className="text-[#2D3E35] shrink-0">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#333]">
              100% Jaminan Kualitas Terbaik
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[#2D3E35] shrink-0">
              <svg
                className="w-10 h-10"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#333]">
              100+ Perusahaan dengan jangkauan operasional di seluruh kota
              Indonesia
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-[#2D3E35] shrink-0">
              <svg
                className="w-10 h-10"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3" />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#333]">
              100% Rasio Kepuasan Pelanggan
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
