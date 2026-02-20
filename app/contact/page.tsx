import Image from "next/image";

const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F7] w-full">
      <div className="text-center w-full">
        {/* 🔹 HERO BANNER */}
        <div className="relative h-[70vh] overflow-hidden mb-6">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/images/background-Contact_us.webp"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Centered Content */}
          <div className="relative z-10 h-full flex items-center justify-center px-8">
            <div className="max-w-3xl text-center">
              {/* Title */}
              <h1 className="text-4xl md:text-5xl font-medium text-[#FDF4E2] mb-5 tracking-tight">
                Contact Us
              </h1>

              {/* Description */}
              <div className="space-y-3 text-[#FDF4E2] text-lg leading-relaxed">
                <p className="font-bold">
                  NFC Group Indonesia mengutamakan kesuksesan bisnis Anda.
                </p>

                <p>
                  Untuk pertanyaan lebih lanjut, Anda dapat mengunjungi situs
                  web resmi kami atau menghubungi kami melalui telepon maupun
                  email.
                </p>

                <p>
                  Kami berkomitmen untuk mendukung pertumbuhan bisnis Anda
                  dengan kualitas terbaik.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 🔹 MESSAGE BOX */}
        <div className="bg-white border border-gray-200  shadow-sm h-64 mb-12 w-full max-w-6xl mx-auto" />

        {/* 🔹 CONTACT CARD */}
        <div className="relative w-full flex items-center justify-center mb-6 h-[50vh] overflow-hidden shadow-2xl">
          {/* Background Image */}
          <img
            src="/assets/images/background-contact-us-bawah.webp"
            alt="Background"
            className="absolute inset-0 w-full h-full object-cover"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-[#2D3E35]/80"></div>

          {/* Content */}
          <div className="relative flex justify-center items-center max-w-6xl mx-auto p-10 md:p-14 text-white">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-10 items-center">
              {/* LEFT */}
              <div className="space-y-10">
                {/* Email */}
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-12 border-2 flex items-center justify-center border-white rounded-sm">
                    {/* icon */}
                    <svg
                      className="w-8 h-8"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      {" "}
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />{" "}
                    </svg>
                  </div>
                  <span className="text-xl font-light">satria@nfcidn.com</span>
                </div>

                {/* Phone */}
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-12 border-2 border-white flex items-center justify-center rounded-sm">
                    {/* icon */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="white"
                      className="w-6 h-6"
                    >
                      <path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.01-.24c1.12.37 2.33.57 3.58.57a1 1 0 011 1V20a1 1 0 01-1 1C10.07 21 3 13.93 3 5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.25.2 2.46.57 3.58a1 1 0 01-.25 1.01l-2.2 2.2z" />
                    </svg>
                  </div>
                  <span className="text-xl font-medium leading-tight">
                    +62 - 810837 -<br />
                    7263-625
                  </span>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden md:block w-full h-full bg-white opacity-30"></div>

              {/* RIGHT */}
              <div className="space-y-8 md:pl-10">
                {/* LinkedIn */}
                <div className="flex items-center space-x-5">
                  <div className="w-10 h-10 bg-[#0077b5] rounded-md flex items-center justify-center overflow-hidden">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                      className="w-full h-full object-cover"
                      alt="LinkedIn"
                    />
                  </div>
                  <span className="text-xl lowercase font-light">linkedin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
