import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
const prisma = new PrismaClient();
export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(reqBody.password, salt);
    const data = {...reqBody,password:hashedPassword}
    await prisma.user.create({
      data: {...data},
    });
   return NextResponse.json({ reqBody });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function DELETE(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function PUT(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function PATCH(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
