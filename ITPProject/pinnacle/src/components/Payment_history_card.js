import React, {useState} from "react";
import axios from "axios";
import DeleteWorning from "../assets/payment/deleteanimation.webm";
import SuccessPopup from "../components/SuccessPopup";
import { HashLoader } from "react-spinners";


export default function Payment_history_card(props) {
  var id = props.id;
  const [deleteConfirmMessage, setDeleteConfirmMessage] = useState(false);
  const [deleteSuccessMessagechecked, setDeleteSuccessMessagechecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handlePaymentHistoryDelete = (id) =>{
    setLoading(true);
    axios.delete('http://localhost:3001/deletePaymentHistory/'+id)
    .then(res => {
      console.log(res);
      setLoading(false);
    setDeleteSuccessMessagechecked(true);
  })
    .catch(errr => console.log(errr))
  }

  const handleDeleteCloseSuccessPopup = () => {
    setDeleteSuccessMessagechecked(false);
  };

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
        onClick={() => setDeleteConfirmMessage(true)}
          className=" ml-9 cursor-pointer"
          width="24"
          height="24"
          src="https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png"
          alt="trash--v1"
        />
      </div>

      {deleteConfirmMessage && (
        <div className=" z-50 fixed top-0 left-0 w-full h-screen flex justify-center bg-black bg-opacity-80 items-center">
          <div className=" flex flex-col justify-center items-center w-[28%] border-2 border-[#FE7804] border-opacity-50 rounded-lg bg-[#1B1E20]">
            <div className="mt-6">
              <video autoPlay loop className="w-[150px] h-auto">
                <source src={DeleteWorning} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            </div>
            <h1 className=" text-[#FE7804] text-[32px] font-bold">Warning!</h1>
            <p className=" mt-5 text-center text-[#b6b6b6] text-base">
              Once you delete record, thre's no getting it back.<br/>
              Make suer you want to do this.
            </p>
            <div className=" w-full mt-12 mb-5 flex justify-end px-8">
            <button
                onClick={() => setDeleteConfirmMessage(false)}
                className=" bg-transparent border-2 border-[#FE7804] text-[#FE7804] hover:bg-[#FE7804] hover:text-white rounded-lg py-2 px-5 mr-4 font-semibold"
              >
                Cancel
              </button>
              <button
                onClick={(e) => {handlePaymentHistoryDelete(props.id);
                setDeleteConfirmMessage(false);}}
                className=" bg-[#FE7804] border-2 border-[#FE7804] hover:bg-[#FF451D] hover:border-[#FF451D] rounded-lg py-2 px-5 text-white font-semibold"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}

{loading && (
        <div className=" z-50 fixed top-0 left-0 w-full h-screen flex justify-center bg-black bg-opacity-50 items-center">
          <HashLoader size="75" color="#FE7804" />
        </div>
      )}


{deleteSuccessMessagechecked && (
  <SuccessPopup  type="Delete" item="Community post" onClose={handleDeleteCloseSuccessPopup} /> 
)}
    </div>
  );
}
