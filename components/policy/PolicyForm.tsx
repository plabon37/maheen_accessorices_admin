"use client";

import { useState } from "react";

import PolicyPreview from "./PolicyPreview";

interface PolicyFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  loading: boolean;
}

export default function PolicyForm({
  initialData,
  onSubmit,
  loading,
}: PolicyFormProps) {

  const [formData, setFormData] = useState({

    sectionTitle:
      initialData?.sectionTitle || "POLICIES",

    title:
      initialData?.title || "Our Smart",

    italicTitle:
      initialData?.italicTitle || "Policies",

    rightDescription:
      initialData?.rightDescription || "",

    cards:
      initialData?.cards || [

        {
          icon: "",
          number: "01",
          title: "Occupational Health and Safety Policy",
          order: 1,
          isActive: true,
        },

        {
          icon: "",
          number: "02",
          title: "Product Safety and Quality Policy",
          order: 2,
          isActive: true,
        },

      ],

    order:
      initialData?.order || 1,

    isActive:
      initialData?.isActive ?? true,

  });
  const uploadIcon = async (
  e: React.ChangeEvent<HTMLInputElement>,
  index: number
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

  const updatedCards = [...formData.cards];

  updatedCards[index].icon = result.imageUrl;

  setFormData((prev) => ({
    ...prev,
    cards: updatedCards,
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

const handleCardChange = (
  index: number,
  field: "number" | "title",
  value: string
) => {
  const updatedCards = [...formData.cards];

  updatedCards[index] = {
    ...updatedCards[index],
    [field]: value,
  };

  setFormData((prev) => ({
    ...prev,
    cards: updatedCards,
  }));
};

const addCard = () => {
  setFormData((prev) => ({
    ...prev,
    cards: [
      ...prev.cards,
      {
        icon: "",
        number: String(prev.cards.length + 1).padStart(2, "0"),
        title: "",
        order: prev.cards.length + 1,
        isActive: true,
      },
    ],
  }));
};

const removeCard = (index: number) => {
  const updatedCards = [...formData.cards];

  updatedCards.splice(index, 1);

  setFormData((prev) => ({
    ...prev,
    cards: updatedCards,
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
        Policy Information
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
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Italic Title */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Italic Title
        </label>

        <input
          type="text"
          name="italicTitle"
          value={formData.italicTitle}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Right Description */}

      <div>

        <label className="mb-2 block font-medium text-black">
          Right Description
        </label>

        <textarea
          rows={5}
          name="rightDescription"
          value={formData.rightDescription}
          onChange={handleChange}
          className="w-full rounded-lg border p-3 text-black"
        />

      </div>

      {/* Policy Cards */}

      <div>

        <div className="mb-5 flex items-center justify-between">

          <h3 className="text-lg font-semibold text-black">
            Policy Cards
          </h3>

          <button
            type="button"
            onClick={addCard}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            + Add Card
          </button>

        </div>

        <div className="space-y-6">

          {formData.cards.map(
  (
    card: {
      icon: string;
      number: string;
      title: string;
      order: number;
      isActive: boolean;
    },
    index: number
  ) => (

            <div
              key={index}
              className="rounded-xl border p-5"
            >

              <div className="mb-4">

                <label className="mb-2 block font-medium">
                  Icon
                </label>

                <input
                  type="file"
                  onChange={(e) =>
                    uploadIcon(e, index)
                  }
                  className="w-full rounded-lg border p-3"
                />

                {card.icon && (

                  <img
                    src={card.icon}
                    alt=""
                    className="mt-3 h-20 w-20 rounded-lg object-contain border p-2"
                  />

                )}

              </div>

              <div className="mb-4">

                <label className="mb-2 block font-medium">
                  Number
                </label>

                <input
                  type="text"
                  value={card.number}
                  onChange={(e) =>
                    handleCardChange(
                      index,
                      "number",
                      e.target.value
                    )
                  }
                  className="w-full rounded-lg border p-3 text-black"
                />

              </div>

              <div>

                <label className="mb-2 block font-medium">
                  Title
                </label>

                <input
                  type="text"
                  value={card.title}
                  onChange={(e) =>
                    handleCardChange(
                      index,
                      "title",
                      e.target.value
                    )
                  }
                  className="w-full rounded-lg border p-3 text-black"
                />

              </div>

              <button
                type="button"
                onClick={() =>
                  removeCard(index)
                }
                className="mt-5 rounded-lg bg-red-500 px-4 py-2 text-white hover:bg-red-600"
              >
                Remove Card
              </button>

            </div>

          ))}

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

      {/* Save Button */}

      <button
        type="submit"
        disabled={loading}
        className="w-full rounded-lg bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {loading
          ? "Saving..."
          : initialData
          ? "Update Policy"
          : "Save Policy"}
      </button>

    </form>

    {/* Live Preview */}

    <div>

      <h2 className="mb-6 text-2xl font-bold text-black">
        Live Preview
      </h2>

      <PolicyPreview
        data={formData}
      />

    </div>

  </div>
);
}