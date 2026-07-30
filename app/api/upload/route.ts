import { NextRequest, NextResponse } from "next/server";
import cloudinary from "@/lib/cloudinary";

export async function POST(req: NextRequest) {
  const data = await req.formData();

  const file = data.get("file") as File;

  if (!file) {
    return NextResponse.json({
      message: "No file selected",
    });
  }

  const bytes = await file.arrayBuffer();

  const buffer = Buffer.from(bytes);

  const result: any = await new Promise((resolve, reject) => {
    cloudinary.uploader
      .upload_stream(
        {
          folder: "hero",
        },
        (error, result) => {
          if (error) reject(error);
          else resolve(result);
        }
      )
      .end(buffer);
  });

  return NextResponse.json({
    message: "Image uploaded successfully",
    imageUrl: result.secure_url,
  });
}