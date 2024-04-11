import { useAppSelector } from "@/utils/store";
import { useEffect, useState } from "react";


function NavButton({title, cbFun}) {

  const route = useAppSelector(state => state?.uiReducer?.activeLink);

  return (
    <>
      <button
        className={`w-full ${route === title && "text-blue-500"}`}
        onClick={cbFun}
      >
        {title}
      </button>
    </>
  );
}

export default NavButton