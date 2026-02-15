import Image from "next/image";

const Hero = () => {
  return (
    <section className="py-12 px-6 animate-fade-in">
      <div className="relative max-w-6xl mx-auto rounded-[40px] overflow-hidden shadow-sm border border-gray-100">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/background-Home_atas.webp"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 p-10 md:p-16 flex flex-col md:flex-row items-center gap-12">
          {/* Left Content */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold text-[#FDF4E2] leading-tight">
              NFC Group <br />
              Indonesia
            </h1>
            <p className="text-xl text-[#FDF4E2] font-medium leading-relaxed">
              Satu-satunya Distributor Sepatu
              <br />
              dengan manajemen perusahaan
              <br />
              terbaik di Indonesia.
            </p>
          </div>

          {/* Vertical Divider */}
          <div className="hidden md:block w-px bg-gray-300 self-stretch"></div>

          {/* Right Content */}
          <div className="flex-1 w-full space-y-10">
            {/* item 1 */}
            <div className="flex items-center gap-1">
              <div className="w-24 h-24 relative rounded-xl flex items-center justify-center shadow-sm text-[#D92323]">
                {/* icon */}
                <Image
                  src={"/assets/images/Money_Guaranted.webp"}
                  alt="icon"
                  fill
                  className="aspect-square object-cover"
                />
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-base font-bold text-[#FDF4E2]">
                  100% Money Guaranteed
                </span>
                <span className="text-base font-bold text-[#FDF4E2]">
                  100% Secure Payment
                </span>
              </div>
            </div>

            {/* item 2 */}
            {/* <div className="flex items-center gap-6">
              <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center shadow-sm text-[#D92323]"> */}
            {/* icon */}
            {/* <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  {" "}
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />{" "}
                </svg>
              </div>
              <span className="text-lg font-bold text-[#FDF4E2]">
                100% Secure Payment
              </span>
            </div> */}

            {/* item 3 */}
            <div className="flex items-center gap-1">
              <div className="w-24 h-24 relative rounded-xl flex items-center justify-center shadow-sm text-[#D92323]">
                {/* icon */}
                <Image
                  src={"/assets/images/time-shipping.webp"}
                  alt="icon"
                  fill
                  className="aspect-square object-cover"
                />
              </div>
              <span className="text-base font-bold text-[#FDF4E2]">
                Support 24 Hours <br /> Fast Shipping
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
