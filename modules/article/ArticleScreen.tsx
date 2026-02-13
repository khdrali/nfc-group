import { Post } from "./models/response";

export const ARTICLES: Post[] = [
  {
    id: 1,
    title: "Tren Sepatu Lari 2024",
    excerpt:
      "Temukan inovasi terbaru di dunia lari yang akan meningkatkan performa Anda.",
    date: "12 Jan 2024",
    image: "https://picsum.photos/seed/art1/600/400",
  },
  {
    id: 2,
    title: "Cara Merawat Sepatu Kulit",
    excerpt:
      "Tips praktis agar koleksi sepatu kulit Anda tetap mengkilap dan awet bertahun-tahun.",
    date: "15 Jan 2024",
    image: "https://picsum.photos/seed/art2/600/400",
  },
  {
    id: 3,
    title: "NFC Group Buka Gudang Baru",
    excerpt:
      "Ekspansi besar-besaran untuk menjamin pengiriman yang lebih cepat ke seluruh Indonesia.",
    date: "20 Jan 2024",
    image: "https://picsum.photos/seed/art3/600/400",
  },
];

const ArticleScreen = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            Artikel & Berita
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Update terbaru seputar dunia fashion, olahraga, dan berita
            perusahaan NFC Group.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <div className="text-red-600 text-xs font-bold uppercase tracking-widest mb-2">
                  {article.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                <button className="text-red-600 font-bold flex items-center text-sm group-hover:underline">
                  Baca Selengkapnya
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArticleScreen;
