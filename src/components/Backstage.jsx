import React from "react";

function Backstage() {
  return (
    <>
      <div className="absolute z-[2] w-full h-screen bg-zinc-800">
        <h4 className="absolute w-full p-5 my-5 flex justify-center items-center font-semibold text-zinc-600 text-xl">Documents</h4>
        <h2 className="absolute text-white top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-[10em] text-zinc-900 font-semibold">
          Docs.
        </h2>
      </div>
    </>
  );
}

export default Backstage;
