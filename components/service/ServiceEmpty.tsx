import Link from "next/link";

export default function ServiceEmpty() {
  return (
    <div className="rounded-xl bg-white py-24 shadow">

      <div className="mx-auto max-w-md text-center">

        <div className="mb-6 text-7xl">
          🛠️
        </div>

        <h2 className="text-4xl font-bold text-black">
          No Service Found
        </h2>

        <p className="mt-4 text-gray-500">
          There is no service available.
        </p>

        <Link
          href="/dashboard/service/new"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          + Add Service
        </Link>

      </div>

    </div>
  );
}