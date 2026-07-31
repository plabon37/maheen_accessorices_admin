"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import AlbumForm from "@/components/album/AlbumForm";

export default function NewAlbumPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const createAlbum = async (data: any) => {
    try {
      setLoading(true);

      const res = await fetch("/api/album", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create album");
      }

      router.push("/dashboard/album");

      router.refresh();
    } catch (error) {
      console.log(error);

      alert("Failed to create album");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Create Album
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new photo album.
        </p>

      </div>

      <AlbumForm
        loading={loading}
        onSubmit={createAlbum}
      />

    </div>
  );
}