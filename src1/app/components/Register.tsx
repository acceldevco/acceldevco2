"use client";
import axios from "axios";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form"
function Register() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>()
  const onSubmit = async (data: any) => {
    const response = axios
      .post("/api/register", data)
      .then((d) => console.log(d))
      .catch((d) => {
        console.log(d);
      });
  };
  return (
    <form className="flex flex-col" onSubmit={handleSubmit(onSubmit)}>
      <input placeholder="نام" {...register("name")} className="self-stretch flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white" />
      <input placeholder="ایمیل" {...register("email")} className="self-stretch flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white" />
      <input placeholder="پسورد" {...register("password")} className="self-stretch flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white" />
      {/* <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 py-1 bg-white">
        <p className="flex-grow-0 flex-shrink-0  text-left text-black">
          اگر رمز را فراموش کردین
        </p>
      </div> */}
      <button>افزودن</button>
    </form>
  );
}

export default Register;
