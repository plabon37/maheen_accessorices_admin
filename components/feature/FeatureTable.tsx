import FeatureTableRow from "./FeatureTableRow";

interface FeatureTableProps {
  features: any[];
}

export default function FeatureTable({
  features,
}: FeatureTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border text-black border-gray-200 bg-white shadow-sm">

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-4 text-left font-semibold">
              Image
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Logo
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Title
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Status
            </th>

            <th className="px-6 py-4 text-left font-semibold">
              Order
            </th>

            <th className="px-6 py-4 text-center font-semibold">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {features.map((feature) => (
            <FeatureTableRow
              key={feature._id}
              feature={feature}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}