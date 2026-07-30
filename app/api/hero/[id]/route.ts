import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Hero from "@/lib/models/hero";

// Get Single Hero
export async function GET(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectToDB();

  const { id } = await params;

  const hero = await Hero.findById(id);

  return NextResponse.json(hero);
}

// Update Hero
export async function PUT(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectToDB();

  const { id } = await params;

  const data = await req.json();

  const hero = await Hero.findByIdAndUpdate(id, data, {
    new: true,
  });

  return NextResponse.json({
    message: "Hero updated successfully",
    hero,
  });
}

// Delete Hero
export async function DELETE(
  req: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  await connectToDB();

  const { id } = await params;

  await Hero.findByIdAndDelete(id);

  return NextResponse.json({
    message: "Hero deleted successfully",
  });
}