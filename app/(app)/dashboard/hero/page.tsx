"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import HeroTable from "@/components/hero/HeroTable";
import HeroLoading from "@/components/hero/HeroLoading";

export default function HeroPage() {
  const [heroes, setHeroes] = useState([]);
  const [loading, setLoading] = useState(true);

  const getHeroes = async () => {
    const res = await fetch("/api/hero");

    const data = await res.json();

    setHeroes(data);

    setLoading(false);
  };

 useEffect(() => {
  const fetchHeroes = async () => {
    await getHeroes();
  };

  fetchHeroes();
}, []);
  if (loading) {
    return <HeroLoading />;
  }

  return (
    <div className="space-y-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-black">
            Hero Section
          </h1>

          <p className="text-gray-500 mt-1">
            Manage your website hero section.
          </p>

        </div>

        <Link
          href="/dashboard/hero/new"
          className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-medium transition"
        >
          + Add Hero
        </Link>

      </div>

      {/* Table */}

      <HeroTable heroes={heroes} />

    </div>
  );
}