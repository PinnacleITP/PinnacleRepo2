import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header";
import levinho from "../assets/leaderBoard/levinho.png";
import FirstPlaseMedel from "../assets/leaderBoard/firstplace.png";
import SecondPlaseMedel from "../assets/leaderBoard/scondplace.png";
import ThirdPlaseMedel from "../assets/leaderBoard/thirdplace.png";
import Footer from "../components/Footer";
import Leaderboard_rank_card from "../components/Leaderboard_rank_card";

export default function Leaderboardpage() {
  var pageid='LeaderBoard'
  const [leaderBoardDetails, setLeaderBoardDetails] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${pageid}`)
      .then((result) => setLeaderBoardDetails(result.data))
      .catch((err) => console.log(err));
  }, [pageid]);



  return (
    <div>
      <Header navid="home" />
      <div className="w-11/12 mt-5 mx-auto h-1/2">
        <h1 className="text-white text-[32px] font-bold ">
          Streamers Leaderboard
        </h1>
        <h1 className="text-[#FE7804] text-[20px] font-bold text-center mt-5">
          Last month's Standout Stars
        </h1>
        <div className=" flex justify-around h-full mt-10 px-10">
          <div
            className="bg-cover bg-center w-[20%] h-full flex-col justify-center py-5 mt-4"
            style={{
              backgroundImage: `url(${require("../assets/leaderBoard/leaderboardsecondplase.png")})`,
            }}
          >
            <div className=" bg-gradient-to-t from-[#876415] to-[#C9AA64] p-1 mx-auto w-[102px] rounded-full my-10">
              <img
                src={levinho}
                alt="trash--v1"
                width="100"
                height="100"
                className="rounded-full "
              />
            </div>
            <h1 className=" text-white text-[25px] text-center font-bold">
            {leaderBoardDetails[1]?.channelname}
            </h1>
            <h1 className="text-[85px] text-[#F1CA71] font-extrabold text-center">
              2
            </h1>
            <img
              src={SecondPlaseMedel}
              alt="trash--v1"
              width="150"
              height="150"
              className="mb-14 mx-auto mt-[-30px]"
            />
          </div>

          <div
            className="bg-cover bg-center w-[22%] h-full flex-col justify-center py-5"
            style={{
              backgroundImage: `url(${require("../assets/leaderBoard/leaderboardfirstplase.png")})`,
            }}
          >
            <div className=" bg-gradient-to-t from-[#876415] to-[#C9AA64] p-1 mx-auto w-[102px] rounded-full my-10">
              <img
                src={levinho}
                alt="trash--v1"
                width="100"
                height="100"
                className="rounded-full "
              />
            </div>
            <h1 className=" text-white text-[25px] text-center font-bold">
            {leaderBoardDetails[0]?.channelname}
            </h1>
            <h1 className="text-[96px] text-[#F1CA71] font-extrabold text-center">
              1
            </h1>
            <img
              src={FirstPlaseMedel}
              alt="trash--v1"
              width="200"
              height="200"
              className="mb-14 mx-auto mt-[-50px]"
            />
          </div>

          <div
            className="bg-cover bg-center w-[20%] h-full flex-col justify-center py-5 mt-4"
            style={{
              backgroundImage: `url(${require("../assets/leaderBoard/leaderboardsecondplase.png")})`,
            }}
          >
            <div className=" bg-gradient-to-t from-[#876415] to-[#C9AA64] p-1 mx-auto w-[102px] rounded-full my-10">
              <img
                src={levinho}
                alt="trash--v1"
                width="100"
                height="100"
                className="rounded-full "
              />
            </div>
            <h1 className=" text-white text-[25px] text-center font-bold">
            {leaderBoardDetails[2]?.channelname}
            </h1>
            <h1 className="text-[81px] text-[#F1CA71] font-extrabold text-center">
              3
            </h1>
            <img
              src={ThirdPlaseMedel}
              alt="trash--v1"
              width="150"
              height="150"
              className="mb-14 mx-auto mt-[-10px]"
            />
          </div>
        </div>

        <div className="my-10">
          <div className="my-4">
            <h1>
              <span className=" text-[23px] text-white font-bold ">
                Top Streames
              </span>
              <span className="text-[18px] text-white float-right">
                Current Season
              </span>
            </h1>
          </div>
          <div className=" bg-gradient-to-b from-[#FE7804] to-[#FF451D] text-[#D9D9D9] text-[20px] font-semibold py-2 px-7 flex justify-between">
            <div className="w-[15%]">Rank</div>
            <div className="w-[65%]">Streamer</div>
            <div className="w-[15%]">Total Views</div>
            <div className="w-[15%]">Subscribers</div>
          </div>
          {leaderBoardDetails.map((item, index) => {
              return (
                <Leaderboard_rank_card rank={index+1} streamer={item.channelname} views={item.viewcount} subscribers={item.subscribercount}/>
              );
            })}
          
        </div>
      </div>
      <Footer />
    </div>
  );
}
