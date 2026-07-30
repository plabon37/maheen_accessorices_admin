import { loginAdmin } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Email and password are required",
        },
        {
          status: 400,
        }
      );
    }

    const result = await loginAdmin(email, password);

    if (!result.success) {
      return NextResponse.json(
        {
          message: result.message,
        },
        {
          status: 401,
        }
      );
    }

    const response = NextResponse.json(
      {
        message: "Login successful",
        user: result.user,
      },
      {
        status: 200,
      }
    );

    response.cookies.set({
      name: "token",
      value: result.token,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      maxAge: 60 * 60 * 24 * 7,
      path: "/",
    });

    return response;
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        message: "Something went wrong",
      },
      {
        status: 500,
      }
    );
  }
}