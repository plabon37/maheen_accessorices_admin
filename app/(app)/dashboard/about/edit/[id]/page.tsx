"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

import AboutForm from "@/components/about/AboutForm";

export default function EditAboutPage() {
  const params = useParams();

  const [about, setAbout] = useState<any>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await fetch(`/api/about/${params.id}`);

        if (!res.ok) {
          throw new Error("Failed");
        }

        const data = await res.json();

        setAbout(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, [params.id]);

  if (loading) {
    return (
      <div className="py-20 text-center">
        Loading...
      </div>
    );
  }

  if (!about) {
    return (
      <div className="py-20 text-center">
        About section not found.
      </div>
    );
  }

  return (
    <div className=" text-black space-y-8">

      <div>

        <h1 className="text-3xl font-bold">
          Edit About Section
        </h1>

        <p className="mt-2 text-gray-500">
          Update the About section information.
        </p>

      </div>

      <AboutForm initialData={about} />

    </div>
  );
}