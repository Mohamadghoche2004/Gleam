import Image from "next/image";
import "./hero.css";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20 gap-10 md:gap-0">
      <div className="col-span-1 flex flex-col  px-10 sm:px-20">
        <h1 className="text-xl sm:text-3xl font-bold color-primary text-center md:text-left">
          Handmade Candles & Macramé Decor
        </h1>
        <p className="text-sm sm:text-lg color-primary text-center md:text-left">
          Bring warmth, light, and boho charm to your space. ✨ Crafted with
          care. Inspired by nature.
        </p>
      </div>
      <div className="col-span-1 image-container">
        <Image
          src="/MacrameHero.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="image-rotate w-2/3 sm:w-1/2 md:w-70"
        />
      </div>
    </div>
  );
}
