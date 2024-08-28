// "use client"
import { dataPost } from "../../actions";
import Cart from "../../components/cart/Cart";
import Form from "../../components/form/Form";
import Search from "../../components/search/Search";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

import React, { Suspense, useRef } from "react";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
const prisma = new PrismaClient();
async function page() {

  // const schema = z.object({});
  // const ref = useRef(null);
  // const { register, handleSubmit } = useForm();
  // const test = async (data: FormData) => {
  //   // const frm = new FormData();

  //   console.log(frm.get("content"));
  // };
  // const onSubmit = async (data: any) => {
  //   console.log(data);

  //   // const response = axios
  //   //   .post("/api/Post", data)
  //   //   .then((d) => console.log(d))
  //   //   .catch((d) => {
  //   //     console.log(d);
  //   //   });
  // };
  const { data, error }: any = await dataPost();
  console.log(data);

  return (
    <>
      <div className="flex flex-col justify-center items-center [&>*]:self-stretch relative overflow-hidden gap-2.5 px-[92px] pt-[45px] pb-[29px] bg-white">
        <Search fnAction={dataPost()}/>
        <Form input={["title", "body", "file"]} />
        {/* cart */}
        <Suspense fallback={<>loading...</>}>
          {error
            ? error
            : data.map((d: any, i: number) => (
                <Cart key={i} type="post" {...d} />
              ))}
        </Suspense>
      </div>
    </>
  );
}

export default page;
