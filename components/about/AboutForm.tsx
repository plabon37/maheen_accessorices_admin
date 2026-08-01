"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import AboutPreview from "./AboutPreview";

interface AboutFormProps {
  initialData?: any;
}

export default function AboutForm({
  initialData,
}: AboutFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    titleTop: initialData?.titleTop || "",
    titleItalic: initialData?.titleItalic || "",
    titleBottom: initialData?.titleBottom || "",
    sectionTitle: initialData?.sectionTitle || "",
    shortDescription:
      initialData?.shortDescription || "",
    description:
      initialData?.description || "",
    image: initialData?.image || "",
    exploreButtonText:
      initialData?.exploreButtonText ||
      "Explore Now",
    exploreButtonLink:
      initialData?.exploreButtonLink || "#",
    circleButtonText:
      initialData?.circleButtonText ||
      "Explore Us",
    circleButtonLink:
      initialData?.circleButtonLink || "#",
    order: initialData?.order || 1,
    isActive:
      initialData?.isActive ?? true,
  });
    const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value, type } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]:
        type === "checkbox"
          ? (e.target as HTMLInputElement).checked
          : value,
    }));
  };

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const method = initialData ? "PUT" : "POST";

      const url = initialData
        ? `/api/about/${initialData._id}`
        : "/api/about";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        throw new Error("Failed");
      }

      router.push("/dashboard/about");

      router.refresh();
    } catch (error) {
      console.log(error);

      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };
  const uploadImage = async (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  const file = e.target.files?.[0];

  if (!file) return;

  const body = new FormData();

  body.append("file", file);

  try {
    const res = await fetch("/api/upload", {
      method: "POST",
      body,
    });

      if (!res.ok) {
      throw new Error("Upload failed");
    }

    const result = await res.json();

    setFormData((prev) => ({
      ...prev,
      image: result.imageUrl,
    }));
  } catch (error) {
    console.error(error);
    alert("Image upload failed.");
  }
};
    return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-10 lg:grid-cols-2"
    >
      {/* Left */}

      <div className="space-y-6 rounded-2xl border text-black border-gray-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          About Information
        </h2>

        {/* Title Top */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Title Top
          </label>

          <input
            type="text"
            name="titleTop"
            value={formData.titleTop}
            onChange={handleChange}
            placeholder="WE ARE THE BEST"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            required
          />

        </div>

        {/* Title Italic */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Title Italic
          </label>

          <input
            type="text"
            name="titleItalic"
            value={formData.titleItalic}
            onChange={handleChange}
            placeholder="Garments"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            required
          />

        </div>

        {/* Title Bottom */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Title Bottom
          </label>

          <input
            type="text"
            name="titleBottom"
            value={formData.titleBottom}
            onChange={handleChange}
            placeholder="Accessories"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            required
          />

        </div>

        {/* Section Title */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Section Title
          </label>

          <input
            type="text"
            name="sectionTitle"
            value={formData.sectionTitle}
            onChange={handleChange}
            placeholder="About Us"
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            required
          />

        </div>
                {/* Short Description */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Short Description
          </label>

          <textarea
            name="shortDescription"
            value={formData.shortDescription}
            onChange={handleChange}
            rows={3}
            placeholder="Enter short description..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

        </div>

        {/* Description */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Description
          </label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows={6}
            placeholder="Enter full description..."
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            required
          />

        </div>

       {/* Image Upload */}

{/* About Image */}

<div>

  <label className="mb-2 block text-sm font-semibold">
    About Image
  </label>

  <input
    type="file"
    accept="image/*"
    onChange={uploadImage}
    className="w-full rounded-xl border border-gray-300 p-3"
  />

</div>

        {/* Order & Status */}

        <div className="grid grid-cols-2 gap-6">

          <div>

            <label className="mb-2 block text-sm font-semibold">
              Order
            </label>

            <input
              type="number"
              name="order"
              value={formData.order}
              onChange={handleChange}
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
            />

          </div>

          <div className="flex items-end">

            <label className="flex items-center gap-3">

              <input
                type="checkbox"
                name="isActive"
                checked={formData.isActive}
                onChange={handleChange}
                className="h-5 w-5"
              />

              <span className="font-medium">
                Active
              </span>

            </label>

          </div>

        </div>

      </div>
            {/* Right */}

      <div className="space-y-6 rounded-2xl border text-black border-gray-200 bg-white p-8 shadow-sm">

        <h2 className="text-2xl font-bold">
          Buttons & Preview
        </h2>

        {/* Explore Button Text */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Explore Button Text
          </label>

          <input
            type="text"
            name="exploreButtonText"
            value={formData.exploreButtonText}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

        </div>

        {/* Explore Button Link */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Explore Button Link
          </label>

          <input
            type="text"
            name="exploreButtonLink"
            value={formData.exploreButtonLink}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

        </div>

        {/* Circle Button Text */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Circle Button Text
          </label>

          <input
            type="text"
            name="circleButtonText"
            value={formData.circleButtonText}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

        </div>

        {/* Circle Button Link */}

        <div>

          <label className="mb-2 block text-sm font-semibold">
            Circle Button Link
          </label>

          <input
            type="text"
            name="circleButtonLink"
            value={formData.circleButtonLink}
            onChange={handleChange}
            className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600"
          />

        </div>

          {/* Image Preview */}
         <AboutPreview
             data={formData}
/>

        {/* Save Button */}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-blue-600 py-4 text-lg font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading
            ? "Saving..."
            : initialData
            ? "Update About"
            : "Create About"}
        </button>

      </div>

    </form>
  );
}