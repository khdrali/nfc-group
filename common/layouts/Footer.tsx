import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
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
            <p className="text-gray-400 text-lg leading-relaxed max-w-md">
              NFC Group Indonesia berkomitmen memberikan akses terhadap alas
              kaki berkualitas tinggi dari brand terkemuka di dunia untuk
              masyarakat Indonesia.
            </p>
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
              <li className="flex items-start">
                <span className="mr-3 text-red-500">📍</span>
                Jl. Jenderal Sudirman No. 123, Jakarta Selatan
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-red-500">📞</span>
                +62 21 555-0123
              </li>
              <li className="flex items-center">
                <span className="mr-3 text-red-500">✉️</span>
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
