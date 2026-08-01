import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import Feature from "@/lib/models/Feature";

export async function GET() {
  try {
    await connectToDB();

    const features = await Feature.find().sort({
      order: 1,
    });

    return NextResponse.json(features);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch features",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(req: Request) {
  try {
    await connectToDB();

    const body = await req.json();

    const feature = await Feature.create(body);

    return NextResponse.json(feature, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to create feature",
      },
      {
        status: 500,
      }
    );
  }
}