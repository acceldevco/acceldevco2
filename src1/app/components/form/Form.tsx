"use client";
import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";

function Form({ children, input, hand }: any) {
  const { register, handleSubmit } = useForm();
  var img:any = '';
const Image = async(e:any)=>{

var reader = new FileReader();
reader.onloadend = function() {
  img = reader.result;
  console.log('RESULT', reader.result)
}
reader.readAsDataURL(e.target.files[0]);

}
  const onSubmit = async (data: any) => {
    // console.log(data);

    const response = axios
      .post("/api/user", {...data ,file:img})
      .then((d) => console.log(d))
      .catch((d) => {
        console.log(d);
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex gap-3 flex-col [&>*]:flex-grow"
    >
      {input.map((d: any, i: number) => (
        d=='file' ?
        <input
        key={i}
        type={d}
        {...register(d)}
        onChange={Image}
        className=" flex-grow flex-shrink-0 p-2 relative overflow-hidden bg-[#e7e7e7]"
      />
        :
        <input
          key={i}
          type={d}
          {...register(d)}
          
          className=" flex-grow flex-shrink-0 p-2 relative overflow-hidden bg-[#e7e7e7]"
        />
      ))}
      <input
       formAction={(e)=>console.log(e)
       
       }
        type="submit"
        value={"add"}
        className="flex-grow flex-shrink-0 p-2 relative overflow-hidden bg-[#e7e7e7]"
      />
    </form>
  );
}

export default Form;
