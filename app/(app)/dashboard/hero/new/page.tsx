"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import HeroForm from "@/components/hero/HeroForm";

export default function NewHeroPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
const createHero = async (data: any) => {
  setLoading(true);

  const res = await fetch("/api/hero", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  const result = await res.json();

  console.log("Status:", res.status);
  console.log("Result:", result);

  setLoading(false);

  if (!res.ok) {
    alert("Failed to save hero");
    return;
  }

  router.push("/dashboard/hero");
  router.refresh();
};

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">
          Create Hero
        </h1>

        <p className="text-gray-500 mt-1">
          Add a new hero section.
        </p>
      </div>

      <HeroForm
        loading={loading}
        onSubmit={createHero}
      />
    </div>
  );
}