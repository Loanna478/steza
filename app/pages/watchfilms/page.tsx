"use client";

import React, { useEffect, useState, useCallback, Suspense, ReactNode } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Particles from "@/components/particles";

interface Film {
  filmname: ReactNode;
  iframe: string | undefined;
  title: string;
  description: string;
  videoLink: string;
}

function FilmPageContent() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    setId(id);
  }, [searchParams]);

  const [film, setFilm] = useState<Film | null>(null);
  const [loadingVideo, setLoadingVideo] = useState(false);

  const fetchFilmById = useCallback(async (filmId: string) => {
    setLoadingVideo(true);
    try {
      const response = await fetch(`http://85.215.137.122:8081/getfilmbyid?id=${filmId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setFilm(data.film);
      } else {
        console.error('Erreur lors de la récupération du film:', response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur: ${error.message}`);
      } else {
        console.error("Une erreur inconnue est survenue");
      }
    } finally {
      setLoadingVideo(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchFilmById(id);
    }
  }, [id, fetchFilmById]);

  const reportIssue = async () => {
    if (id) {
      try {
        const response = await fetch('http://85.215.137.122:8081/reportIssue', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filmId: id, issue: 'Video not working' }),
        });

        if (response.ok) {
          alert('Issue reported successfully.');
        } else {
          alert('Failed to report the issue.');
        }
      } catch (error) {
        console.error('Error reporting issue:', error);
        alert('An error occurred while reporting the issue.');
      }
    }
  };

  if (!film) {
    return <div className="text-center text-gray-500">Loading...</div>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md text-white z-50 py-4 px-6 md:px-12 flex justify-between items-center rounded-xl w-full md:w-3/4 max-w-5xl">
        <Link href="/" className="text-xl font-bold">MSTREAM</Link>
        <div className="hidden md:flex space-x-6 items-center">
          <Link href="/pages/series" className="hover:text-blue-400">Serie</Link>
          <Link href="/pages/films" className="hover:text-blue-400">Films</Link>
        </div>
      </nav>
      <Particles className="absolute inset-0 pointer-events-none" quantity={100} />

      <main className="flex-grow pt-24">
        <div className="text-center mx-auto max-w-4xl p-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{film.filmname}</h1>
          <p className="text-lg mb-6">{film.description}</p>
        </div>
      </main>

      <div className="text-center">
        <center>
          {loadingVideo ? (
            <p>Chargement du lien vidéo...</p>
          ) : film.iframe ? (
            <iframe
              title={film.title}
              width="900"
              height="430"
              src={film.iframe}
              frameBorder="0"
              allowFullScreen
              className="my-4"
            />
          ) : (
            <p>Le lien vidéo n est pas disponible pour ce film.</p>
          )}
        </center>
        <button 
          onClick={reportIssue} 
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700"
        >
          Signaler un problème
        </button>
      </div>
    </div>
  );
}

export default function FilmPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <FilmPageContent />
    </Suspense>
  );
}
