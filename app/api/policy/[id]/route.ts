import { NextRequest, NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import Policy from "@/lib/models/Policy";

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

    const policy = await Policy.findById(id);

    if (!policy) {
      return NextResponse.json(
        {
          message: "Policy not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(policy);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch policy",
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

    const policy = await Policy.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    return NextResponse.json(policy);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to update policy",
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

    await Policy.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Policy deleted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to delete policy",
      },
      {
        status: 500,
      }
    );
  }
}