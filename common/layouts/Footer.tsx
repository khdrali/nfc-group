import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#2D4137] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block mb-6">
              <img
                src="/assets/logo/transparent-image.png"
                alt="Logo"
                width={55}
                height={36}
              />
            </div>
            {/* <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              NFC Group Indonesia berkomitmen memberikan akses terhadap alas
              kaki berkualitas tinggi dari brand terkemuka di dunia untuk
              masyarakat Indonesia.
            </p> */}
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-gray-400">
              <li>
                <Link href="/" className="hover:text-red-500 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:text-red-500 transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/catalog"
                  className="hover:text-red-500 transition-colors"
                >
                  Catalog
                </Link>
              </li>
              <li>
                <Link
                  href="/article"
                  className="hover:text-red-500 transition-colors"
                >
                  Articles
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-bold mb-6">Kontak</h4>
            <ul className="space-y-4 text-gray-400">
              {/* LinkedIn */}
              <li className="flex items-center">
                <span className="mr-3 text-white">
                  {/* LinkedIn Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M4.98 3.5C4.98 4.88 3.86 6 2.49 6S0 4.88 0 3.5 1.12 1 2.49 1s2.49 1.12 2.49 2.5zM.22 8.09h4.54V24H.22V8.09zM7.91 8.09h4.35v2.18h.06c.61-1.16 2.09-2.38 4.3-2.38 4.6 0 5.45 3.03 5.45 6.97V24h-4.54v-7.73c0-1.84-.03-4.21-2.56-4.21-2.56 0-2.95 2-2.95 4.07V24H7.91V8.09z" />
                  </svg>
                </span>
                linkedin.com/company/nfcgroup
              </li>

              {/* WhatsApp */}
              <li className="flex items-center">
                <span className="mr-3 text-white">
                  {/* WhatsApp Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M20.52 3.48A11.78 11.78 0 0012.02 0C5.39 0 .02 5.37.02 12c0 2.12.55 4.19 1.6 6.02L0 24l6.18-1.62A11.94 11.94 0 0012.02 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.5-8.52zM12.02 21.8c-1.81 0-3.58-.48-5.12-1.39l-.37-.22-3.67.96.98-3.58-.24-.37A9.74 9.74 0 012.3 12c0-5.36 4.36-9.72 9.72-9.72S21.74 6.64 21.74 12s-4.36 9.8-9.72 9.8zm5.37-7.37c-.29-.15-1.7-.84-1.96-.94-.26-.1-.45-.15-.64.15s-.73.94-.9 1.13c-.17.19-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.14-.14.29-.34.43-.51.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.51-.07-.15-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.51.07-.78.36-.26.29-1 1-1 2.44s1.02 2.83 1.16 3.03c.14.19 2.01 3.07 4.87 4.3.68.29 1.21.46 1.62.59.68.22 1.29.19 1.78.11.54-.08 1.7-.69 1.94-1.35.24-.66.24-1.23.17-1.35-.07-.12-.26-.19-.55-.34z" />
                  </svg>
                </span>
                +62 812-3456-7890
              </li>

              {/* Email */}
              <li className="flex items-center">
                <span className="mr-3 text-white">
                  {/* Email Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 13.065L.017 6.548A2 2 0 012 5h20a2 2 0 011.983 1.548L12 13.065zM12 15.935l12-6.517V19a2 2 0 01-2 2H2a2 2 0 01-2-2V9.418l12 6.517z" />
                  </svg>
                </span>
                info@nfcgroup.id
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} NFC Group Indonesia. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
