"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import axios from "axios";
function Login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  const router = useRouter();
  const onSubmit = async (data: any) => {
    const response = axios
      .post("/api/Login", data)
      .then((d) => {
        console.log(d);

        localStorage.data = d.data.message.token;
        localStorage.id = d.data.message.user;
      })
      .catch((d) => {
        console.log(d);
      });
  };

  return (
    <form
      className="flex flex-col"
      action={"/api/Login"}
      onSubmit={handleSubmit(onSubmit)}
    >
      <input
        placeholder="ایمیل"
        {...register("email")}
        className=" flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white"
      />
      <input
        placeholder="پسورد"
        {...register("password")}
        className=" flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white"
      />
      <div className="flex justify-center items-center  flex-grow-0 flex-shrink-0 relative overflow-hidden gap-2.5 py-1">
        <p className="flex-grow-0 flex-shrink-0  text-left text-black">
          اگر رمز را فراموش کردین
        </p>
      </div>
      <button type="submit">افزودن</button>
    </form>
  );
}

export default Login;
