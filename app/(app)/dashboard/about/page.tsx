"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";

import AboutTable from "@/components/about/AboutTable";
import AboutEmpty from "@/components/about/AboutEmpty";

export default function AboutPage() {
  const [abouts, setAbouts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const getAbouts = useCallback(async () => {
    try {
      const res = await fetch("/api/about");

      if (!res.ok) {
        throw new Error("Failed to fetch about data");
      }

      const data = await res.json();

      setAbouts(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
  const loadData = async () => {
    await getAbouts();
  };

  loadData();
}, [getAbouts]);
  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-black">
            About Section
          </h1>

          <p className="mt-2 text-gray-500">
            Manage About Section
          </p>
        </div>

        <Link
          href="/dashboard/about/new"
          className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
        >
          + Add About
        </Link>
      </div>

      {abouts.length === 0 ? (
        <AboutEmpty />
      ) : (
        <AboutTable
          abouts={abouts}
        />
      )}
    </div>
  );
}