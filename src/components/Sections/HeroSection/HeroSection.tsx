import Image from "next/image";
import "./hero.css";

export default function HeroSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 justify-center items-center mt-20">
      <div className="col-span-1 flex flex-col justify-center items-center px-20">
        <h1 className="text-3xl font-bold color-primary">
          Handmade Candles & Macramé Decor
        </h1>
        <p className="text-lg color-primary">
          Bring warmth, light, and boho charm to your space. ✨ Crafted with
          care. Inspired by nature.
        </p>
      </div>
      <div className="col-span-1 flex justify-center items-center">
        <Image
          src="/MacrameHero.png"
          alt="Hero Image"
          width={300}
          height={300}
          className="image-rotate w-1/2 md:w-70"
        />
      </div>
    </div>
  );
}
