import { Product } from "./models/responses";

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: "Air Max 270",
    brand: "Nike",
    price: "Rp 2.499.000",
    image: "/assets/images/nike.webp",
  },
  {
    id: 2,
    name: "Ultraboost Light",
    brand: "Adidas",
    price: "Rp 3.199.000",
    image: "/assets/images/adidas.webp",
  },
  {
    id: 3,
    name: "Clyde Base",
    brand: "Puma",
    price: "Rp 1.599.000",
    image: "/assets/images/puma.webp",
  },
  {
    id: 4,
    name: "Mexico 66",
    brand: "Onitsuka Tiger",
    price: "Rp 1.999.000",
    image: "/assets/images/new-balance.webp",
  },
];

const CatalogScreen = () => {
  return (
    <div className="py-20 bg-white ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Produk Katalog
          </h1>
          <p className="text-gray-600">
            Jelajahi koleksi terbaru dari brand ternama.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="relative aspect-square overflow-hidden bg-gray-100 rounded-2xl mb-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button className="bg-red-600 text-white px-6 py-2 rounded-full font-bold shadow-lg">
                    Detail
                  </button>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
              <p className="text-red-600 font-bold">{product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CatalogScreen;
