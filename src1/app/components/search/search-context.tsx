"use client";
import { createContext, useContext, useMemo, useOptimistic, useState } from "react";

const SearchContext = createContext(null);
export default function ({ children }: any) {
  const [state, setstate] = useState(null);
  async function filter(params: any) {
    const { data } = await params()
    console.log(data);
  }


  const value: any = useMemo(
    () => ({
      data: state,
      filter,
    }),
    [state]
  );
  return <SearchContext.Provider value={value}>{children}</SearchContext.Provider>

}

export function useContextSearch() {
  const search = useContext(SearchContext);
  return search;
}