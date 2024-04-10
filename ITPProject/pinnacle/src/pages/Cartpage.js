import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import CartItem from "../components/CartItem";
import axios from "axios";

export default function Cartpage() {
  const [selectedItems, setSelectedItems] = useState([]);
  const [ItemDetails, setItemDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  var memberID = "66118d9104fb9c92e1c7d980";

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getCartItemByMemberID/${memberID}`)
      .then((result) => setItemDetails(result.data))
      .catch((err) => console.log(err));
  }, [memberID]);

  // Function to handle checkbox change and update selected items
  const handleCheckboxChange = (itemId, isChecked, price, game) => {
    if (isChecked) {
      setSelectedItems([
        ...selectedItems,
        { id: itemId, price: price, game: game },
      ]);
      setTotalAmount(totalAmount + price); // Update total amount
    } else {
      setSelectedItems(selectedItems.filter((item) => item.id !== itemId));
      setTotalAmount(totalAmount - price); // Update total amount
    }
  };

  return (
    <div>
      <Header navid="home" />

      <div className="flex mt-10 justify-between w-11/12 mx-auto text-white ">
        <div className="w-[70%] ">
          <h1 className="p-2  font-bold  text-[28px]">My Cart</h1>
          <div className="border-r border-gray-500 w-full h-full pr-10 pt-8">
            {ItemDetails.map((item) => {
              return (
                <CartItem
                  id={item._id}
                  image={item.image}
                  game={item.game}
                  price={item.price}
                  onCheckboxChange={handleCheckboxChange}
                />
              );
            })}
          </div>
        </div>
        <div className="w-[30%] pl-10">
          <h1 className=" p-2 font-bold text-[28px]">Selected Items</h1>
          <div className="pt-8">
            <div className="p-5 bg-[#202022] rounded-[10px] ">
              {/* <h1 className="text-[20px] font-semibold mb-5">Selected Items</h1> */}
              {selectedItems.length === 0 ? (
                <p>
                  No item selected
                  <div className=" text-center text-[#D9D9D9] text-opacity-65 text-sm mt-5">
                    <span>
                      Please select required games inorder to make payment
                    </span>
                  </div>
                </p>
              ) : (
                selectedItems.map((item) => (
                  <p
                    key={item.id}
                    className="py-1  text-[#D9D9D9] text-opacity-65"
                  >
                    <span>{`${item.game}`}</span>
                    <span className="float-right">
                      {typeof item.price === "number"
                        ? `$${item.price.toFixed(2)}`
                        : ""}
                    </span>
                  </p>
                ))
              )}

              <div className="flex justify-between mt-10 align-middle text-[18px] font-semibold">
                <p>Sub Total :</p>
                <p className="text-md">
                  {typeof totalAmount === "number"
                    ? `$${totalAmount.toFixed(2)}`
                    : ""}
                </p>
              </div>
              <div>
                <button className="basis-2/15 bg-gradient-to-b from-[#FF451D] to-[#FE7804] text-white w-full  py-1 rounded-[10px] text-lg font-bold mt-6">
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
