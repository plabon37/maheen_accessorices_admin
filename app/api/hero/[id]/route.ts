import { connectToDB } from "@/lib/connectToDB";
import { HeroSection } from "@/lib/models/hero";
import { NextResponse } from "next/server";

// Get Single Hero
export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDB();

    const hero = await HeroSection.findById(id);

    if (!hero) {
      return NextResponse.json(
        { message: "Hero section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(hero, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to fetch hero section" },
      { status: 500 }
    );
  }
}

// Update Hero
export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const data = await req.json();

  try {
    await connectToDB();

    const updated = await HeroSection.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return NextResponse.json(
        { message: "Hero section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        message: "Hero section updated successfully",
        data: updated,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to update hero section" },
      { status: 500 }
    );
  }
}

// Delete Hero
export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  try {
    await connectToDB();

    const deleted = await HeroSection.findByIdAndDelete(id);

    if (!deleted) {
      return NextResponse.json(
        { message: "Hero section not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { message: "Hero section deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { message: "Failed to delete hero section" },
      { status: 500 }
    );
  }
}