export default function HowToOrderSection() {
  return (
    <div className=" flex flex-col items-center justify-center bg-white p-10 md:p-30 gap-10">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-5 color-primary">
        How to Order ?
      </h1>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl md:text-2xl font-bold text-center mb-2 color-primary flex items-center justify-center gap-2">
          Step 1 - Browse Your Favorites{" "}
        </span>
        <p className="text-lg text-center color-primary">
          Explore our handcrafted candles and macrame creations. Pick what you
          love.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl md:text-2xl font-bold text-center mb-2 color-primary flex items-center justify-center gap-2">
          Step 2 - Place Your Order{" "}
        </span>
        <p className="text-lg text-center color-primary">
          Send us a message on WhatsApp or fill out our order form. We’ll
          confirm everything with you.
        </p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <span className="text-xl md:text-2xl font-bold text-center mb-2 color-primary flex items-center justify-center gap-2">
          Step 3 - Pay on Delivery{" "}
        </span>
        <p className="text-lg text-center color-primary">
          We deliver straight to your door. No online payments — just pay in
          cash when it arrives!
        </p>
      </div>
    </div>
  );
}
