import Image from "next/image";

interface AboutPreviewProps {
  data: any;
}

export default function AboutPreview({
  data,
}: AboutPreviewProps) {
  return (
    <div className="overflow-hidden rounded-3xl text-black border bg-white shadow-xl">

      {/* Image */}

      <div className="relative h-[320px] w-full bg-gray-100">

        {data.image ? (
          <Image
            src={data.image}
            alt="About Preview"
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            Image Preview
          </div>
        )}

      </div>

      {/* Content */}

      <div className="space-y-6 text-black p-8">

        <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
          {data.sectionTitle || "ABOUT US"}
        </span>

        <h2 className="text-4xl font-bold leading-tight text-gray-900">
          {data.titleTop}

          <br />

          <span className="italic text-blue-600">
            {data.titleItalic}
          </span>

          <br />

          {data.titleBottom}
        </h2>

        <p className="text-gray-500">
          {data.shortDescription}
        </p>

        <p className="leading-8 text-gray-600">
          {data.description}
        </p>

        <div className="flex items-center gap-4">

          <button className="rounded-full bg-blue-600 px-6 py-3 text-white">
            {data.exploreButtonText}
          </button>

          <button className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
            →
          </button>

        </div>

      </div>

    </div>
  );
}