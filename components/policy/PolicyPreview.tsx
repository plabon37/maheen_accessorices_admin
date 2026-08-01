import Image from "next/image";

interface PolicyPreviewProps {
  data: any;
}

export default function PolicyPreview({
  data,
}: PolicyPreviewProps) {
  return (
    <div className="overflow-hidden rounded-3xl bg-[#F6F9FC] shadow-xl">

      {/* Header */}

      <div className="border-b bg-white p-8">

        <div className="flex items-center gap-3">

          <span className="text-3xl font-bold text-[#6D7DF6]">
            05
          </span>

          <span className="text-3xl font-bold text-[#6D7DF6]">
          </span>

          <span className="text-sm font-semibold tracking-[4px] uppercase text-[#6D7DF6]">
            {data.sectionTitle}
          </span>

        </div>

        <h2 className="mt-6 text-5xl font-bold text-black">

          {data.title}

          <span className="ml-3 italic font-light">
            {data.italicTitle}
          </span>

        </h2>

        <p className="mt-6 max-w-2xl leading-8 text-gray-500">
          {data.rightDescription}
        </p>

      </div>

      {/* Cards */}

      <div className="grid grid-cols-2 gap-6 p-8">

        {data.cards.map((card: any, index: number) => (

          <div
            key={index}
            className="rounded-2xl border bg-white p-6 transition hover:-translate-y-2 hover:shadow-xl"
          >

            {/* Icon */}

            <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-xl bg-gray-100">

              {card.icon ? (

                <Image
                  src={card.icon}
                  alt={card.title}
                  width={48}
                  height={48}
                  className="object-contain"
                />

              ) : (

                <span className="text-gray-400">
                  Icon
                </span>

              )}

            </div>

            {/* Number */}

            <div className="mb-3 text-4xl font-bold text-[#6D7DF6]">

              {card.number}

            </div>

            {/* Title */}

            <h3 className="text-lg font-semibold leading-8 text-black">

              {card.title}

            </h3>

          </div>

        ))}

      </div>

    </div>
  );
}