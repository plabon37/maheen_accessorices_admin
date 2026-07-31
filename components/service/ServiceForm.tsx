"use client";

import { useState } from "react";

import ServicePreview from "./ServicePreview";

interface ServiceFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  loading: boolean;
}

export default function ServiceForm({
  initialData,
  onSubmit,
  loading,
}: ServiceFormProps) {
  const [formData, setFormData] = useState({
    image: initialData?.image || "",

    number: initialData?.number || "01",

    title: initialData?.title || "",

    description: initialData?.description || "",

    buttonText:
      initialData?.buttonText || "Discover Work",

    buttonLink:
      initialData?.buttonLink || "",

    order: initialData?.order || 1,

    isActive:
      initialData?.isActive ?? true,
  });
  const uploadImage = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const body = new FormData();

  body.append("file", file);

  const res = await fetch("/api/upload", {
    method: "POST",
    body,
  });

  const result = await res.json();

  setFormData((prev) => ({
    ...prev,
    image: result.imageUrl,
  }));
};

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};

const handleSubmit = (
  e: React.FormEvent
) => {
  e.preventDefault();

  onSubmit(formData);
};
return (
  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">

    {/* ================= Left ================= */}

    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-8 shadow-md"
    >

      <h2 className="text-2xl font-bold text-black">
        Service Information
      </h2>

      {/* Image */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Service Image
        </label>

        <input
          type="file"
          onChange={uploadImage}
          className="w-full rounded-lg border p-3 text-black"
        />

        {formData.image ? (

          <img
            src={formData.image}
            alt="Preview"
            className="mt-4 h-52 w-full rounded-xl border object-cover"
          />

        ) : (

          <div className="mt-4 flex h-52 items-center justify-center rounded-xl border-2 border-dashed text-gray-500">
            Upload Service Image
          </div>

        )}

      </div>

      {/* Number */}

      <div>

        <label className="mb-2 block text-black">
          Number
        </label>

        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Title */}

      <div>

        <label className="mb-2 block text-black">
          Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block text-black">
          Description
        </label>

        <textarea
          rows={5}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>
            {/* Button Information */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-black">
            Button Text
          </label>

          <input
            type="text"
            name="buttonText"
            value={formData.buttonText}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

        <div>

          <label className="mb-2 block text-black">
            Button Link
          </label>

          <input
            type="text"
            name="buttonLink"
            value={formData.buttonLink}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

      </div>

      {/* Order */}

      <div>

        <label className="mb-2 block text-black">
          Display Order
        </label>

        <input
          type="number"
          name="order"
          value={formData.order}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Active */}

      <div className="flex items-center gap-3">

        <input
          type="checkbox"
          checked={formData.isActive}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              isActive: e.target.checked,
            }))
          }
        />

        <span className="font-medium text-black">
          Active
        </span>

      </div>

      {/* Save Button */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? "Saving..." : "Save Service"}
      </button>

    </form>

    {/* ================= Right ================= */}

    <div className="sticky top-6">

      <ServicePreview
        service={formData}
      />

    </div>

  </div>
);
}