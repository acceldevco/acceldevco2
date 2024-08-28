import { PrismaClient } from "@prisma/client";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
const prisma = new PrismaClient();

export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    // console.log(reqBody);
    // return NextResponse.json({email})
    //check if user exists
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    })
 
    if (!user) {
      return NextResponse.json(
        { error: "User does not exist" },
        { status: 400 }
      );
    }
    // else{
    //   return NextResponse.json(user)
    // }
    // console.log("user exists");

    //check if password is correct
    const pass:any = user?.password
    const validPassword = await bcryptjs.compare(password, pass);
    // return NextResponse.json(validPassword)

    if (!validPassword) {
      return NextResponse.json({ error: "Invalid password" }, { status: 400 });
    }
    // console.log(user);

    //create token data
    const tokenData = {
      id: user?.id,
      username: user?.name,
      email: user?.email,
    };
    //create token
    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {
      expiresIn: "2s",
    });

    const response = NextResponse.json({
      message: {
        token:token,
        user:user.id

      },
      success: true,
    });
    response.cookies.set("token", token, {
      httpOnly: true,
    });
    return response;
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET(request: NextRequest, res: NextResponse) {
  return NextResponse.json({ message: "dasd" });
}
