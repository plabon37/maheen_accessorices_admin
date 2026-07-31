import { NextResponse } from "next/server";

import { connectToDB } from "@/lib/connectToDB";
import Album from "@/lib/models/album";

interface Params {
  params: Promise<{
    id: string;
  }>;
}

export async function GET(
  req: Request,
  { params }: Params
) {
  try {
    await connectToDB();

    const { id } = await params;

    const album = await Album.findById(id);

    if (!album) {
      return NextResponse.json(
        {
          message: "Album not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(album);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to fetch album",
      },
      {
        status: 500,
      }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: Params
) {
  try {
    await connectToDB();

    const { id } = await params;

    const body = await req.json();

    const album = await Album.findByIdAndUpdate(
      id,
      body,
      {
        new: true,
      }
    );

    if (!album) {
      return NextResponse.json(
        {
          message: "Album not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json(album);
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to update album",
      },
      {
        status: 500,
      }
    );
  }
}

export async function DELETE(
  req: Request,
  { params }: Params
) {
  try {
    await connectToDB();

    const { id } = await params;

    const album = await Album.findByIdAndDelete(id);

    if (!album) {
      return NextResponse.json(
        {
          message: "Album not found",
        },
        {
          status: 404,
        }
      );
    }

    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        message: "Failed to delete album",
      },
      {
        status: 500,
      }
    );
  }
}