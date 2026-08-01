import Link from "next/link";

export default function FeatureEmpty() {
  return (
    <div className="rounded-xl text-black bg-white py-24 shadow">

      <div className="text-center">

        <div className="text-7xl">
          ⭐
        </div>

        <h2 className="mt-6 text-4xl font-bold">
          No Feature Found
        </h2>

        <p className="mt-3 text-gray-500">
          Create your first feature section.
        </p>

        <Link
          href="/dashboard/feature/new"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
        >
          + Add Feature
        </Link>

      </div>

    </div>
  );
}