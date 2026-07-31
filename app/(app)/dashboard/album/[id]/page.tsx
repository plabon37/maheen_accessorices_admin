"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import AlbumForm from "@/components/album/AlbumForm";

export default function EditAlbumPage() {
  const { id } = useParams();

  const router = useRouter();

  const [album, setAlbum] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  const [saving, setSaving] = useState(false);

  useEffect(() => {
    const getAlbum = async () => {
      try {
        const res = await fetch(`/api/album/${id}`);

        const data = await res.json();

        setAlbum(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getAlbum();
  }, [id]);

  const updateAlbum = async (data: any) => {
    try {
      setSaving(true);

      const res = await fetch(`/api/album/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      router.push("/dashboard/album");

      router.refresh();
    } catch (error) {
      console.log(error);

      alert("Update Failed");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold">
          Edit Album
        </h1>

        <p className="text-gray-500 mt-2">
          Update album information.
        </p>

      </div>

      <AlbumForm
        initialData={album}
        loading={saving}
        onSubmit={updateAlbum}
      />

    </div>
  );
}