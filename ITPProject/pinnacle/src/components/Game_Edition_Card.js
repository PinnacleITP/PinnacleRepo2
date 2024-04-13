import React from "react";
import cod2 from "../assets/games/cod2.jpg";

export default function Game_Edition_Card(props) {
  return (
    <div className=" bg-white bg-opacity-10">
      <img src={cod2} />
      <div className="p-6">
        <p className=" font-bold mb-4">{props.name}</p>
        <p className="text-[#ffffff73] text-[16px] line-through text-center">
          {typeof props.price === "number"
            ? `$${(props.price + 5).toFixed(2)}`
            : ""}
        </p>
        <p className="text-[#FF451D] text-lg font-bold text-center">
          {typeof props.price === "number" ? `$${props.price.toFixed(2)}` : ""}
        </p>

        <div className="mt-6 flex flex-col items-center">
          <span className=" bg-gradient-to-tr from-[#FF451D] to-[#FE7804] py-2 px-12 rounded-lg">
            <img
              className=" inline-block mr-3"
              hight="20"
              width="20"
              src="https://img.icons8.com/pastel-glyph/64/FFFFFF/shopping-cart--v1.png"
              alt="shopping-cart--v1"
            />
            <span className=" font-bold">Add to cart</span>
          </span>
        </div>
      </div>
    </div>
  );
}
