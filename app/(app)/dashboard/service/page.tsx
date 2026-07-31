"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

import ServiceTable from "@/components/service/ServiceTable";
import ServiceEmpty from "@/components/service/ServiceEmpty";

export default function ServicePage() {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  const getServices = async () => {
    try {
      const res = await fetch("/api/service");

      const data = await res.json();

      setServices(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchServices = async () => {
      await getServices();
    };

    fetchServices();
  }, []);

  if (loading) {
    return (
      <div className="p-10 text-center text-gray-500">
        Loading...
      </div>
    );
  }

  return (
    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-bold text-black">
            Service Section
          </h1>

          <p className="mt-1 text-gray-500">
            Manage your website services.
          </p>

        </div>

        <Link
          href="/dashboard/service/new"
          className="rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700"
        >
          + Add Service
        </Link>

      </div>

      {services.length === 0 ? (
        <ServiceEmpty />
      ) : (
        <ServiceTable
          services={services}
          getServices={getServices}
        />
      )}

    </div>
  );
}