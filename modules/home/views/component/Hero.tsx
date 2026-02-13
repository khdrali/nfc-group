const Hero = () => {
  return (
    <section className="py-12 px-6 animate-fade-in">
      <div className="max-w-6xl mx-auto bg-[#F9F7F7] rounded-[40px] p-10 md:p-16 flex flex-col md:flex-row items-center gap-12 shadow-sm border border-gray-100">
        {/* Left Content */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <h1 className="text-5xl md:text-6xl font-extrabold text-[#333] leading-tight">
            NFC Group <br />
            Indonesia
          </h1>
          <p className="text-xl text-gray-600 font-medium leading-relaxed">
            Satu-satunya Distributor Sepatu
            <br />
            dengan manajemen perusahaan
            <br />
            terbaik di Indonesia.
          </p>
        </div>

        {/* Vertical Divider (Desktop) */}
        <div className="hidden md:block vertical-divider"></div>

        {/* Right Content: Icon List */}
        <div className="flex-1 w-full space-y-10">
          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#D92323]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8c-1.657 0-3 1.343-3 3s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 10c-4.418 0-8-3.582-8-8s3.582-8 8-8 8 3.582 8 8-3.582 8-8 8z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#333]">
              100% Money Guaranteed
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#D92323]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
            </div>
            <span className="text-lg font-bold text-[#333]">
              100% Secure Payment
            </span>
          </div>

          <div className="flex items-center gap-6">
            <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#D92323]">
              <svg
                className="w-8 h-8"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-[#333]">
                Support 24 Hours
              </span>
              <span className="text-lg font-bold text-[#333]">
                Fast Shipping
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
