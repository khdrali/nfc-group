import Brands from "./component/Brands";
import Hero from "./component/Hero";
import Trust from "./component/Trust";

const HomeScreen = () => {
  return (
    <div className="relative w-full">
      <Hero />
      <div className="max-w-360 mx-auto w-full relative">
        <Brands />
      </div>
      <Trust />
    </div>
  );
};

export default HomeScreen;
