import Timeline from "./component/Timeline";

export default function AboutScreen() {
  return (
    <section className="w-full pb-10 relative">
      <div className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/backgroun-about-new.webp"
            alt="About Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 py-20 px-6">
          {/* TITLE */}
          <div className="text-center mb-8">
            <h1 className="text-5xl text-[#FDF4E2] font-semibold">About</h1>
            <div className="w-28 h-[1.5px] bg-[#FDF4E2] mx-auto mt-4"></div>
          </div>

          {/* COMPANY OVERVIEW */}
          <div className="mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl text-[#FDF4E2] mb-2">Company Overview</h2>
            <p className="leading-relaxed text-2xl text-[#FDF4E2]">
              NFC Group Indonesia adalah satu-satunya distributor sepatu di
              Indonesia yang dikelola dengan system manajemen professional,
              didukung Quality Control terbaik, serta proses distribusi yang
              terfokus.
            </p>
            <p className="leading-relaxed text-2xl text-[#FDF4E2]">
              Dengan Operasional yang efisien, NFC Memaksimalkan proses
              pelayanan secara efektif, pengiriman tepat Waktu, serta
              produk-produk tetap, lengkap dengan garansi resmi sebagai komitmen
              kecepatan layanan dan kepercayaan customer.
            </p>
          </div>
        </div>
      </div>

      {/* VISION & MISSION */}
      {/* <div className="grid md:grid-cols-2 gap-10 mb-24 w-full max-w-6xl mx-auto">
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
      </div> */}
      <div className="relative w-full h-[70vh] flex justify-center items-center overflow-hidden mb-6">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/assets/images/background-visi-misi.webp"
            alt="About Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="grid md:grid-cols-2 gap-10 z-10 mb-24 w-full max-w-6xl mx-auto">
          <div className="text-[#FDF4E2] rounded-2xl p-10 shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl mb-4">Vision</h3>
            <p className="text-3xl">
              Menjadi distributor terpercaya dalam menyediakan produk sneakers
              berkualitas tinggi.
            </p>
          </div>

          <div className="text-[#FDF4E2] rounded-2xl p-10 shadow-sm hover:shadow-md transition">
            <h3 className="text-4xl mb-4">Mission</h3>
            <ul className="list-disc ml-5 space-y-3 text-3xl">
              <li>Menyediakan produk dari berbagai brand berkualitas</li>
              <li>Membangun jaringan distribusi nasional</li>
              <li>Mengikuti tren pasar secara berkelanjutan</li>
            </ul>
          </div>
        </div>
      </div>
      <Timeline />
    </section>
  );
}
