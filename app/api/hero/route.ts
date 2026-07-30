import { connectToDB } from "@/lib/connectToDB";
import { HeroSection } from "@/lib/models/hero";
import { NextResponse } from "next/server";

// Get All Hero Sections
export async function GET() {
  try {
    await connectToDB();

    const heroes = await HeroSection.find().sort({ order: 1 });

    const response = NextResponse.json(heroes);
    response.headers.set("Access-Control-Allow-Origin", "*");

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch hero sections" },
      { status: 500 }
    );
  }
}

// Create Hero Section
export async function POST(req: Request) {
  try {
    const data = await req.json();

    await connectToDB();

    const hero = await HeroSection.create(data);

    return NextResponse.json(
      {
        message: "Hero section created successfully",
        hero,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to create hero section" },
      { status: 500 }
    );
  }
}