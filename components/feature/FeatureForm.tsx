"use client";

import { useState } from "react";

import FeaturePreview from "./FeaturePreview";

interface FeatureFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  loading: boolean;
}

export default function FeatureForm({
  initialData,
  onSubmit,
  loading,
}: FeatureFormProps) {

  const [formData, setFormData] = useState({
    sectionTitle:
      initialData?.sectionTitle || "OUR FEATURES",

    title:
      initialData?.title || "",

    image:
      initialData?.image || "",

    logo:
      initialData?.logo || "",

    description:
      initialData?.description || "",

    buttonText:
      initialData?.buttonText || "Read More",

    buttonLink:
      initialData?.buttonLink || "",

    experience:
      initialData?.experience ||
      "20+ Years Experience",

    designCount:
      initialData?.designCount || "500+",

    designLabel:
      initialData?.designLabel || "Designs",

    orderCount:
      initialData?.orderCount || "3000K",

    orderLabel:
      initialData?.orderLabel ||
      "Order Covered",

    features:
      initialData?.features || [
        {
          title: "Creative Custom Design",
          order: 1,
        },
        {
          title: "Globally Awarded",
          order: 2,
        },
        {
          title: "Best Quality With Price",
          order: 3,
        },
      ],

    order:
      initialData?.order || 1,

    isActive:
      initialData?.isActive ?? true,
  });
  const uploadBackground = async (
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

const uploadLogo = async (
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
    logo: result.imageUrl,
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

const handleCheckbox = (
  e: React.ChangeEvent<HTMLInputElement>
) => {
  setFormData((prev) => ({
    ...prev,
    isActive: e.target.checked,
  }));
};

const handleFeatureChange = (
  index: number,
  value: string
) => {
  const updated = [...formData.features];

  updated[index].title = value;

  setFormData((prev) => ({
    ...prev,
    features: updated,
  }));
};

const addFeature = () => {
  setFormData((prev) => ({
    ...prev,
    features: [
      ...prev.features,
      {
        title: "",
        order: prev.features.length + 1,
      },
    ],
  }));
};

const removeFeature = (index: number) => {
  const updated = [...formData.features];

  updated.splice(index, 1);

  setFormData((prev) => ({
    ...prev,
    features: updated,
  }));
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
      className="space-y-6 rounded-2xl bg-white p-8 shadow-lg"
    >

      <h2 className="text-2xl font-bold text-black">
        Feature Information
      </h2>

      {/* Section Title */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Section Title
        </label>

        <input
          type="text"
          name="sectionTitle"
          value={formData.sectionTitle}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Main Title */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Main Title
        </label>

        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Why Choose Us"
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Description */}

      <div>

        <label className="mb-2 block font-medium text-black">
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

      {/* Background Image */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Background Image
        </label>

        <input
          type="file"
          onChange={uploadBackground}
          className="w-full rounded-lg border p-3"
        />

        {formData.image && (
          <img
            src={formData.image}
            alt="Background"
            className="mt-4 h-44 w-full rounded-xl object-cover"
          />
        )}

      </div>

      {/* Company Logo */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Company Logo
        </label>

        <input
          type="file"
          onChange={uploadLogo}
          className="w-full rounded-lg border p-3"
        />

        {formData.logo && (
          <img
            src={formData.logo}
            alt="Logo"
            className="mt-4 h-24 w-24 rounded-xl border bg-white object-contain p-2"
          />
        )}

      </div>
            {/* Experience */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Experience Text
        </label>

        <input
          type="text"
          name="experience"
          value={formData.experience}
          onChange={handleChange}
          placeholder="20+ Years Experience"
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Statistics */}

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block font-medium text-black">
            Design Count
          </label>

          <input
            type="text"
            name="designCount"
            value={formData.designCount}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium text-black">
            Design Label
          </label>

          <input
            type="text"
            name="designLabel"
            value={formData.designLabel}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

      </div>

      <div className="grid grid-cols-2 gap-6">

        <div>

          <label className="mb-2 block font-medium text-black">
            Order Count
          </label>

          <input
            type="text"
            name="orderCount"
            value={formData.orderCount}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

        <div>

          <label className="mb-2 block font-medium text-black">
            Order Label
          </label>

          <input
            type="text"
            name="orderLabel"
            value={formData.orderLabel}
            onChange={handleChange}
            className="w-full rounded-lg border p-3 text-black"
          />

        </div>

      </div>

      {/* Feature List */}

      <div>

        <div className="mb-4 flex items-center justify-between">

          <h3 className="text-lg font-semibold text-black">
            Feature List
          </h3>

          <button
            type="button"
            onClick={addFeature}
            className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-700"
          >
            + Add Feature
          </button>

        </div>

        <div className="space-y-4">

          {formData.features.map(
            (item: any, index: number) => (
              <div
                key={index}
                className="flex gap-3"
              >

                <input
                  type="text"
                  value={item.title}
                  onChange={(e) =>
                    handleFeatureChange(
                      index,
                      e.target.value
                    )
                  }
                  placeholder="Feature Title"
                  className="flex-1 rounded-lg border p-3 text-black"
                />

                <button
                  type="button"
                  onClick={() =>
                    removeFeature(index)
                  }
                  className="rounded-lg bg-red-500 px-4 text-white hover:bg-red-600"
                >
                  ✕
                </button>

              </div>
            )
          )}

        </div>

      </div>
            {/* Display Order */}

      <div>

        <label className="mb-2 block font-medium text-black">
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
          onChange={handleCheckbox}
        />

        <span className="text-black">
          Active
        </span>

      </div>

      {/* Save */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Saving..."
          : initialData
          ? "Update Feature"
          : "Save Feature"}
      </button>

    </form>

    {/* Live Preview */}

    <div>

      <h2 className="mb-6 text-2xl font-bold text-black">
        Live Preview
      </h2>

      <FeaturePreview
        data={formData}
      />

    </div>

  </div>
);
}