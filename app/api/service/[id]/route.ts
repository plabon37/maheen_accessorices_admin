import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Service from "@/lib/models/Service";

// Get Single Service
export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectToDB();

    const { id } = await params;

    const service = await Service.findById(id);

    return NextResponse.json(service);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Service not found",
      },
      {
        status: 404,
      }
    );
  }
}

// Update Service
export async function PUT(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectToDB();

    const { id } = await params;

    const data = await req.json();

    const service = await Service.findByIdAndUpdate(
      id,
      data,
      {
        new: true,
      }
    );

    return NextResponse.json({
      message: "Service updated successfully",
      service,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to update service",
      },
      {
        status: 500,
      }
    );
  }
}

// Delete Service
export async function DELETE(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ id: string }>;
  }
) {
  try {
    await connectToDB();

    const { id } = await params;

    await Service.findByIdAndDelete(id);

    return NextResponse.json({
      message: "Service deleted successfully",
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to delete service",
      },
      {
        status: 500,
      }
    );
  }
}