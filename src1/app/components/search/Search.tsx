"use client";
import { useEffect } from "react";
import { useContextSearch } from "./search-context";
import { dataPost } from "../../actions";

async function Search({ fnAction }: any) {
  const { filter }: any = useContextSearch();

  // const { data, error }: any = await fnAction();
  return (
    <div className="flex flex-col justify-start items-start overflow-hidden gap-2.5 px-[13px] py-[11px] bg-white">
      <form
        onSubmit={async (e: any) => {

          e.preventDefault()
          console.log(e.target[1].value);
          // console.log(data);
          console.log(await dataPost());

          // filter(fnAction())

        }}
        className="flex justify-start items-center self-stretch flex-grow-0 flex-shrink-0 relative gap-2"
      >
        <button type="submit">
          <svg
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="flex-grow-0 flex-shrink-0"
            preserveAspectRatio="xMidYMid meet"
          >
            <path
              d="M19.4707 16.812L15.0646 12.406C15.8318 11.1637 16.2956 9.71468 16.2956 8.14779C16.2956 3.6477 12.6479 0 8.14779 0C3.6477 0 0 3.6477 0 8.14779C0 12.6479 3.6477 16.2956 8.14779 16.2956C9.71468 16.2956 11.1637 15.8318 12.4047 15.0659L16.812 19.472C17.1667 19.8149 17.642 20.0048 18.1354 20.0006C18.6287 19.9964 19.1007 19.7984 19.4495 19.4495C19.7983 19.1005 19.996 18.6285 19.9999 18.1351C20.0039 17.6417 19.8138 17.1666 19.4707 16.812ZM8.14779 13.7886C5.03283 13.7886 2.50701 11.2628 2.50701 8.14779C2.50701 5.03283 5.03283 2.50701 8.14779 2.50701C11.2628 2.50701 13.7886 5.03283 13.7886 8.14779C13.7886 11.2628 11.2628 13.7886 8.14779 13.7886Z"
              fill="black"
            />
          </svg>
        </button>

        <input className="flex-grow-0 flex-shrink-0  h-7 relative overflow-hidden bg-neutral-100" />
      </form>
    </div>
  );
}

export default Search;
