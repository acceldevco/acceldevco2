"use client";
import SearchContext, { } from "../../components/search/search-context";
function layout({ children }: any) {


  return (
    <div>
      <SearchContext>
        {children}
      </SearchContext>

    </div>
  );
}

export default layout;
