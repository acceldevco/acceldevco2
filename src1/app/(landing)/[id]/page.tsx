import { singlePage } from "../../actions"
import { NextResponse } from "next/server";


async function page({ params }: any) {
    
    const { data } = await singlePage(params.id)
    // console.log(data);
    return (
        <>
            {data?.map((d: any) => <>
                <div className="flex flex-col text-center w-full relative overflow-hidden gap-[23px] px-[17px] py-[7px] bg-white">
                    <div className=" flex-grow font-bold flex-shrink-0  h-11 relative overflow-hidden bg-[#ececec]" >{d.title}</div>
                    <img srcSet={d.file} className=" flex-grow flex-shrink-0  h-[276px] relative overflow-hidden bg-[#e9e9e9]" />
                    <div className=" flex-grow flex-shrink-0  h-[311px] relative overflow-hidden bg-[#f2f2f2]" >
                        {d.content}
                    </div>
                </div>
            </>)}

        </>
    )
}

export default page