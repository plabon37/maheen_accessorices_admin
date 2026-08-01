import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import About from "@/lib/models/About";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectToDB();

    const { id } = await params;

    const about = await About.findById(id);

    if (!about) {
      return NextResponse.json(
        {
          message: "About not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(about);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch about",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectToDB();

    const { id } = await params;

    const body = await req.json();

    const about = await About.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json(about);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to update about",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: NextRequest,
  { params }: Params
) {
  try {
    await connectToDB();

    const { id } = await params;

    await About.findByIdAndDelete(id);

    return NextResponse.json({
      message: "About deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to delete about",
      },
      {
        status: 500,
      }
    );
  }
}