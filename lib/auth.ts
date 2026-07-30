import bcrypt from "bcryptjs";
import { connectToDB } from "@/lib/connectToDB";
import { generateToken } from "@/lib/jwt";
import { User } from "@/lib/models/User";

type LoginSuccess = {
  success: true;
  token: string;
  user: {
    id: string;
    name: string;
    email: string;
    role: string;
  };
};

type LoginFailure = {
  success: false;
  message: string;
};

export type LoginResponse = LoginSuccess | LoginFailure;

export async function loginAdmin(
  email: string,
  password: string
): Promise<LoginResponse> {
  await connectToDB();

  const user = await User.findOne({ email });

  if (!user) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  if (!user.isActive) {
    return {
      success: false,
      message: "Account is inactive",
    };
  }

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) {
    return {
      success: false,
      message: "Invalid email or password",
    };
  }

  const token = generateToken({
    id: user._id.toString(),
    email: user.email,
    role: user.role,
  });

  return {
    success: true,
    token,
    user: {
      id: user._id.toString(),
      name: user.name,
      email: user.email,
      role: user.role,
    },
  };
}