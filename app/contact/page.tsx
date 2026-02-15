const Contact = () => {
  return (
    <div className="min-h-screen bg-[#F9F7F7] py-16 px-4">
      <div className="max-w-3xl mx-auto text-center w-full">
        <div className="relative overflow-hidden rounded-3xl mb-6">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img
              src="/assets/images/background-Contact_us.webp"
              alt="Contact Background"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Content */}
          <div className="relative z-10 px-8 py-12">
            {/* Header Text */}
            <h1 className="text-5xl font-medium text-[#FDF4E2] mb-5 tracking-tight">
              Contact Us
            </h1>

            <div className="space-y-3 text-[#FDF4E2] text-lg leading-relaxed mb-6">
              <p className="font-bold">
                NFC Group Indonesia mengutamakan kesuksesan bisnis Anda.
              </p>

              <p>
                Untuk pertanyaan lebih lanjut, Anda dapat mengunjungi situs web
                resmi kami atau menghubungi kami melalui telepon maupun email.
              </p>

              <p>
                Kami berkomitmen untuk mendukung pertumbuhan bisnis Anda dengan
                kualitas terbaik.
              </p>
            </div>
          </div>
        </div>

        {/* Message/Form Box Placeholder */}
        <div className="bg-white border border-gray-200 rounded-[2.5rem] shadow-sm h-64 mb-12 w-full">
          {/* Empty box as requested in reference */}
        </div>

        {/* Dark Contact Card */}
        <div className="bg-[#2D3E35] rounded-[2.5rem] p-10 md:p-14 text-white shadow-2xl text-left">
          <div className="grid grid-cols-1 md:grid-cols-[1fr_2px_1fr] gap-10 items-center relative">
            {/* Left Column: Email & Phone */}
            <div className="space-y-10">
              <div className="flex items-center space-x-6">
                <div className="w-16 h-12 flex items-center justify-center border-2 border-white rounded-sm shrink-0">
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
                <span className="text-xl tracking-wide font-light">
                  satria@nfcidn.com
                </span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="w-16 h-16 bg-white flex items-center justify-center rounded-sm shrink-0">
                  <svg
                    className="w-8 h-8 text-[#2D3E35]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"></path>
                  </svg>
                </div>
                <span className="text-xl tracking-[0.15em] font-medium leading-tight">
                  +62 - 810837 -<br />
                  7263-625
                </span>
              </div>
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden md:block w-full h-full bg-white opacity-30"></div>

            {/* Right Column: Social Media */}
            <div className="space-y-8 md:pl-10">
              <div className="flex items-center space-x-5">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Instagram_logo_2016.svg"
                  className="w-10 h-10"
                  alt="Instagram"
                />
                <span className="text-xl lowercase font-light">instagram</span>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 bg-[#0077b5] rounded-md flex items-center justify-center overflow-hidden">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
                    className="w-full h-full object-cover"
                    alt="LinkedIn"
                  />
                </div>
                <span className="text-xl lowercase font-light">linkind</span>
              </div>
              <div className="flex items-center space-x-5">
                <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                  <svg className="w-6 h-6 fill-white" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.03 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.9-.32-1.98-.23-2.8.12-.73.31-1.34.87-1.71 1.58-.33.63-.44 1.34-.4 2.05.03.36.07.73.19 1.07.46.63 1.19 1.08 1.93 1.27.71.18 1.48.11 2.13-.19.68-.31 1.23-.89 1.5-1.57.22-.55.28-1.15.27-1.75-.02-3.64-.02-7.29-.01-10.93z" />
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
