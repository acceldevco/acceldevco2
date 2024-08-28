"use client";
// import user from "@/app/lib/user";
import { createContext, useContext, useMemo, useState } from "react";

const UserContext = createContext(null);

export default function ({ children }: any) {
    const [state, setstate] = useState(null);
    async function Data(params: any) {
        // console.log(await user(localStorage.id, localStorage.data))
    }
    const value: any = useMemo(
        () => ({
          data: state,
          Data
        }),
        [state]
      );
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}

export function useContextUser() {
    const search = useContext(UserContext);
    console.log(useContext(UserContext));

    return search;
}