import { connectToDB } from "@/lib/connectToDB";
import { User } from "@/lib/models/User";
import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectToDB();

    const existingAdmin = await User.findOne({
      email: "ahmedplabon4@gmail.com",
    });

    if (existingAdmin) {
      return NextResponse.json(
        {
          message: "Admin already exists",
        },
        {
          status: 200,
        }
      );
    }

    const hashedPassword = await bcrypt.hash("plabon31", 10);

    await User.create({
      name: "Administrator",
      email: "ahmedplabon4@gmail.com",
      password: hashedPassword,
      role: "admin",
      isActive: true,
    });

    return NextResponse.json(
      {
        message: "Admin created successfully",
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Failed to create admin",
      },
      {
        status: 500,
      }
    );
  }
}