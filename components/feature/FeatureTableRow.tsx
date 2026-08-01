"use client";

import Image from "next/image";
import Link from "next/link";

import { Pencil, Trash2 } from "lucide-react";

interface FeatureTableRowProps {
  feature: any;
}

export default function FeatureTableRow({
  feature,
}: FeatureTableRowProps) {
  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this feature?"
    );

    if (!confirmDelete) return;

    try {
      const res = await fetch(
        `/api/feature/${feature._id}`,
        {
          method: "DELETE",
        }
      );

      if (!res.ok) {
        throw new Error("Delete failed");
      }

      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Failed to delete feature.");
    }
  };

  return (
    <tr className="border-t">

      {/* Background Image */}

      <td className="px-6 py-5">

        <div className="relative h-20 w-28 overflow-hidden rounded-lg">

          <Image
            src={feature.image}
            alt={feature.title}
            fill
            className="object-cover"
          />

        </div>

      </td>

      {/* Logo */}

      <td className="px-6 py-5">

        <div className="relative h-14 w-14 overflow-hidden rounded-lg border bg-white">

          <Image
            src={feature.logo}
            alt="Logo"
            fill
            className="object-contain p-2"
          />

        </div>

      </td>

      {/* Title */}

      <td className="px-6 py-5">

        <h3 className="font-semibold text-gray-900">
          {feature.title}
        </h3>

        <p className="text-sm text-gray-500">
          {feature.sectionTitle}
        </p>

      </td>

      {/* Status */}

      <td className="px-6 py-5">

        {feature.isActive ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
            Active
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs font-semibold text-red-700">
            Inactive
          </span>
        )}

      </td>

      {/* Order */}

      <td className="px-6 py-5 font-medium">
        {feature.order}
      </td>

      {/* Actions */}

      <td className="px-6 py-5">

        <div className="flex items-center justify-center gap-3">

          <Link
            href={`/dashboard/feature/edit/${feature._id}`}
            className="rounded-lg bg-blue-100 p-2 text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            <Pencil size={18} />
          </Link>

          <button
            onClick={handleDelete}
            className="rounded-lg bg-red-100 p-2 text-red-600 transition hover:bg-red-600 hover:text-white"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}