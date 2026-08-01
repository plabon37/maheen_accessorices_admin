import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import Feature from "@/lib/models/Feature";

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

    const feature = await Feature.findById(id);

    if (!feature) {
      return NextResponse.json(
        {
          message: "Feature not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(feature);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch feature",
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

    const feature = await Feature.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json(feature);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to update feature",
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

    await Feature.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Feature deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to delete feature",
      },
      {
        status: 500,
      }
    );
  }
}