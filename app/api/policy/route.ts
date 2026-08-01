import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import Policy from "@/lib/models/Policy";

export async function GET() {
  try {
    await connectToDB();

    const policies = await Policy.find().sort({
      order: 1,
    });

    return NextResponse.json(policies);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch policies",
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

    const policy = await Policy.create(body);

    return NextResponse.json(policy, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to create policy",
      },
      {
        status: 500,
      }
    );
  }
}