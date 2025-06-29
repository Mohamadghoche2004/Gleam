"use client";

import Image from "next/image";
import "./footer.css";

export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 py-20 md:py-30 footer-container">
      <div className="col-span-1  flex  flex-col  items-center  ">
        <button onClick={() => scrollToSection('home')}>
          <Image src="/gleamLogo.png" alt="logo" width={70} height={70} />
        </button>
      </div>
      <div className="col-span-1 flex flex-col  items-center  lg:items-start">
        <h3 className="text-lg font-bold">About Us</h3>
        <button onClick={() => scrollToSection('about')} className="cursor-pointer hover:opacity-80 transition-opacity">
          <p>About Us</p>
        </button>
      </div>
      <div className="col-span-1 flex flex-col items-center  lg:items-start">
        <h3 className="text-lg font-bold">Contact Us</h3>
        <p>Phone: +961 71 216 519</p>
      </div>
      <div className="col-span-1 flex flex-col  items-center lg:items-start">
        <h3 className="text-lg font-bold">Community</h3>
        <a
          target="_blank"
          href="https://www.instagram.com/gleam_lebanon?igsh=MW5hY3ptNnNkYjZwbw=="
        >
          <p>Instagram </p>
        </a>
        <a
          target="_blank"
          href="https://www.tiktok.com/@gleamlebanon?_t=ZS-8xbXBNxvvak&_r=1"
        >
          <p>TikTok</p>
        </a>
      </div>
    </div>
  );
}
