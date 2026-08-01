"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import PolicyForm from "@/components/policy/PolicyForm";

export default function NewPolicyPage() {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (data: any) => {
    try {
      setLoading(true);

      const res = await fetch("/api/policy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to create policy");
      }

      router.push("/dashboard/policy");
      router.refresh();
    } catch (error) {
      console.log(error);
      alert("Failed to create policy.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className=" text-black space-y-8">

      <div>

        <h1 className="text-3xl font-bold text-black">
          Create Policy
        </h1>

        <p className="mt-2 text-gray-500">
          Add a new policy section.
        </p>

      </div>

      <PolicyForm
        loading={loading}
        onSubmit={handleSubmit}
      />

    </div>
  );
}