"use client";

import { useState } from "react";

import AlbumPreview from "./AlbumPreview";

interface AlbumFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  loading: boolean;
}

export default function AlbumForm({
  initialData,
  onSubmit,
  loading,
}: AlbumFormProps) {
  const [formData, setFormData] = useState({
    image: initialData?.image || "",

    title: initialData?.title || "",

    subTitle: initialData?.subTitle || "",

    description:
      initialData?.description || "",

    buttonText:
      initialData?.buttonText || "View Project",

    buttonLink:
      initialData?.buttonLink || "",

    order:
      initialData?.order || 1,

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

  setFormData({
    ...formData,
    image: result.imageUrl,
  });
};

const handleChange = (
  e: React.ChangeEvent<
    HTMLInputElement | HTMLTextAreaElement
  >
) => {
  const { name, value } = e.target;

  setFormData({
    ...formData,
    [name]: value,
  });
};

const handleSubmit = (
  e: React.FormEvent
) => {
  e.preventDefault();

  onSubmit(formData);
};
return (
  <div className="grid grid-cols-1 gap-8 xl:grid-cols-2">

    {/* Form */}

    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-xl bg-white p-8 shadow"
    >

      <h2 className="text-2xl font-bold text-black">
        Album Information
      </h2>

      {/* Image */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Album Image
        </label>

        <input
          type="file"
          onChange={uploadImage}
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

      {/* Subtitle */}

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
            {/* Button Text */}

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

      {/* Button Link */}

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
            setFormData({
              ...formData,
              isActive: e.target.checked,
            })
          }
        />

        <span className="text-black">
          Active
        </span>

      </div>

      {/* Save */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
      >
        {loading ? "Saving..." : "Save Album"}
      </button>

    </form>
        {/* Live Preview */}

    <div>

      <h2 className="mb-6 text-2xl font-bold text-black">
        Live Preview
      </h2>

      <AlbumPreview
        data={formData}
      />

    </div>

  </div>
);
}