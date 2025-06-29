import Footer from "@/components/Footer/Footer";
import AboutUs from "@/components/Sections/AboutUs/AboutUs";
import HeroSection from "@/components/Sections/HeroSection/HeroSection";
import HowToOrderSection from "@/components/Sections/HowToOrderSection/HowToOrderSection";
import ShopSection from "@/components/Sections/ShopSection/ShopSection";

export default function Home() {
  return (
  <div>
    <HeroSection />
    <AboutUs />
    <ShopSection/>
    <HowToOrderSection/>
    <Footer/>
  </div>
  );
}
