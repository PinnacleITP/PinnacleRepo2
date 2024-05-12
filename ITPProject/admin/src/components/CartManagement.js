import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CartManagement() {
  var pageid = "cart";

  const [cartDetails, setCartDetails] = useState([]);
  const [genreCounts, setGenreCounts] = useState([]);

 useEffect(() => {
  axios
    .get(`http://localhost:3001/${pageid}`)
    .then((result) => {
      setCartDetails(result.data);

      // Calculate genre counts
      const counts = {};
      result.data.forEach((item) => {
        counts[item.ganre] = (counts[item.ganre] || 0) + 1;
      });
      setGenreCounts(counts);
    })
    .catch((err) => console.log(err));
}, [pageid]);

  return (
    <div>
      <button
        // onClick={createAndDownloadPDF}
        className="m-5 bg-gradient-to-tr from-[#FF451D] to-[#FE7804] px-4 py-2 text-[18px] font-semibold rounded-lg"
      >
        Download PDF
      </button>
      <div>
        <h2>Action Count: {genreCounts["action"] || 0}</h2>
        <h2>Adventure Count: {genreCounts["adventure"] || 0}</h2>
        <h2>Racing Count: {genreCounts["racing"] || 0}</h2>
        <h2>Shooter Count: {genreCounts["shooter"] || 0}</h2>
        <h2>Sports Count: {genreCounts["sports"] || 0}</h2>
      </div>
      
      {/* <div className=" flex justify-between flex-wrap">
        {cartDetails.map((cartitem) => {
          return (
            <div className=" w-[30%]">
              <img src={cartitem.image} alt={cartitem.game} />
              <h1>Member ID: {cartitem.memberID}</h1>
              <h1>Game ID: {cartitem.gameID}</h1>
              <h1>Game: {cartitem.game}</h1>
              <h1>Price: {cartitem.price}</h1>
              <h1>Ganre: {cartitem.ganre}</h1>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
