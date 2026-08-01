"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import FeatureTable from "@/components/feature/FeatureTable";
import FeatureEmpty from "@/components/feature/FeatureEmpty";

export default function FeaturePage() {
  const [features, setFeatures] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getFeatures = async () => {
      try {
        const res = await fetch("/api/feature");

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        setFeatures(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getFeatures();
  }, []);

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
            Features
          </h1>

          <p className="mt-2 text-gray-500">
            Manage Feature Section
          </p>

        </div>

        <Link
          href="/dashboard/feature/new"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Add Feature
        </Link>

      </div>

      {features.length === 0 ? (
        <FeatureEmpty />
      ) : (
        <FeatureTable
          features={features}
        />
      )}

    </div>
  );
}