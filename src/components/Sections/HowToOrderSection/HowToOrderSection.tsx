"use client";
import { Heart, Money, ShoppingBag } from "phosphor-react";

export default function HowToOrderSection() {
  return (
    <div className=" flex flex-col items-center justify-center bg-white p-10 md:p-30 gap-10">
      <h1 className="text-4xl font-bold text-center mb-5 color-primary">
        How to Order ?
      </h1>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-center mb-2 color-primary flex items-center justify-center gap-2">
          <Heart size={20} className="text-primary" />
          Step 1 - Browse Your Favorites{" "}
          <Heart size={20} className="text-primary" />
        </span>
        <p className="text-lg text-center color-primary">
          Explore our handcrafted candles and macrame creations. Pick what you
          love.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-center mb-2 color-primary flex items-center justify-center gap-2">
          <ShoppingBag size={20} className="text-primary" />
          Step 2 - Place Your Order{" "}
          <ShoppingBag size={20} className="text-primary" />
        </span>
        <p className="text-lg text-center color-primary">
          Send us a message on WhatsApp or fill out our order form. We’ll
          confirm everything with you.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-2xl font-bold text-center mb-2 color-primary flex items-center justify-center gap-2">
          <Money size={20} className="text-primary" /> Step 3 - Pay on Delivery{" "}
          <Money size={20} className="text-primary" />
        </span>
        <p className="text-lg text-center color-primary">
          We deliver straight to your door. No online payments — just pay in
          cash when it arrives!
        </p>
      </div>
    </div>
  );
}
