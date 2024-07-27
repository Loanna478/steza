"use client";

import React, { useEffect, useState, useCallback, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Particles from "@/components/particles";
interface Episode {
  episode: string;
  language: string;
}

interface Serie {
  name: string;
  episodes: Episode[];
  description: string;
}

function SeriePageContent() {
  const router = useRouter();
  const [id, setId] = useState<string | null>(null);
  const searchParams = useSearchParams();

  useEffect(() => {
    const id = searchParams.get('id');
    setId(id);
  }, [searchParams]);

  const [serie, setSerie] = useState<Serie | null>(null);
  const [selectedEpisodeId, setSelectedEpisodeId] = useState('Episode 1 FR');
  const [selectedEpisodeLink, setSelectedEpisodeLink] = useState('');
  const [loadingVideo, setLoadingVideo] = useState(false);
  const [showPreviousButton, setShowPreviousButton] = useState(false);
  const [showNextButton, setShowNextButton] = useState(false);

  const fetchSerieById = useCallback(async (serieId: string) => {
    try {
      const response = await fetch(`http://85.215.137.122:8081/getseriebyid?id=${serieId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSerie(data.serie);
        fetchEpisodeLink('Episode 1', 'FR', data.serie);
      } else {
        console.error('Erreur lors de la récupération de la série:', response.statusText);
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur: ${error.message}`);
      } else {
        console.error("Une erreur inconnue est survenue");
      }
    }
  }, []);

  const fetchEpisodeLink = useCallback(async (episodeId: string, language: string, serieData: Serie) => {
    setLoadingVideo(true);
    try {
      const response = await fetch(`http://85.215.137.122:8081/getepisodelink?episodeid=${episodeId}&seriename=${serieData.name}&language=${language}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setSelectedEpisodeLink(data.link);
      } else {
        console.error('Erreur lors de la récupération du lien de l\'épisode:', response.statusText);
        setSelectedEpisodeLink('');
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(`Erreur: ${error.message}`);
      } else {
        console.error("Une erreur inconnue est survenue");
      }
      setSelectedEpisodeLink('');
    } finally {
      setLoadingVideo(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchSerieById(id);
    }
  }, [id, fetchSerieById]);

  useEffect(() => {
    if (selectedEpisodeId && serie) {
      const parts = selectedEpisodeId.split(' ');
      const episodeId = parts.slice(0, -1).join(' ');
      const language = parts[parts.length - 1];
      fetchEpisodeLink(episodeId, language, serie);
    }
  }, [selectedEpisodeId, serie, fetchEpisodeLink]);

  useEffect(() => {
    if (serie && selectedEpisodeId) {
      const index = serie.episodes.findIndex((ep) => `${ep.episode} ${ep.language}` === selectedEpisodeId);
      setShowPreviousButton(index > 0);
      setShowNextButton(index < serie.episodes.length - 1);
    }
  }, [selectedEpisodeId, serie]);

  const handleSelectEpisodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedId = event.target.value;
    setSelectedEpisodeId(selectedId);
  };

  if (!serie) {
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
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{serie.name}</h1>
          <p className="text-lg mb-6">{serie.description}</p>
        </div>
      </main>

      <div className="text-center">
        <select
          className="bg-slate-800 text-white px-3 py-2 rounded mb-4"
          value={selectedEpisodeId}
          onChange={handleSelectEpisodeChange}
        >
          {serie.episodes.map((ep) => (
            <option key={`${ep.episode} ${ep.language}`} value={`${ep.episode} ${ep.language}`}>
              {ep.episode} {ep.language}
            </option>
          ))}
        </select>
        
        <center>
        {loadingVideo ? (
          <p>Chargement du lien vidéo...</p>
        ) : selectedEpisodeLink ? (
          <iframe
            title={selectedEpisodeId}
            width="900"
            height="430"
            src={selectedEpisodeLink}
            frameBorder="0"
            allowFullScreen
            className="my-4"
          />
        ) : (
          <p>Le lien vidéo n est pas disponible pour cet épisode.</p>
        )}
        </center>

        <div className="flex justify-center items-center mb-4 space-x-2">
          {showPreviousButton && (
            <button
              className="bg-slate-800 text-white px-3 py-2 rounded mb-4"
              onClick={() => {
                const index = serie.episodes.findIndex((ep) => `${ep.episode} ${ep.language}` === selectedEpisodeId);
                if (index > 0) {
                  const previousEpisode = serie.episodes[index - 1];
                  setSelectedEpisodeId(`${previousEpisode.episode} ${previousEpisode.language}`);
                }
              }}
            >
              Episode précédent
            </button>
          )}
          {showNextButton && (
            <button
              className="bg-slate-800 text-white px-3 py-2 rounded mb-4"
              onClick={() => {
                const index = serie.episodes.findIndex((ep) => `${ep.episode} ${ep.language}` === selectedEpisodeId);
                if (index < serie.episodes.length - 1) {
                  const nextEpisode = serie.episodes[index + 1];
                  setSelectedEpisodeId(`${nextEpisode.episode} ${nextEpisode.language}`);
                }
              }}
            >
              Episode suivant
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default function SeriePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <SeriePageContent />
    </Suspense>
  );
}
