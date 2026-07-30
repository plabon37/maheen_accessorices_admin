"use client";

import { useState } from "react";

import HeroTableRow from "./HeroTableRow";
import HeroEmpty from "./HeroEmpty";

interface Hero {
  _id: string;
  backgroundImage: string;
  title: string;
  subTitle: string;
  order: number;
  isActive: boolean;
}

interface HeroTableProps {
  heroes: Hero[];
}

export default function HeroTable({
  heroes,
}: HeroTableProps) {
  const [heroList, setHeroList] = useState(heroes);

  if (heroList.length === 0) {
    return <HeroEmpty />;
  }

  return (
    <div className="overflow-x-auto rounded-xl bg-white shadow">
      <table className="min-w-full">
        <thead className="bg-gray-100">
          <tr className="text-left text-black">
            <th className="px-5 py-4">#</th>
            <th className="px-5 py-4">Image</th>
            <th className="px-5 py-4">Title</th>
            <th className="px-5 py-4">Subtitle</th>
            <th className="px-5 py-4">Order</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Action</th>
          </tr>
        </thead>

        <tbody>
          {heroList.map((hero, index) => (
            <HeroTableRow
              key={hero._id}
              hero={hero}
              index={index}
              onDelete={(id) =>
                setHeroList((prev) =>
                  prev.filter((item) => item._id !== id)
                )
              }
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}