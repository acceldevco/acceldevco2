import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { cache } from "react";
const prisma = new PrismaClient();
//post
export async function POST(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
    // return NextResponse.json({ message: reqBody });

    // const post = await prisma.post.findUnique({
    //     where: {
    //         ...reqBody
    //     },
    //   });
    //   if (post) {
    //     return NextResponse.json(
    //       { error: "User already exists" },
    //       { status: 400 }
    //     );
    //   }
    await prisma.post.create({
      data: reqBody,
    });
    return NextResponse.json({ message: "create" });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// delete
export async function DELETE(request: NextRequest, res: NextResponse) {
  // const reqBody = await request.json();
  // console.log(reqBody);

  try {
    const reqBody = await request.json();

    // const post = await prisma.post.findUnique({
    //     where: {
    //         ...reqBody
    //     },
    //   });
    // //   return NextResponse.json({'me':post})
    //   if (post) {
    //     return NextResponse.json(
    //       { error: "User already exists" },
    //       { status: 400 }
    //     );
    //   }
    await prisma.post.delete({
      where: {
        ...reqBody,
      },
    });
    NextResponse.json("delete");
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// put
export async function PUT(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

//patch
export async function PATCH(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
//get
export async function GET(request: NextRequest, res: NextResponse) {
  try {
    const reqBody = await request.json();
    const results = await prisma.post.findMany({
      skip: reqBody.skip,
      take: reqBody.take,
    });
    return NextResponse.json({ data: results });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
