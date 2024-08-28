"use server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function dataPost() {

  
  try {
    const data = await prisma.post.findMany(
    //   {
    //   take: 2,
    //   skip: 1,
    // }
  );
    return { data };
  } catch {
    return { error: "do not find" };
  }
  // return [...await prisma.post.findMany()]
}

export async function dataUser() {
  try {
    const data = await prisma.user.findMany(
    //   {
    //   take: 2,
    //   skip: 1,
    // }
  );
    return { data };
  } catch {
    return { error: "do not find" };
  }
  // return [...await prisma.post.findMany()]
}

export async function singlePage(id:any){
  const data = await prisma.post.findMany(
    {
      where:{
        id:+id
      }
    }
  //   {
  //   take: 2,
  //   skip: 1,
  // }
);
  return { data };



  // try {
  //   const data = await prisma.post.findMany(
  //     {
  //       where:{
  //         id:id
  //       }
  //     }
  //   //   {
  //   //   take: 2,
  //   //   skip: 1,
  //   // }
  // );
  //   return { data };
  // } catch {
  //   return { error: "do not find" };
  // }
}