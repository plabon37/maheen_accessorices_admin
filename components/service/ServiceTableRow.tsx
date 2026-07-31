"use client";

import Image from "next/image";
import Link from "next/link";

import { FiEdit2, FiTrash2 } from "react-icons/fi";

interface ServiceRowProps {
  service: any;
  index: number;
  getServices: () => void;
}

export default function ServiceTableRow({
  service,
  index,
  getServices,
}: ServiceRowProps) {
  const deleteService = async () => {
    const confirmDelete = confirm(
      "Delete this service?"
    );

    if (!confirmDelete) return;

    await fetch(`/api/service/${service._id}`, {
      method: "DELETE",
    });

    getServices();
  };

  return (
    <tr className="border-t hover:bg-gray-50">

      {/* Image */}

      <td className="px-6 py-4">

        <Image
          src={service.image}
          alt={service.title}
          width={80}
          height={60}
          className="rounded-lg object-cover"
        />

      </td>

      {/* Number */}

      <td className="px-6 py-4 font-semibold text-black">
        {service.number}
      </td>

      {/* Title */}

      <td className="px-6 py-4 text-black">
        {service.title}
      </td>

      {/* Status */}

      <td className="px-6 py-4">

        <span
          className={`rounded-full px-3 py-1 text-sm font-medium ${
            service.isActive
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-600"
          }`}
        >
          {service.isActive ? "Active" : "Inactive"}
        </span>

      </td>

      {/* Actions */}

      <td className="px-6 py-4">

        <div className="flex items-center justify-center gap-3">

          <Link
            href={`/dashboard/service/${service._id}`}
            className="rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700"
          >
            <FiEdit2 />
          </Link>

          <button
            onClick={deleteService}
            className="rounded-lg bg-red-600 p-2 text-white hover:bg-red-700"
          >
            <FiTrash2 />
          </button>

        </div>

      </td>

    </tr>
  );
}