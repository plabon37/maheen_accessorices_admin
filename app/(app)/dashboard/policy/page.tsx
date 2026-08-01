"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import PolicyTable from "@/components/policy/PolicyTable";
import PolicyEmpty from "@/components/policy/PolicyEmpty";

export default function PolicyPage() {
  const [policies, setPolicies] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPolicies = async () => {
      try {
        const res = await fetch("/api/policy");

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        setPolicies(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    getPolicies();
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
            Policies
          </h1>

          <p className="mt-2 text-gray-500">
            Manage Policy Section
          </p>

        </div>

        <Link
          href="/dashboard/policy/new"
          className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700"
        >
          + Add Policy
        </Link>

      </div>

      {policies.length === 0 ? (
        <PolicyEmpty />
      ) : (
        <PolicyTable
          policies={policies}
        />
      )}

    </div>
  );
}