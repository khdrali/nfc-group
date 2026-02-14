import Image from "next/image";

const CardProduct = () => {
  return (
    <div className="bg-[#FDF4E2] px-4 py-4 rounded-2xl w-full max-w-75">
      <div className="flex flex-col items-center gap-4">
        <Image
          src={"/assets/images/sepatu-puma.webp"}
          alt="Sepatu"
          width={200}
          height={200}
        />
        <div className="flex items-center gap-4">
          <div className="bg-[#CC0000] w-2.5 h-2.5 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
