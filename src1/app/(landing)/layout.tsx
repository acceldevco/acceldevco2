"use client";
import { Tabs } from "antd";
import React, { useState } from "react";
import Login from "../components/Login";
import Register from "../components/Register";
// import UserContext, { useContextUser } from "@/app/components/user/user-context";
// import user from "../lib/user";
function layout({ children }: any) {
  var [show, setshow] = useState({
    menu: true,
    login: true
  })
  var [valid, setvalid] = useState({
    dashboard: true,
    tab: true,
    logout: true,
    user: true,
  });
  const tabs:any = [
    {
      label: `login`,
      key: 1,
      children: <Login />,
      disabled: false,
    },
    {
      label: `register`,
      key: 2,
      children: <Register />,
      disabled: false,
    },
  ];
  


  return (
    <>
{
  // console.log(await user(localStorage?.id, localStorage?.data))
}
        {
          show.menu && <div className="flex absolute flex-col  justify-start items-center top-[50px] left-0 z-[100]  gap-[7px] px-[34px] py-5 bg-[#d6d6d6]">

            {valid.tab && (
              <Tabs
                type="card"
                items={tabs.map((d:any, i:any) => {
                  return {
                    label: d.label,
                    key: i,
                    children: d.children,
                    disabled: d.disabled,
                  };
                })}
              />
            )}
            {valid.dashboard && (
              <>
                <div className="flex-grow-0 flex-shrink-0 p-5 relative  rounded-[58px] bg-white" />
                <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                  name
                </p>
                <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                  ورود به داشبورد
                </p>
              </>
            )}
          </div>
        }

        {show.menu && <div className="flex flex-col justify-start items-start   absolute right-0 top-[50px] z-[100]  gap-2.5 px-[13px] py-3.5 bg-[#d6d6d6]">
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[107px] h-[17px] relative overflow-hidden bg-white" />
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[107px] h-[17px] relative overflow-hidden bg-white" />
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[107px] h-[17px] relative overflow-hidden bg-white" />
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[107px] h-[17px] relative overflow-hidden bg-white" />
        </div>}

        <div className="flex flex-col justify-start items-start  relative overflow-hidden bg-white">
          <div className="flex justify-between items-center self-stretch flex-grow-0 flex-shrink-0  px-[5px] bg-[#ececec]">
            <div className="flex justify-start items-center flex-grow-0 flex-shrink-0 relative gap-2.5">
              <div className="flex-grow-0 flex-shrink-0 h-[50px] w-[50px] relative overflow-hidden rounded-[25px] bg-[#dcdcdc]" />
              {valid.dashboard && (
                <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                  admin
                </p>
              )}

              {valid.user && (
                <svg
                  width={15}
                  height={15}
                  viewBox="0 0 10 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M5 5C6.37513 5 7.5 3.87497 7.5 2.5C7.5 1.12503 6.37513 0 5 0C3.62487 0 2.5 1.12503 2.5 2.5C2.5 3.87497 3.62487 5 5 5ZM5 6.25C3.3438 6.25 0 7.0938 0 8.75V10H10V8.75C10 7.0938 6.6562 6.25 5 6.25Z"
                    fill="black"
                  />
                </svg>
              )}
              {valid.logout && (
                <svg
                  width={15}
                  height={19}
                  viewBox="0 0 10 14"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex-grow-0 flex-shrink-0"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <path
                    d="M0 7C0 7.16576 0.0658481 7.32473 0.183058 7.44194C0.300269 7.55915 0.45924 7.625 0.625 7.625H5.36875L3.93125 9.05625C3.87267 9.11435 3.82617 9.18348 3.79444 9.25964C3.76271 9.3358 3.74638 9.41749 3.74638 9.5C3.74638 9.58251 3.76271 9.6642 3.79444 9.74036C3.82617 9.81652 3.87267 9.88565 3.93125 9.94375C3.98935 10.0023 4.05848 10.0488 4.13464 10.0806C4.2108 10.1123 4.29249 10.1286 4.375 10.1286C4.45751 10.1286 4.5392 10.1123 4.61536 10.0806C4.69152 10.0488 4.76065 10.0023 4.81875 9.94375L7.31875 7.44375C7.37565 7.38431 7.42025 7.31422 7.45 7.2375C7.51251 7.08534 7.51251 6.91466 7.45 6.7625C7.42025 6.68578 7.37565 6.61569 7.31875 6.55625L4.81875 4.05625C4.76048 3.99798 4.69129 3.95175 4.61516 3.92021C4.53902 3.88868 4.45741 3.87244 4.375 3.87244C4.29259 3.87244 4.21098 3.88868 4.13484 3.92021C4.05871 3.95175 3.98952 3.99798 3.93125 4.05625C3.87298 4.11452 3.82675 4.18371 3.79521 4.25984C3.76367 4.33598 3.74744 4.41759 3.74744 4.5C3.74744 4.58241 3.76367 4.66402 3.79521 4.74016C3.82675 4.81629 3.87298 4.88548 3.93125 4.94375L5.36875 6.375H0.625C0.45924 6.375 0.300269 6.44085 0.183058 6.55806C0.0658481 6.67527 0 6.83424 0 7ZM8.125 0.75H1.875C1.37772 0.75 0.900806 0.947544 0.549175 1.29917C0.197544 1.65081 0 2.12772 0 2.625V4.5C0 4.66576 0.0658481 4.82473 0.183058 4.94194C0.300269 5.05915 0.45924 5.125 0.625 5.125C0.79076 5.125 0.949731 5.05915 1.06694 4.94194C1.18415 4.82473 1.25 4.66576 1.25 4.5V2.625C1.25 2.45924 1.31585 2.30027 1.43306 2.18306C1.55027 2.06585 1.70924 2 1.875 2H8.125C8.29076 2 8.44973 2.06585 8.56694 2.18306C8.68415 2.30027 8.75 2.45924 8.75 2.625V11.375C8.75 11.5408 8.68415 11.6997 8.56694 11.8169C8.44973 11.9342 8.29076 12 8.125 12H1.875C1.70924 12 1.55027 11.9342 1.43306 11.8169C1.31585 11.6997 1.25 11.5408 1.25 11.375V9.5C1.25 9.33424 1.18415 9.17527 1.06694 9.05806C0.949731 8.94085 0.79076 8.875 0.625 8.875C0.45924 8.875 0.300269 8.94085 0.183058 9.05806C0.0658481 9.17527 0 9.33424 0 9.5V11.375C0 11.8723 0.197544 12.3492 0.549175 12.7008C0.900806 13.0525 1.37772 13.25 1.875 13.25H8.125C8.62228 13.25 9.09919 13.0525 9.45083 12.7008C9.80246 12.3492 10 11.8723 10 11.375V2.625C10 2.12772 9.80246 1.65081 9.45083 1.29917C9.09919 0.947544 8.62228 0.75 8.125 0.75Z"
                    fill="black"
                  />
                </svg>
              )}

              <div className="flex flex-col justify-start items-start w-5 h-5 relative overflow-hidden rounded-[41px] bg-[#d2d2d2]">
                <img
                  src="http://localhost:3000/image-27.png"
                  className="flex-grow-0 flex-shrink-0 w-[38px] h-[26px] object-cover"
                />
              </div>
            </div>
            <div className="flex justify-end items-center flex-grow-0 flex-shrink-0 w-[263px] relative gap-[13px]">
              <div className="flex justify-start items-start flex-grow-0 flex-shrink-0 overflow-hidden gap-2.5 px-[9px] py-1.5 bg-white">
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[54px] h-3.5 relative overflow-hidden gap-2.5 px-[9px] bg-[#b7b7b7]">
                  <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                    خانه
                  </p>
                </div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[54px] h-3.5 relative overflow-hidden gap-2.5 px-[9px] bg-[#b7b7b7]">
                  <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                    خانه
                  </p>
                </div>
                <div className="flex justify-center items-center flex-grow-0 flex-shrink-0 w-[54px] h-3.5 relative overflow-hidden gap-2.5 px-[9px] bg-[#b7b7b7]">
                  <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                    خانه
                  </p>
                </div>
              </div>
              <svg
                width={10}
                height={8}
                viewBox="0 0 10 8"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="flex-grow-0 flex-shrink-0"
                preserveAspectRatio="xMidYMid meet"
              >
                <path
                  d="M9.15584 1.53892H0.844156C0.376623 1.53892 0 1.22177 0 0.828056C0 0.434344 0.376623 0.117188 0.844156 0.117188H9.15584C9.62338 0.117188 10 0.434344 10 0.828056C10 1.22177 9.62338 1.53892 9.15584 1.53892ZM10 3.99962C10 3.60591 9.62338 3.28875 9.15584 3.28875H0.844156C0.376623 3.28875 0 3.60591 0 3.99962C0 4.39333 0.376623 4.71049 0.844156 4.71049H9.15584C9.62338 4.71049 10 4.39333 10 3.99962ZM10 7.17119C10 6.77747 9.62338 6.46032 9.15584 6.46032H0.844156C0.376623 6.46032 0 6.77747 0 7.17119C0 7.5649 0.376623 7.88205 0.844156 7.88205H9.15584C9.62338 7.88205 10 7.5649 10 7.17119Z"
                  fill="black"
                />
              </svg>
            </div>
          </div>
        </div>
        {children}
        <div className="flex justify-center [&>*]:grow items-start  overflow-hidden gap-5 px-[11px] py-[9px] bg-white">
          <div className="flex flex-col justify-start items-center flex-grow-0 flex-shrink-0  relative overflow-hidden gap-[5px] px-[13px] py-[9px] bg-[#e4e4e4]">
            <div className="flex-grow-0 flex-shrink-0 w-[60px] h-[60px] relative overflow-hidden rounded-[31px] bg-white" />
            <div className="self-stretch flex-grow-0 flex-shrink-0 w-[83px] h-[21px] relative overflow-hidden bg-white" />
          </div>

          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[104px]  relative overflow-hidden gap-2.5 px-3.5 py-[9px] bg-[#e4e4e4]">
            <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative overflow-hidden gap-2.5 px-[19px] py-px bg-white border-t-0 border-r-0 border-b-[0.5px] border-l-0 border-black">
              <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                درباره ما
              </p>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white" />
          </div>


          <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[104px]  relative overflow-hidden gap-2.5 px-3.5 py-[9px] bg-[#e4e4e4]">
            <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative overflow-hidden gap-2.5 px-[19px] py-px bg-white border-t-0 border-r-0 border-b-[0.5px] border-l-0 border-black">
              <p className="flex-grow-0 flex-shrink-0  text-left text-black">
                درباره ما
              </p>
            </div>
            <div className="self-stretch flex-grow-0 flex-shrink-0  relative overflow-hidden bg-white" />
          </div>
          {/* <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[104px]  relative overflow-hidden gap-2.5 px-3.5 py-[9px] bg-[#e4e4e4]">
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative overflow-hidden gap-2.5 px-[19px] py-px bg-white border-t-0 border-r-0 border-b-[0.5px] border-l-0 border-black">
            <p className="flex-grow-0 flex-shrink-0 text-[7px] text-left text-black">
              درباره ما
            </p>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[81px] h-[52px] relative overflow-hidden bg-white" />
        </div>
        <div className="flex flex-col justify-start items-start flex-grow-0 flex-shrink-0 h-[104px]  relative overflow-hidden gap-2.5 px-3.5 py-[9px] bg-[#e4e4e4]">
          <div className="flex justify-center items-center self-stretch flex-grow-0 flex-shrink-0 h-[17px] relative overflow-hidden gap-2.5 px-[19px] py-px bg-white border-t-0 border-r-0 border-b-[0.5px] border-l-0 border-black">
            <p className="flex-grow-0 flex-shrink-0 text-[7px] text-left text-black">
              درباره ما
            </p>
          </div>
          <div className="self-stretch flex-grow-0 flex-shrink-0 w-[81px] h-[52px] relative overflow-hidden bg-white" />
        </div> */}
        </div>


    </>
  );
}

export default layout;
