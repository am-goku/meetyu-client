"use client"
import React, { useState } from "react";
import NewImageModal from "../modals/NewImageModal";

function NewImage() {
    const [state, setState] = useState(false);
    const triggerallback = () => {
        
    }
  return (
    <>
      <div className="w-64 bg-emerald-400 p-2 flex justify-center items-center cursor-pointer rounded">
        {/* <h1 className="text-9xl -translate-y-3">+</h1> */}
        <NewImageModal />
      </div>
    </>
  );
}

export default NewImage;
