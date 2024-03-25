import React from 'react'

function Loader() {
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <div className="w-10 aspect-square animate-spin ease-in-out rounded-full border border-red-700 border-l-cyan-700 border-t-emerald-700 border-b-blue-700 justify-center" />
    </div>
  );
}

export default Loader