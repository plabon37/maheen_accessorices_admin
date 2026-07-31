import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import Album from "@/lib/models/album";

export async function GET() {
  try {
    await connectToDB();

    const albums = await Album.find().sort({
      order: 1,
    });

    return NextResponse.json(albums);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch albums",
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

    const album = await Album.create(body);

    return NextResponse.json(album, {
      status: 201,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to create album",
      },
      {
        status: 500,
      }
    );
  }
}