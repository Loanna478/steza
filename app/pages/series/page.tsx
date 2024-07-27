"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Particles from "@/components/particles";
import Image from 'next/image';

interface Serie {
  id: string;
  name: string;
  image: string;
  language: string;
  seasonNumber?: string; // Propriété ajoutée pour le numéro de saison
}

export default function DashboardSeriePage() {
  const [series, setSeries] = useState<Serie[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [totalSeries, setTotalSeries] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSeries, setFilteredSeries] = useState<Serie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetchSeries(currentPage);
      await fetchCountSeries();
    };

    fetchData();
  }, [currentPage]);

  const fetchCountSeries = async () => {
    try {
      const response = await fetch('http://85.215.137.122:8081/getcountseries');
      if (response.ok) {
        const data = await response.json();
        setTotalSeries(data.totalSeries);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur: ${error.message}`);
      } else {
        console.error("Une erreur inconnue est survenue");
      }
    }
  };

  const fetchSeries = async (page: number) => {
    try {
      const response = await fetch(`http://85.215.137.122:8081/getseries?page=${page}`);
      if (response.ok) {
        const data = await response.json();
        const formattedSeries = data.series.map((serie: any) => ({
          ...serie,
          seasonNumber: extractSeasonNumber(serie.name),
        }));
        setSeries(formattedSeries);
        setFilteredSeries(formattedSeries);
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

  const extractSeasonNumber = (name: string) => {
    const match = name.match(/ - Saison (\d+)/);
    return match ? match[1] : '1';
  };

  const renderPagination = () => {
    const pages = [];

    if (currentPage > 1) {
      pages.push(
        <button key="first" onClick={() => setCurrentPage(1)}>
          1
        </button>
      );

      if (currentPage > 2) {
        pages.push(
          <button key="prev" onClick={() => setCurrentPage(currentPage - 1)}>
            {currentPage - 1}
          </button>
        );
      }
    }

    pages.push(<button key="current" className="active">{currentPage}</button>);

    if (currentPage < totalPages) {
      if (currentPage < totalPages - 1) {
        pages.push(
          <button key="next" onClick={() => setCurrentPage(currentPage + 1)}>
            {currentPage + 1}
          </button>
        );
      }

      pages.push(
        <button key="last" onClick={() => setCurrentPage(totalPages)}>
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  useEffect(() => {
    setFilteredSeries(
      series.filter(serie =>
        serie.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm, series]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-slate-900">
      
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl">
        <Link href="/" className="text-xl font-bold">MSTREAM</Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/pages/series" className="hover:text-blue-400">Series</Link>
          <Link href="/pages/films" className="hover:text-blue-400">Films</Link>
        </div>
      </nav>

      <div className="flex flex-col items-center justify-center flex-grow pt-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white">
          Series
        </h1>
        <h2 className="text-xl md:text-2xl">
          <br></br>
          Il y a actuellement {totalSeries} séries disponibles sur MS-Project
          <br></br>
        </h2>
        <input
          type="text"
          placeholder="Rechercher une série..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="bg-gray-800 text-white px-4 py-2 rounded" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-4 p-4">
        {filteredSeries.map((serie) => (
          <Link href={`/pages/watchseries?id=${serie.id}`} key={serie.id} className="relative group block rounded-lg overflow-hidden bg-gray-800 hover:bg-gray-700 transition-transform transform hover:scale-105">
            <Image
              src={serie.image}
              alt={serie.name}
              className="w-full h-72 object-cover"
              width={500} // Remplacez ces valeurs par les dimensions réelles de vos images
              height={750} // Assurez-vous d'utiliser les dimensions réelles ou approximatives
            />
            <div className="absolute top-0 left-0 m-2 text-xs bg-black bg-opacity-70 text-white px-2 py-1 rounded">
              Saison {serie.seasonNumber}
            </div>
            <div className="absolute top-0 right-0 m-2 text-xs bg-black bg-opacity-70 text-white px-2 py-1 rounded">
              {serie.language}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-opacity duration-300 flex justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100">
              <div className="text-lg font-bold">{serie.name}</div>
            </div>
          </Link>
        ))}
      </div>
      <div className="pagination flex gap-2 mt-4">
        {renderPagination()}
      </div>

      <Particles className="absolute inset-0 pointer-events-none" quantity={100} />

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
