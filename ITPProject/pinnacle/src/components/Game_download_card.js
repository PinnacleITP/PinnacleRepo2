import React, { useState, useEffect } from "react";
import COD2 from "../assets/games/cod2.jpg";
import axios from 'axios';

export default function Game_download_card(props) {
  const [gameDetail, setGameDetail] = useState([]);

  useEffect(() => {
    axios
        .get(`http://localhost:3001/getGamebyID/${props.gameid}`)
        .then((result) => {
          setGameDetail(result.data);
        })
        .catch((err) => console.log(err));
  }, []);

  return (
    <div className="flex justify-between items-center py-5 px-10 my-3 bg-[#1B1E20] rounded-lg shadow-lg shadow-[#ffffff1a]">
      <div className="flex items-center h-full">
        <img className="h-[70px] w-[125px]" src={gameDetail.gameImageUrl} alt="game-image" />
        <span className="font-semibold text-white text-xl ml-10 ">{gameDetail.name}</span>
      </div>
      <div className="flex h-full items-center">
        <span className=" bg-gradient-to-tr from-[#FE7804] to-[#FF451D] rounded-lg text-white font-semibold py-2 px-8">Install now</span>
        <img
          className=" cursor-pointer float-right ml-14"
          width="24px"
          height="24px"
          src="https://img.icons8.com/material-outlined/24/FFFFFF/trash--v1.png"
          alt="trash--v1"
        />
      </div>
    </div>
  );
}
