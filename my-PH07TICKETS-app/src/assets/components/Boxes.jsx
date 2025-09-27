import React from "react";

const Boxes = ({ inProgressCount, resolvedCount }) => {
  return (
    <div className="bg-gradient">
      <div className=""></div>
      <div className="container mx-auto grid grid-cols-2 gap-[20px] p-4 my-[50px] ">
        <div style={{backgroundImage: "url('/vector1.png'), linear-gradient(to right, #632EE3, #9F62F2)",}} className="rounded-md p-7  text-white flex flex-col items-center justify-center">
          <h2 className="font-bold text-[35px]">In-Progress</h2>
          <p className="font-semibold text-[26px]">{inProgressCount}</p>
        </div>

        <div style={{backgroundImage: "url('/vector1.png'), linear-gradient(to right, #54CF68, #00827A)",}} className="rounded-md p-7 text-white bg-gradient-to-r from-[#54CF68] to-[#00827A] flex flex-col items-center justify-center ">
          <h2 className="font-bold text-[35px]">Resolve</h2>
          <p className="font-semibold text-[26px]">{resolvedCount}</p>
        </div>
      </div>
    </div>
  );
};

export default Boxes;
