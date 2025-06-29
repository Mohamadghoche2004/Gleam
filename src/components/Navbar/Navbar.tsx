"use client";

import Image from "next/image";
import { useState } from "react";
import "./navbar.css";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              type="button"
              className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <span className="absolute -inset-0.5"></span>
              <span className="sr-only">Open main menu</span>

              <svg
                className={`${
                  isMobileMenuOpen ? "hidden" : "block"
                } size-6 transition-all duration-200 ease-in-out`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className={`${
                  isMobileMenuOpen ? "block" : "hidden"
                } size-6 transition-all duration-200 ease-in-out`}
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18 18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex flex-1 items-center justify-center  min-[640px]:justify-between">
            <div className="flex shrink-0 items-center">
              <button onClick={() => scrollToSection('home')}>
                <Image
                  className="h-10 w-auto "
                  src="/gleamLogo.png"
                  alt="Your Company"
                  width={50}
                  height={50}
                />
              </button>
            </div>
            <div className="hidden sm:block">
              <div className="flex space-x-4">
                <button
                  onClick={() => scrollToSection('about')}
                  className="rounded-md px-3 py-2 text-sm font-medium  transition-colors duration-200 cursor-pointer"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection('shop')}
                  className="rounded-md px-3 py-2 text-sm font-medium  transition-colors duration-200 cursor-pointer"
                >
                  Our Creations
                </button>
                <button
                  onClick={() => scrollToSection('order')}
                  className="rounded-md px-3 py-2 text-sm font-medium  transition-colors duration-200 cursor-pointer"
                >
                  How to Order?
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`sm:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isMobileMenuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3">
          <button
            onClick={() => scrollToSection('about')}
            className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out"
            style={{ color: "var(--primary)" }}
          >
            About Us
          </button>
          <button
            onClick={() => scrollToSection('shop')}
            className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out"
            style={{ color: "var(--primary)" }}
          >
            Our Creations
          </button>
          <button
            onClick={() => scrollToSection('order')}
            className="block w-full text-left rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200 ease-in-out"
            style={{ color: "var(--primary)" }}
          >
            How to Order?
          </button>
        </div>
      </div>
    </nav>
  );
}
