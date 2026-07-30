"use client";

import { CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface HeroImageUploadProps {
  value: string;
  onChange: (url: string) => void;
}

export default function HeroImageUpload({
  value,
  onChange,
}: HeroImageUploadProps) {
  return (
    <div className="space-y-4">
      <label className="block text-sm font-medium">
        Background Image
      </label>

      {value && (
        <div className="overflow-hidden rounded-lg border">
          <Image
            src={value}
            alt="Hero"
            width={1200}
            height={600}
            className="h-64 w-full object-cover"
          />
        </div>
      )}

      <CldUploadWidget
        uploadPreset={process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!}
        onSuccess={(result: any) => {
          onChange(result.info.secure_url);
        }}
      >
        {({ open }) => (
          <button
            type="button"
            onClick={() => open()}
            className="rounded-lg bg-cyan-600 px-5 py-3 text-white hover:bg-cyan-700"
          >
            Upload Image
          </button>
        )}
      </CldUploadWidget>
    </div>
  );
}