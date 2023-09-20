import React from "react";
import { RiArrowDownSLine } from "react-icons/ri";
import { MdOutlineDashboardCustomize } from "react-icons/md";
const Leftbar = () => {
  const [clicked, setClicked] = React.useState(true);

  const handleClick = () => {
    setClicked(!clicked);
  };
  return (
    <div className="text-white p-5 border-r border-gray-500 ">
      <div className="uppercase relative flex flex-col gap-2 mb-5">
        <div>Status</div>
        <div className="flex gap-3 items-center relative">
          <div
            className={
              "border p-1  rounded-full w-5 h-5 " +
              (clicked ? "bg-yellow-400" : "bg-cyan-700")
            }
            onClick={handleClick}
          ></div>
          Only buy now
        </div>
        <div className="flex gap-3 items-center relative">
          <div
            className={
              "border p-1  rounded-full w-5 h-5 " +
              (clicked ? "bg-cyan-400" : "bg-yellow-700")
            }
            onClick={handleClick}
          ></div>
          Show all
        </div>
      </div>
      <div className="uppercase border-b border-gray-500 pb-7">
        <div className="flex justify-between gap-60 p-1  hover:bg-slate-800">
          <div>Rarity</div>
          <div className="text-2xl">
            <RiArrowDownSLine />
          </div>
        </div>
        <div className="flex justify-between p-1 hover:bg-slate-800">
          <div>PRICE</div>
          <div className="text-2xl">
            <RiArrowDownSLine />
          </div>
        </div>
      </div>
      <div className="mt-5 relative">
        <div className="flex mb-6">
          <h1 className="flex items-center gap-3">
            <MdOutlineDashboardCustomize className="text-xl" />
            TRAITS
          </h1>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        <div className="flex justify-between hover:bg-slate-800 p-1 cursor-pointer">
          <div>Background</div>
          <RiArrowDownSLine className="text-2xl" />
        </div>
        <div className="flex justify-between hover:bg-slate-800 p-1 cursor-pointer">
          <div>Background</div>
          <RiArrowDownSLine className="text-2xl" />
        </div>
        <div className="flex justify-between hover:bg-slate-800 p-1 cursor-pointer">
          <div>Background</div>
          <RiArrowDownSLine className="text-2xl" />
        </div>
        <div className="flex justify-between hover:bg-slate-800 p-1 cursor-pointer">
          <div>Background</div>
          <RiArrowDownSLine className="text-2xl" />
        </div>
        <div className="flex justify-between hover:bg-slate-800 p-1 cursor-pointer">
          <div>Background</div>
          <RiArrowDownSLine className="text-2xl" />
        </div>
        <div className="flex justify-between hover:bg-slate-800 p-1 cursor-pointer">
          <div>Background</div>
          <RiArrowDownSLine className="text-2xl" />
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
