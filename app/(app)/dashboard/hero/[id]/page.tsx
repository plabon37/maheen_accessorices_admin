"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import HeroForm from "@/components/hero/HeroForm";
import HeroLoading from "@/components/hero/HeroLoading";

export default function EditHeroPage() {
  const { id } = useParams();

  const router = useRouter();

  const [hero, setHero] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const getHero = async () => {
    const res = await fetch(`/api/hero/${id}`);

    const data = await res.json();

    setHero(data);

    setLoading(false);
  };

  useEffect(() => {
    const fetchHero = async () => {
      await getHero();
    };

    fetchHero();
  }, []);

  const updateHero = async (data: any) => {
    setSaving(true);

    await fetch(`/api/hero/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setSaving(false);

    router.push("/dashboard/hero");

    router.refresh();
  };

  if (loading) {
    return <HeroLoading />;
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold text-black">
          Edit Hero
        </h1>

        <p className="text-gray-500 mt-1">
          Update hero information.
        </p>
      </div>

      <HeroForm
        initialData={hero}
        loading={saving}
        onSubmit={updateHero}
      />
    </div>
  );
}