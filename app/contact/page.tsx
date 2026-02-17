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
        <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-sm h-64 mb-12 w-full max-w-6xl mx-auto" />

        {/* 🔹 CONTACT CARD */}
        <div className="bg-[#2D3E35] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl text-left w-full max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-10 items-center relative">
            {/* LEFT */}
            <div className="space-y-10">
              {/* Email */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-12 flex items-center justify-center border-2 border-white rounded-sm">
                  <svg
                    className="w-8 h-8"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <span className="text-xl font-light">satria@nfcidn.com</span>
              </div>

              {/* Phone */}
              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-sm">
                  <svg
                    className="w-8 h-8 text-[#2D3E35]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24..." />
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
              {/* Instagram */}
              <div className="flex items-center space-x-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  className="w-10 h-10"
                  alt="Instagram"
                />
                <span className="text-xl lowercase font-light">instagram</span>
              </div>

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

              {/* TikTok */}
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01..." />
                  </svg>
                </div>
                <span className="text-xl lowercase font-light">tiktok</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
