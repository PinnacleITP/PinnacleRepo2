import React from "react";


export default function Payment_history_card(props) {
  var id = props.id;
  return (
    <div className="py-5 px-10 my-3 bg-[#1B1E20] rounded-lg items-center flex justify-between shadow-lg shadow-[#ffffff1a]">
      <div className="">
        <span className="font-semibold text-[#FE7804] text-xl ">
          {props.reason}
        </span>
        <p className=" text-[#D9D9D9] text-opacity-60 text-base">
          {props.date}
        </p>
      </div>
      <div className="flex">
        <h1 className="font-semibold text-[#D9D9D9] text-xl">
          $ {props.amount}
        </h1>
        <img
          className=" ml-9 cursor-pointer"
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png"
          alt="trash--v1"
        />
      </div>
    </div>
  );
}
