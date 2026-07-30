"use client";

import { useState } from "react";
import HeroPreview from "./HeroPreview";

interface HeroFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  loading: boolean;
}

export default function HeroForm({
  initialData,
  onSubmit,
  loading,
}: HeroFormProps) {
  const [formData, setFormData] = useState({
    backgroundImage: initialData?.backgroundImage || "",

    subTitle: initialData?.subTitle || "",

    title: initialData?.title || "",

    description: initialData?.description || "",

    primaryButtonText:
      initialData?.primaryButtonText || "",

    primaryButtonLink:
      initialData?.primaryButtonLink || "",

    secondaryButtonText:
      initialData?.secondaryButtonText || "",

    secondaryButtonLink:
      initialData?.secondaryButtonLink || "",

    facebook: initialData?.facebook || "",

    instagram: initialData?.instagram || "",

    linkedin: initialData?.linkedin || "",

    order: initialData?.order || 1,

    isActive: initialData?.isActive ?? true,
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
    backgroundImage: result.imageUrl,
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

    {/* ================= LEFT : FORM ================= */}

    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-8 shadow-md"
    >
      <h2 className="text-2xl font-bold text-black">
        Hero Information
      </h2>

      {/* Background Image */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Background Image
        </label>

        <input
          type="file"
          onChange={uploadImage}
          className="w-full rounded-lg border p-3 text-black"
        />

        {formData.backgroundImage ? (

          <img
            src={formData.backgroundImage}
            alt="Preview"
            className="mt-4 h-48 w-full rounded-xl border object-cover"
          />

        ) : (

          <div className="mt-4 flex h-48 items-center justify-center rounded-xl border-2 border-dashed text-gray-500">
            Upload Hero Image
          </div>

        )}

      </div>

      {/* Subtitle & Title */}

      <div className="grid gap-6 md:grid-cols-2">

        <div>

          <label className="mb-2 block text-black">
            Subtitle
          </label>

          <input
            type="text"
            name="subTitle"
            value={formData.subTitle}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

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

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block text-black">
          Description
        </label>

        <textarea
          rows={4}
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Buttons */}

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="text"
          name="primaryButtonText"
          placeholder="Primary Button Text"
          value={formData.primaryButtonText}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

        <input
          type="text"
          name="primaryButtonLink"
          placeholder="Primary Button Link"
          value={formData.primaryButtonLink}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

        <input
          type="text"
          name="secondaryButtonText"
          placeholder="Secondary Button Text"
          value={formData.secondaryButtonText}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

        <input
          type="text"
          name="secondaryButtonLink"
          placeholder="Secondary Button Link"
          value={formData.secondaryButtonLink}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

      </div>

      {/* Social Links */}

      <div className="grid gap-6 md:grid-cols-2">

        <input
          type="text"
          name="facebook"
          placeholder="Facebook Link"
          value={formData.facebook}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

        <input
          type="text"
          name="instagram"
          placeholder="Instagram Link"
          value={formData.instagram}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn Link"
          value={formData.linkedin}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
        />

        <input
          type="number"
          name="order"
          value={formData.order}
          onChange={handleChange}
          className="rounded-lg border p-3 text-black"
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

        <span className="text-black font-medium">
          Active
        </span>

      </div>

      {/* Save Button */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-blue-700 disabled:cursor-not-allowed disabled:bg-gray-400"
      >
        {loading ? "Saving..." : "Save Hero"}
      </button>

    </form>

    {/* ================= RIGHT : LIVE PREVIEW ================= */}

    <div className="sticky top-6">

      <HeroPreview hero={formData} />

    </div>

  </div>
);
}