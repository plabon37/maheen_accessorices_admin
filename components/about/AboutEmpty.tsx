import Link from "next/link";

export default function AboutEmpty() {
  return (
    <div className="rounded-xl bg-white py-24 shadow">

      <div className="text-center">

        <div className="text-7xl">
          📖
        </div>

        <h2 className="mt-6 text-4xl font-bold text-black">
          No About Section
        </h2>

        <p className="mt-3 text-gray-500">
          Create your About Section.
        </p>

        <Link
          href="/dashboard/about/new"
          className="mt-8 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white hover:bg-blue-700"
        >
          + Add About
        </Link>

      </div>

    </div>
  );
}