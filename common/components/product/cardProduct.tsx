import Image from "next/image";

interface ProductProps {
  thumbnail: string;
  alt?: string;
  color?: string[];
}

const CardProduct = ({ thumbnail, alt, color }: ProductProps) => {
  return (
    <div className="bg-[#FDF4E2] pb-4 rounded-2xl w-full max-w-60">
      <div className="flex flex-col items-center gap-1">
        <Image
          src={thumbnail}
          alt={alt ? alt : "Sepatu"}
          width={180}
          height={180}
        />
        <div className="flex items-center gap-1">
          {color &&
            color.map((v, key) => (
              <div
                key={key}
                className="w-5 h-5 rounded-full"
                style={{ background: v }}
              ></div>
            ))}
          {/* <div className="bg-[#CC0000] w-5 h-5 rounded-full"></div>
          <div className="bg-[#CC0000] w-5 h-5 rounded-full"></div>
          <div className="bg-[#CC0000] w-5 h-5 rounded-full"></div>
          <div className="bg-[#CC0000] w-5 h-5 rounded-full"></div> */}
        </div>
      </div>
    </div>
  );
};
export default CardProduct;
