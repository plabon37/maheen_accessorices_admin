"use client";

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaArrowRight,
} from "react-icons/fa";

interface HeroPreviewProps {
  hero: {
    backgroundImage: string;
    subTitle: string;
    title: string;
    description: string;
    primaryButtonText: string;
    primaryButtonLink: string;
    secondaryButtonText: string;
    secondaryButtonLink: string;
    facebook: string;
    instagram: string;
    linkedin: string;
  };
}

export default function HeroPreview({ hero }: HeroPreviewProps) {
  return (
    <div className="sticky top-6">
      <h2 className="mb-4 text-xl font-bold">Live Preview</h2>

      <div className="relative h-[650px] overflow-hidden rounded-2xl shadow-2xl">

        {/* Background */}
        {hero.backgroundImage ? (
          <Image
            src={hero.backgroundImage}
            alt="Hero Preview"
            fill
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 bg-gray-300" />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/20" />

        {/* Content */}
        <div className="relative z-10 flex h-full items-center px-10">

          <div className="max-w-xl">

            <span className="inline-block rounded-full border border-cyan-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-cyan-400">
              {hero.subTitle || "YOUR SUBTITLE"}
            </span>

            <h1 className="mt-6 text-5xl font-black uppercase leading-tight text-white">
              {hero.title || "Hero Title"}
            </h1>

            <p className="mt-6 text-gray-200 leading-8">
              {hero.description ||
                "Your hero description will appear here while typing."}
            </p>

            {/* Buttons */}
            <div className="mt-10 flex gap-4">

              <Link
                href={hero.primaryButtonLink || "#"}
                className="rounded-full bg-cyan-500 px-7 py-3 text-white transition hover:bg-cyan-400"
              >
                <span className="flex items-center gap-2">
                  {hero.primaryButtonText || "Primary Button"}
                  <FaArrowRight />
                </span>
              </Link>

              <Link
                href={hero.secondaryButtonLink || "#"}
                className="rounded-full border border-white px-7 py-3 text-white transition hover:bg-white hover:text-black"
              >
                {hero.secondaryButtonText || "Secondary Button"}
              </Link>

            </div>

          </div>

        </div>

        {/* Social Icons */}
        <div className="absolute right-6 top-1/2 -translate-y-1/2 flex flex-col gap-4">

          <Link
            href={hero.facebook || "#"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-cyan-500"
          >
            <FaFacebookF />
          </Link>

          <Link
            href={hero.instagram || "#"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-cyan-500"
          >
            <FaInstagram />
          </Link>

          <Link
            href={hero.linkedin || "#"}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-cyan-500"
          >
            <FaLinkedinIn />
          </Link>

        </div>

      </div>
    </div>
  );
}