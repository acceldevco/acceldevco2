import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { Prisma, PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { name, email, password } = reqBody;

    // return NextResponse.json(reqBody)
    console.log(reqBody);

    //check if user already exists
    const user = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (user) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 }
      );
    }

    // //hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // console.log(hashedPassword);
    const test=await prisma.user.create({
      data: {
        email: email,
        password: hashedPassword,
        name: name,
      },
    });



    // // const savedUser = await newUser.save()
    // // console.log(savedUser);

    // //send verification email

    // await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

    return NextResponse.json({
      message: "User created successfully",
      success: true,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
