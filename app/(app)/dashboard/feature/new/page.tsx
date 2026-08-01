"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import FeatureForm from "@/components/feature/FeatureForm";

export default function NewFeaturePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);

      const res = await fetch("/api/feature", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      router.push("/dashboard/feature");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("Failed to create feature.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Create Feature
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new feature section.
        </p>

      </div>

      <FeatureForm
        onSubmit={handleSubmit}
        loading={loading}
      />

    </div>
  );
}