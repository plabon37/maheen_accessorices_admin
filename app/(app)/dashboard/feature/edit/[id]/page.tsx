"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import FeatureForm from "@/components/feature/FeatureForm";

export default function EditFeaturePage() {
  const { id } = useParams();

  const router = useRouter();

  const [feature, setFeature] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeature = async () => {
      try {
        const res = await fetch(`/api/feature/${id}`);

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        setFeature(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeature();
  }, [id]);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);

      const res = await fetch(`/api/feature/${id}`, {
        method: "PUT",
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
      alert("Failed to update feature.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && !feature) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Edit Feature
        </h1>

        <p className="mt-2 text-gray-500">
          Update your feature section.
        </p>

      </div>

      <FeatureForm
        initialData={feature}
        onSubmit={handleSubmit}
        loading={loading}
      />

    </div>
  );
}