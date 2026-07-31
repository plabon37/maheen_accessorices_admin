"use client";

import ServiceTableRow from "./ServiceTableRow";

interface ServiceTableProps {
  services: any[];
  getServices: () => void;
}

export default function ServiceTable({
  services,
  getServices,
}: ServiceTableProps) {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow">

      <div className="overflow-x-auto">

        <table className="min-w-full">

          <thead className="bg-gray-100">

            <tr>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Image
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Number
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Title
              </th>

              <th className="px-6 py-4 text-left text-sm font-semibold text-black">
                Status
              </th>

              <th className="px-6 py-4 text-center text-sm font-semibold text-black">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {services.map((service, index) => (
              <ServiceTableRow
                key={service._id}
                service={service}
                index={index}
                getServices={getServices}
              />
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}