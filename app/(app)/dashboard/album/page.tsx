"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import AlbumTable from "@/components/album/AlbumTable";
import AlbumEmpty from "@/components/album/AlbumEmpty";

export default function AlbumPage() {
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  const getAlbums = async () => {
    try {
      const res = await fetch("/api/album");

      const data = await res.json();

      setAlbums(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchAlbums = async () => {
      await getAlbums();
    };

    fetchAlbums();
  }, []);

  if (loading) {
    return (
      <div className="py-20 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-black">
            Photo Albums
          </h1>

          <p className="mt-2 text-gray-500">
            Manage your photo albums.
          </p>

        </div>

        <Link
          href="/dashboard/album/new"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          + Add Album
        </Link>

      </div>

      {albums.length === 0 ? (
        <AlbumEmpty />
      ) : (
        <AlbumTable
          albums={albums}
          getAlbums={getAlbums}
        />
      )}

    </div>
  );
}