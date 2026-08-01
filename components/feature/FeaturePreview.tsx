import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface FeaturePreviewProps {
  data: any;
}

export default function FeaturePreview({
  data,
}: FeaturePreviewProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#F6F9FC] shadow-xl">

      {/* Header */}

      <div className="border-b bg-white px-8 py-6">

        <p className="text-sm font-semibold uppercase tracking-[4px] text-[#6D7DF6]">
          {data.sectionTitle}
        </p>

        <h2 className="mt-3 text-3xl font-bold text-black">
          {data.title || "Why Choose Us"}
        </h2>

      </div>

      {/* Image */}

      <div className="relative">

        <div className="relative h-[360px]">

          {data.image ? (
            <Image
              src={data.image}
              alt="Feature"
              fill
              className="object-cover"
            />
          ) : (
            <div className="flex h-full items-center justify-center bg-gray-200 text-gray-500">
              Background Image
            </div>
          )}

        </div>

        {/* Black Card */}

        <div className="absolute bottom-6 left-6 w-[320px] rounded-2xl bg-black p-6 text-white shadow-2xl">

          {/* Logo */}

          <div className="mb-5">

            {data.logo ? (
              <div className="relative h-16 w-28">

                <Image
                  src={data.logo}
                  alt="Logo"
                  fill
                  className="object-contain"
                />

              </div>
            ) : (
              <div className="text-xl font-bold">
                LOGO
              </div>
            )}

          </div>

          {/* Description */}

          <p className="text-sm leading-7 text-gray-300">
            {data.description ||
              "Company description will appear here."}
          </p>

          {/* Button */}

          <button className="mt-6 flex items-center gap-2 font-semibold text-white">

            {data.buttonText}

            <ArrowRight size={18} />

          </button>

        </div>

      </div>

      {/* Bottom */}

      <div className="space-y-8 p-8">

        {/* Experience */}

        <div className="rounded-xl bg-white p-4 shadow">

          <p className="font-semibold text-[#6D7DF6]">
            {data.experience}
          </p>

        </div>

        {/* Feature List */}

        <div className="space-y-4">

          {data.features.map(
            (item: any, index: number) => (
              <div
                key={index}
                className="flex items-center gap-3"
              >
                <ArrowRight
                  size={18}
                  className="text-[#6D7DF6]"
                />

                <span className="font-medium text-black">
                  {item.title}
                </span>

              </div>
            )
          )}

        </div>

        {/* Statistics */}

        <div className="grid grid-cols-2 gap-6">

          <div className="rounded-xl bg-white p-6 text-center shadow">

            <h3 className="text-4xl font-bold text-black">
              {data.designCount}
            </h3>

            <p className="mt-2 text-gray-500">
              {data.designLabel}
            </p>

          </div>

          <div className="rounded-xl bg-white p-6 text-center shadow">

            <h3 className="text-4xl font-bold text-black">
              {data.orderCount}
            </h3>

            <p className="mt-2 text-gray-500">
              {data.orderLabel}
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}