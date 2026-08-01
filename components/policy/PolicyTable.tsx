import PolicyTableRow from "./PolicyTableRow";

interface PolicyTableProps {
  policies: any[];
}

export default function PolicyTable({
  policies,
}: PolicyTableProps) {
  return (
    <div className="overflow-hidden text-black rounded-2xl border bg-white shadow">

      <table className="w-full">

        <thead className="bg-gray-50">

          <tr>

            <th className="px-6 py-4 text-left">
              Title
            </th>

            <th className="px-6 py-4 text-left">
              Cards
            </th>

            <th className="px-6 py-4 text-left">
              Status
            </th>

            <th className="px-6 py-4 text-left">
              Order
            </th>

            <th className="px-6 py-4 text-center">
              Actions
            </th>

          </tr>

        </thead>

        <tbody>

          {policies.map((policy) => (
            <PolicyTableRow
              key={policy._id}
              policy={policy}
            />
          ))}

        </tbody>

      </table>

    </div>
  );
}