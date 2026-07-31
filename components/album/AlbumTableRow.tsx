"use client";

import Image from "next/image";
import Link from "next/link";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface AlbumTableRowProps {
  album: any;
  index: number;
  getAlbums: () => void;
}

export default function AlbumTableRow({
  album,
  getAlbums,
}: AlbumTableRowProps) {
  const deleteAlbum = async () => {
    const confirmDelete = confirm(
      "Delete this album?"
    );

    if (!confirmDelete) return;

    await fetch(`/api/album/${album._id}`, {
      method: "DELETE",
    });

    getAlbums();
  };

  return (
    <tr className="border-t hover:bg-gray-50">

      {/* Image */}

      <td className="px-6 py-4">

        <Image
          src={album.image}
          alt={album.title}
          width={100}
          height={70}
          className="rounded-lg object-cover"
        />

      </td>

      {/* Title */}

      <td className="px-6 py-4 font-medium text-black">
        {album.title}
      </td>

      {/* Subtitle */}

      <td className="px-6 py-4 text-gray-600">
        {album.subTitle}
      </td>

      {/* Status */}

      <td className="px-6 py-4">

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            album.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {album.isActive
            ? "Active"
            : "Inactive"}
        </span>

      </td>

      {/* Actions */}

      <td className="px-6 py-4">

        <div className="flex justify-center gap-3">

          <Link
            href={`/dashboard/album/${album._id}`}
            className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            <FiEdit2 />
          </Link>

          <button
            onClick={deleteAlbum}
            className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
          >
            <FiTrash2 />
          </button>

        </div>

      </td>

    </tr>
  );
}