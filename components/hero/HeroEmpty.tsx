import Link from "next/link";

export default function HeroEmpty() {
  return (
    <div className="bg-white rounded-xl shadow-md p-12">

      <div className="flex flex-col items-center justify-center">

        <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center text-4xl">
          🖼️
        </div>

        <h2 className="mt-6 text-2xl font-bold text-black">
          No Hero Found
        </h2>

        <p className="mt-2 text-gray-500 text-center">
          There is no hero section available.
          <br />
          Click the button below to create your first hero.
        </p>

        <Link
          href="/dashboard/hero/new"
          className="mt-8 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition"
        >
          + Add Hero
        </Link>

      </div>

    </div>
  );
}