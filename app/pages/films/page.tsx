"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Particles from "@/components/particles";

interface Film {
  id: number;
  filmname: string;
  description: string;
  image: string;
}

export default function FilmList() {
  const [films, setFilms] = useState<Film[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalFilms, setTotalFilms] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');  
  const [filteredFilms, setFilteredFilms] = useState<Film[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchFilms(currentPage);
      await fetchCountFilms();
    };

    fetchData();
  }, [currentPage]);

  useEffect(() => {
    setFilteredFilms(
      films.filter(film =>
        film.filmname.toLowerCase().includes(searchTerm.toLowerCase()) ||
        film.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, films]);

  const fetchCountFilms = async () => {
    try {
      const response = await fetch('http://85.215.137.122:8081/getcountfilms');
      if (response.ok) {
        const data = await response.json();
        setTotalFilms(data.totalFilms);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur: ${error.message}`);
      } else {
        console.error("Une erreur inconnue est survenue");
      }
    }
  };

  const fetchFilms = async (page: number) => {
    try {
      const response = await fetch(`http://85.215.137.122:8081/getfilms?page=${page}`);
      if (response.ok) {
        const data = await response.json();
        const formattedFilms = data.films.map((film: any) => ({
          ...film,
          filmname: film.filmname.length > 15 ? film.filmname.substring(0, 15) + '...' : film.filmname,
          description: film.description.length > 30 ? film.description.substring(0, 30) + '...' : film.description
        }));
        setFilms(formattedFilms);
        setFilteredFilms(formattedFilms);
        setTotalPages(data.totalPages);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur: ${error.message}`);
      } else {
        console.error("Une erreur inconnue est survenue");
      }
    }
  };

  const renderPagination = () => {
    const pages = [];

    if (currentPage > 1) {
      pages.push(
        <button
          key="first"
          onClick={() => setCurrentPage(1)}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
        >
          1
        </button>
      );

      if (currentPage > 2) {
        pages.push(
          <button
            key="prev"
            onClick={() => setCurrentPage(currentPage - 1)}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
          >
            {currentPage - 1}
          </button>
        );
      }
    }

    pages.push(
      <button
        key="current"
        className="bg-blue-700 text-white py-2 px-4 rounded-lg cursor-default"
      >
        {currentPage}
      </button>
    );

    if (currentPage < totalPages) {
      if (currentPage < totalPages - 1) {
        pages.push(
          <button
            key="next"
            onClick={() => setCurrentPage(currentPage + 1)}
            className="bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
          >
            {currentPage + 1}
          </button>
        );
      }

      pages.push(
        <button
          key="last"
          onClick={() => setCurrentPage(totalPages)}
          className="bg-gray-700 text-white py-2 px-4 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors"
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl">
        <Link href="/" className="text-xl font-bold">MSTREAM</Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/pages/series" className="hover:text-blue-400">Serie</Link>
          <Link href="/pages/films" className="hover:text-blue-400">Films</Link>
        </div>
      </nav>

      <Particles className="absolute inset-0 pointer-events-none" quantity={100} />

      <div className="flex flex-col items-center justify-center flex-grow pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold">Films</h1>
        <h2 className="text-xl md:text-2xl mt-4">
          Il y a actuellement {totalFilms} films disponibles sur MS-Project
        </h2>
        <input
          type="text"
          placeholder="Rechercher un film..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded mt-4" />
      </div>

      <div id="films" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
        {filteredFilms.map((film) => (
          <Link
            href={`/pages/watchfilms?id=${film.id}`}
            key={film.id}
            className="relative group block rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700"
          >
            <Image
              src={film.image}
              alt={film.filmname}
              className="w-full h-72 object-cover"
              width={300}
              height={450}
            />
            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <div className="p-4 text-center text-white">
                <div className="text-lg font-bold">{film.filmname}</div>
                <div className="text-sm mt-2">{film.description}</div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination flex gap-2 mt-4 justify-center">
        {renderPagination()}
      </div>

      <div className="fixed top-0 left-0 rotate-180 -translate-x-3/4 -scale-x-100 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
        <Image
          src="https://cruip-tutorials.vercel.app/particle-animation/shape.svg"
          className="max-w-none"
          width={852}
          height={582}
          alt="Illustration"
        />
      </div>

      <div className="fixed top-0 right-0 -translate-y-1/2 translate-x-1/4 blur-3xl opacity-70 pointer-events-none" aria-hidden="true">
        <Image
          src="https://cruip-tutorials.vercel.app/particle-animation/shape.svg"
          className="max-w-none w-full h-auto"
          width={852}
          height={582}
          alt="Illustration"
        />
      </div>

    </main>
  );
}
