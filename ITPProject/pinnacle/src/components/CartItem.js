import React, { useState, useEffect } from "react";
import cod2 from "../assets/games/cod2.jpg";
import axios from "axios";

export default function CartItem(props) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
    props.onCheckboxChange(props.id, !isChecked, props.price, props.game); // Call parent function to update selected items
  };

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteItem/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="text-white">
      <div className="flex justify-between py-4 px-8 mb-4 rounded-[10px]  bg-[#1B1E20] shadow-lg shadow-[#ffffff1a] ">
        <div className="flex">
          <input
            type="checkbox"
            className="mr-5 !block"
            checked={isChecked}
            onChange={handleCheckboxChange}
          />

          <img src={cod2} alt="trash--v1" width="180" height="75" />
        </div>
        <div className="  w-[38%]  items-center flex ">
          <div>
            <p className=" text-lg font-bold">{props.game}</p>
            <p className="text-md">
              {typeof props.price === "number"
                ? `$${props.price.toFixed(2)}`
                : ""}
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <button className=" mr-8 px-12  py-2 bg-gradient-to-r from-[#FF451D] to-[#FE7804] text-white rounded-[10px] text-md  font-semibold">
            Buy Now
          </button>
          <div>
            <img
              width="28"
              height="28"
              src="https://img.icons8.com/material-outlined/24/Ffffff/trash--v1.png"
              alt="trash--v1"
              className="float-right cursor-pointer"
              onClick={(e) => handleDelete(props.id)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
