import Brands from "./component/Brands";
import Hero from "./component/Hero";
import Trust from "./component/Trust";

const HomeScreen = () => {
  return (
    <div className="relative w-full max-w-360 mx-auto">
      <Hero />
      <Brands />
      <Trust />
    </div>
  );
};

export default HomeScreen;
