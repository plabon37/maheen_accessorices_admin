import { NextRequest, NextResponse } from "next/server";
import { connectToDB } from "@/lib/connectToDB";
import Service from "@/lib/models/Service";

// Get All Services
export async function GET() {
  try {
    await connectToDB();

    const services = await Service.find().sort({
      order: 1,
    });

    return NextResponse.json(services);
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to fetch services",
      },
      {
        status: 500,
      }
    );
  }
}

// Create Service
export async function POST(req: NextRequest) {
  try {
    await connectToDB();

    const data = await req.json();

    const service = await Service.create(data);

    return NextResponse.json({
      message: "Service created successfully",
      service,
    });
  } catch (error) {
    return NextResponse.json(
      {
        message: "Failed to create service",
      },
      {
        status: 500,
      }
    );
  }
}