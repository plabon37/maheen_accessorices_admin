import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import About from "@/lib/models/About";

export async function GET() {
  try {
    await connectToDB();

    const about = await About.find().sort({
      order: 1,
    });

    return NextResponse.json(about);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch about data",
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

    const about = await About.create(body);

    return NextResponse.json(about, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to create about section",
      },
      {
        status: 500,
      }
    );
  }
}