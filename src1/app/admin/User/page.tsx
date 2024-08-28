
import { dataPost, dataUser } from "../../actions";
import Cart from "../../components/cart/Cart";
import Form from "../../components/form/Form";
import Search from "../../components/search/Search";
import { PrismaClient } from "@prisma/client";
import axios from "axios";

import React, { Suspense } from "react";
const prisma = new PrismaClient();
async function page() {
  const { data, error }: any = await dataUser();
  console.log(data);
  return (
    <>
      <div className="flex flex-col justify-center items-center [&>*]:self-stretch relative overflow-hidden gap-2.5 px-[92px] pt-[45px] pb-[29px] bg-white">
        <Search fnAction={dataUser()}/>
        <Form input={["name", "email", "password", "file"]} />
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
