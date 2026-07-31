import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

interface AlbumPreviewProps {
  data: any;
}

export default function AlbumPreview({
  data,
}: AlbumPreviewProps) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-xl">

      {/* Image */}

      <div className="relative h-[400px] w-full bg-gray-100">

        {data.image ? (
          <Image
            src={data.image}
            alt={data.title || "Album"}
            fill
            className="object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-400">
            No Image Selected
          </div>
        )}

      </div>

      {/* Content */}

      <div className="space-y-5 p-8">

        <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
          {data.subTitle || "Album Subtitle"}
        </span>

        <h2 className="text-3xl font-bold leading-tight text-gray-900">
          {data.title || "Album Title"}
        </h2>

        <p className="leading-8 text-gray-500">
          {data.description ||
            "Album description will appear here."}
        </p>

        <Link
          href={data.buttonLink || "#"}
          className="inline-flex items-center gap-3 font-semibold text-blue-600 transition hover:text-blue-800"
        >
          {data.buttonText || "View Project"}

          <FaArrowRight />
        </Link>

      </div>

    </div>
  );
}