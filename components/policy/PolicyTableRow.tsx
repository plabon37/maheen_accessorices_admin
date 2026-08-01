"use client";

import Link from "next/link";

import {
  Pencil,
  Trash2,
} from "lucide-react";

interface Props {
  policy: any;
}

export default function PolicyTableRow({
  policy,
}: Props) {
  const handleDelete = async () => {
    if (
      !confirm(
        "Delete this policy?"
      )
    )
      return;

    await fetch(
      `/api/policy/${policy._id}`,
      {
        method: "DELETE",
      }
    );

    window.location.reload();
  };

  return (
    <tr className="border-t">

      <td className="px-6 py-5">

        <h3 className="font-semibold">
          {policy.title}
        </h3>

        <p className="text-sm text-gray-500">
          {policy.sectionTitle}
        </p>

      </td>

      <td className="px-6 py-5">
        {policy.cards.length}
      </td>

      <td className="px-6 py-5">

        {policy.isActive ? (
          <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
            Active
          </span>
        ) : (
          <span className="rounded-full bg-red-100 px-3 py-1 text-xs text-red-700">
            Inactive
          </span>
        )}

      </td>

      <td className="px-6 py-5">
        {policy.order}
      </td>

      <td className="px-6 py-5">

        <div className="flex justify-center gap-3">

          <Link
            href={`/dashboard/policy/edit/${policy._id}`}
            className="rounded-lg bg-blue-100 p-2 text-blue-600"
          >
            <Pencil size={18} />
          </Link>

          <button
            onClick={
              handleDelete
            }
            className="rounded-lg bg-red-100 p-2 text-red-600"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </td>

    </tr>
  );
}