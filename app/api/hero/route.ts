import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Hero from "@/lib/models/hero";

// Get All Hero
export async function GET() {
  await connectToDB();

  const heroes = await Hero.find().sort({ order: 1 });

  return NextResponse.json(heroes);
}

// Create Hero
export async function POST(req: NextRequest) {
  await connectToDB();

  const data = await req.json();

  const hero = await Hero.create(data);

  return NextResponse.json({
    message: "Hero created successfully",
    hero,
  });
}