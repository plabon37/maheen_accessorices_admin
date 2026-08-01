"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

import PolicyForm from "@/components/policy/PolicyForm";

export default function EditPolicyPage() {
  const { id } = useParams();

  const router = useRouter();

  const [policy, setPolicy] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPolicy = async () => {
      try {
        const res = await fetch(`/api/policy/${id}`);

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        setPolicy(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPolicy();
  }, [id]);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);

      const res = await fetch(`/api/policy/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      router.push("/dashboard/policy");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("Failed to update policy.");
    } finally {
      setLoading(false);
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
    <div className=" text-black space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Edit Policy
        </h1>

        <p className="mt-2 text-gray-500">
          Update your policy section.
        </p>

      </div>

      <PolicyForm
        initialData={policy}
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
}