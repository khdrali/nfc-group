export default function AboutScreen() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      {/* TITLE */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-semibold">About</h1>
        <div className="w-28 h-[1.5px] bg-gray-500 mx-auto mt-4"></div>
      </div>

      {/* COMPANY OVERVIEW */}
      <div className="mb-16 max-w-4xl mx-auto">
        <h2 className="text-2xl mb-5">Company Overview</h2>
        <p className="leading-relaxed mb-4">
          NFC Group Indonesia adalah satu-satunya distributor sepatu di
          Indonesia yang dikelola dengan system manajemen professional, didukung
          Quality Control terbaik, serta proses distribusi yang terfokus.
        </p>
        <p className="leading-relaxed">
          Dengan Operasional yang efisien, NFC Memaksimalkan proses pelayanan
          secara efektif, pengiriman tepat Waktu, serta produk-produk tetap,
          lengkap dengan garansi resmi sebagai komitmen kecepatan layanan dan
          kepercayaan customer.
        </p>
      </div>

      {/* VISION & MISSION */}
      <div className="grid md:grid-cols-2 gap-10 mb-24">
        <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl mb-4">Vision</h3>
          <p>
            Menjadi distributor terpercaya dalam menyediakan produk sneakers
            berkualitas tinggi.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-10 shadow-sm hover:shadow-md transition">
          <h3 className="text-2xl mb-4">Mission</h3>
          <ul className="list-disc ml-5 space-y-3">
            <li>Menyediakan produk dari berbagai brand berkualitas</li>
            <li>Membangun jaringan distribusi nasional</li>
            <li>Mengikuti tren pasar secara berkelanjutan</li>
          </ul>
        </div>
      </div>

      {/* TIMELINE TITLE */}
      <div className="text-center mb-10">
        <h3 className="text-lg tracking-wide">
          4 Years of Turning Vision Into Growth Industries
        </h3>
      </div>

      {/* TIMELINE */}
      <div className="bg-[#1F3D36] rounded-2xl px-8 py-12 text-white">
        <div className="grid md:grid-cols-4 gap-8 text-center text-sm">
          {/* 2023 */}
          <div className="hover:-translate-y-2 transition-transform">
            <svg
              className="w-14 h-14 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M3 21h18M4 21V7l8-4 8 4v14" />
            </svg>
            <p className="opacity-70">2023</p>
            <p className="mt-2">First Concept Launched</p>
          </div>

          {/* 2024 */}
          <div className="hover:-translate-y-2 transition-transform">
            <svg
              className="w-14 h-14 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M17 20h5v-2a4 4 0 00-4-4h-1" />
              <path d="M7 20H2v-2a4 4 0 014-4h1" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            <p className="opacity-70">2024</p>
            <p className="mt-2">Sales Network Expansion</p>
          </div>

          {/* 2025 */}
          <div className="hover:-translate-y-2 transition-transform">
            <svg
              className="w-14 h-14 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M3 3v18h18" />
              <path d="M7 15l4-4 3 3 5-6" />
            </svg>
            <p className="opacity-70">2025</p>
            <p className="mt-2">High Performance Record</p>
          </div>

          {/* 2026 */}
          <div className="hover:-translate-y-2 transition-transform">
            <svg
              className="w-14 h-14 mx-auto mb-4"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15 15 0 010 20" />
            </svg>
            <p className="opacity-70">2026</p>
            <p className="mt-2">Sustainable Growth</p>
          </div>
        </div>
      </div>
    </section>
  );
}
