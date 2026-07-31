"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import ServiceForm from "@/components/service/ServiceForm";

export default function NewServicePage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const createService = async (data: any) => {
    try {
      setLoading(true);

      const res = await fetch("/api/service", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create service");
      }

      router.push("/dashboard/service");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("Failed to create service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Create Service
        </h1>

        <p className="mt-1 text-gray-500">
          Add a new service section.
        </p>

      </div>

      <ServiceForm
        loading={loading}
        onSubmit={createService}
      />

    </div>
  );
}