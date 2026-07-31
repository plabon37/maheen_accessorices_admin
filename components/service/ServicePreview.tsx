import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

interface ServicePreviewProps {
  service: any;
}

export default function ServicePreview({
  service,
}: ServicePreviewProps) {
  return (
    <div className="sticky top-6">

      <h2 className="mb-5 text-2xl font-bold text-black">
        Live Preview
      </h2>

      {/* Preview Area */}

      <div className="overflow-hidden rounded-3xl bg-[#f4f7fb] shadow-xl">

        {/* Section Header */}

        <div className="px-8 pt-8">

          <span className="text-sm font-semibold uppercase tracking-[4px] text-blue-600">
            {service.number || "01"} 
          </span>

          <h2 className="mt-3 text-4xl font-bold text-black">
            Our Core Services
          </h2>

          <p className="mt-4 text-gray-500">
            Live preview of your service card.
          </p>

        </div>

        {/* Card */}

        <div className="p-8">

          <div className="overflow-hidden rounded-[30px] bg-white shadow-lg">

            {/* Image */}

            <div className="relative h-72 w-full">

              {service.image ? (

                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />

              ) : (

                <div className="flex h-full items-center justify-center bg-gray-200 text-gray-500">
                  Upload Image
                </div>

              )}

              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-transparent to-transparent" />

            </div>

            {/* Content */}

            <div className="space-y-5 p-8">

              <div className="text-6xl font-black text-gray-200">
                {service.number || "01"}
              </div>

              <h3 className="text-3xl font-bold text-black">
                {service.title || "Button Manufacturing"}
              </h3>

              <p className="leading-8 text-gray-600">
                {service.description ||
                  "Your service description will appear here while typing."}
              </p>

              <button className="inline-flex items-center rounded-full bg-blue-600 px-7 py-3 font-semibold text-white transition hover:bg-blue-700">

                {service.buttonText || "Discover Work"}

                <FaArrowRight className="ml-3" />

              </button>

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}