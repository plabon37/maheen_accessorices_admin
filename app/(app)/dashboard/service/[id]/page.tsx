"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import ServiceForm from "@/components/service/ServiceForm";

export default function EditServicePage() {
  const router = useRouter();
  const params = useParams();

  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [service, setService] = useState<any>(null);

  const getService = async () => {
    try {
      const res = await fetch(
        `/api/service/${params.id}`
      );

      const data = await res.json();

      setService(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchService = async () => {
      await getService();
    };

    fetchService();
  }, []);

  const updateService = async (data: any) => {
    try {
      setSaving(true);

      const res = await fetch(
        `/api/service/${params.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!res.ok) {
        throw new Error("Update failed");
      }

      router.push("/dashboard/service");

      router.refresh();
    } catch (error) {
      console.log(error);

      alert("Failed to update service");
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Edit Service
        </h1>

        <p className="mt-2 text-gray-500">
          Update your service section.
        </p>

      </div>

      <ServiceForm
        initialData={service}
        loading={saving}
        onSubmit={updateService}
      />

    </div>
  );
}