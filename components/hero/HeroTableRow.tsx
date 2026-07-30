"use client";

import Image from "next/image";
import Link from "next/link";

interface Hero {
  _id: string;
  backgroundImage: string;
  title: string;
  subTitle: string;
  order: number;
  isActive: boolean;
}

interface HeroRowProps {
  hero: Hero;
  index: number;
  onDelete: (id: string) => void;
}

export default function HeroTableRow({
  hero,
  index,
  onDelete,
}: HeroRowProps) {
  const deleteHero = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this Hero?"
    );

    if (!confirmDelete) return;

    await fetch(`/api/hero/${hero._id}`, {
      method: "DELETE",
    });

    onDelete(hero._id);
  };

  return (
    <tr className="border-t">
      <td className="px-5 py-4 text-black">
        {index + 1}
      </td>

      <td className="px-5 py-4">
        <Image
          src={hero.backgroundImage}
          alt={hero.title}
          width={80}
          height={50}
          className="rounded object-cover"
        />
      </td>

      <td className="px-5 py-4 text-black">
        {hero.title}
      </td>

      <td className="px-5 py-4 text-black">
        {hero.subTitle}
      </td>

      <td className="px-5 py-4 text-black">
        {hero.order}
      </td>

      <td className="px-5 py-4">
        <span
          className={`px-3 py-1 rounded-full text-sm ${
            hero.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {hero.isActive ? "Active" : "Inactive"}
        </span>
      </td>

      <td className="px-5 py-4 flex gap-2">
        <Link
          href={`/dashboard/hero/${hero._id}`}
          className="px-3 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
        >
          Edit
        </Link>

        <button
          onClick={deleteHero}
          className="px-3 py-2 rounded bg-red-600 text-white hover:bg-red-700"
        >
          Delete
        </button>
      </td>
    </tr>
  );
}