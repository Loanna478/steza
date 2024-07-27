"use client";

import Image from "next/image";
import Button from "../components/button";
import Particles from "../components/particles";
import { useRef, MouseEvent, useState } from "react";


export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl">
        <a href="/" className="text-xl font-bold">MSTREAM</a>
        <div className="hidden md:flex space-x-6 items-center">
          <a href="/pages/series" className="hover:text-blue-400">Serie</a>
          <a href="/pages/films" className="hover:text-blue-400">Films</a>

        </div>
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`fixed top-[70px] left-1/2 transform -translate-x-1/2 bg-black/75 backdrop-blur-md text-white w-full md:w-3/4 max-w-5xl md:hidden transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-[-100%] opacity-0'}`}
        aria-hidden={!isMenuOpen}
      >
        <nav className="flex flex-col space-y-4 p-6">
          <a href="/" className="hover:text-blue-400">Home</a>
          <a href="/pages/price" className="hover:text-blue-400">Pricing</a>
          <a href="/pages/login" className="hover:text-blue-400">Login</a>
          <Button href="/pages/register">Register</Button>
        </nav>
      </div>

      <div className="flex flex-col items-center justify-center flex-grow pt-20" id="home">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white bg-clip-text bg-gradient-to-r from-slate-200 via-slate-200 to-slate-200">
          MSTREAM
        </h1>
        <div className="max-w-3xl mx-auto mb-8">
          <p className="text-lg text-slate-400 text-center">
            The best streaming platform for your favorite movies and series.
          </p>
        </div>
        <Button href="/pages/films">Get Started</Button>
      </div>

      <Particles className="absolute inset-0 pointer-events-none" quantity={100} />
      <div className="fixed top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
        <Image
          src="https://cruip-tutorials.vercel.app/particle-animation/shape.svg"
          className="max-w-none"
          width={852}   // Assurez-vous que c'est un nombre
          height={582}  // Assurez-vous que c'est un nombre
          alt="Illustration"
        />
      </div>

      <div className="fixed top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
        <Image
          src="https://cruip-tutorials.vercel.app/particle-animation/shape.svg"
          className="max-w-none w-full h-auto"
          width={852}   // Assurez-vous que c'est un nombre
          height={582}  // Assurez-vous que c'est un nombre
          alt="Illustration"
        />
      </div>

     

    </main>
  );
}
