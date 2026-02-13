import Footer from "./Footer";
import Navbar from "./Navbar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative w-full">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default MainLayout;
