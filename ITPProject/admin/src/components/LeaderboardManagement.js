import React, { useState, useEffect } from "react";
import Leaderboard_rank_card from "./Leaderboard_rank_card";
import axios from "axios";

export default function LeaderboardManagement() {
  const pageid = "Aleaderboard";
  const [isFilterBtnChecked, setIsFilterBtnChecked] = useState(false);
  const [leaderboardDetails, setLeaderboardDetails] = useState([]);
  const [ascendingOrderbox, setascendingOrderbox] = useState(true);
  const [descendingOrderbox, setdescendingOrderbox] = useState(false);

  const filterBtnHandler = () => {
    setIsFilterBtnChecked(!isFilterBtnChecked);
  };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/${pageid}`)
      .then((result) => {
        setLeaderboardDetails(result.data);
      })
      .catch((err) => console.log(err));
  }, [pageid]);

  const clearLeaderbord = () => {
    axios
    .delete("http://localhost:3001/deleteAllLeaderboardRecords/")
    .then((res) => console.log(res))
    .catch((errr) => console.log(errr));
  }

  // const ascendingOrder = leaderboardDetails.slice().sort((a, b) => a.viewcount - b.viewcount);
  // const descendingOrder = leaderboardDetails.slice().sort((a, b) => b.viewcount - a.viewcount);
  

  return (
    <div className="py-5 px-7 text-white ">
      <h1 className=" text-[25px] font-bold mb-3">Leaderboard Management</h1>
      <button onClick={clearLeaderbord} className=" float-right bg-transparent text-[#FE7804] hover:text-white hover:bg-[#FE7804] border-2 border-[#FE7804] px-4 py-2 text-[18px] font-semibold rounded-lg">
        Clear Leaderboard
      </button>
      <div className="flex justify-start">
        <div className=" w-1/2 p-[2px] bg-gradient-to-l from-[#FE7804] to-[#FF451D] rounded-2xl">
          <input
            id="gameSearchbar"
            className=" bg-[#262628] text-[#FE7804] rounded-2xl w-full  px-3 py-2 placeholder-[#FE7804]"
            type="search"
            placeholder="Search Channel...."
          />
        </div>
        <button className=" bg-gradient-to-tr from-[#FF451D] to-[#FE7804] px-4 py-2 text-[18px] font-semibold rounded-lg ml-3">
          Search
        </button>
        <div className=" relative ml-3">
          <button
            onClick={filterBtnHandler}
            className=" bg-gradient-to-tr from-[#FF451D] to-[#FE7804] h-full px-2 text-[18px] font-semibold rounded-lg "
          >
            <img
              width="30"
              height="30"
              src="https://img.icons8.com/pulsar-line/48/FFFFFF/vertical-settings-mixer.png"
              alt="vertical-settings-mixer"
            />
          </button>
          {isFilterBtnChecked && (
            <div className=" absolute z-10 bg-black bg-opacity-85 pl-5 pr-10 py-3 leading-7">
              <pre   className=" hover:text-[#FE7804] cursor-pointer">Lowest View Count</pre>
              <pre   className=" hover:text-[#FE7804] cursor-pointer">Most View Count</pre>
            </div>
          )}
        </div>
      </div>

      <div className=" mx-auto bg-gradient-to-b from-[#FE7804] to-[#FF451D] text-[#D9D9D9] text-[20px] font-semibold py-2 px-7 flex justify-between w-full mt-8">
        <div className="w-[15%]">Rank</div>
        <div className="w-[65%]">Streamer</div>
        <div className="w-[15%]">Total Views</div>
        <div className="w-[15%]">Subscribers</div>
      </div>
      {/* {descendingOrderbox && (
  <div>
    {descendingOrder.map((item, index) => (
      <Leaderboard_rank_card
        key={index}
        rank={index + 1}
        streamer={item.channelname}
        views={item.viewcount}
        subscribers={item.subscribercount}
      />
    ))}
  </div>
)}

{ascendingOrderbox && (
  <div>
    {ascendingOrder.map((item, index) => (
      <Leaderboard_rank_card
        key={index}
        rank={index + 1}
        streamer={item.channelname}
        views={item.viewcount}
        subscribers={item.subscribercount}
      />
    ))}
  </div>
)} */}
{leaderboardDetails.map((item, index) => (
      <Leaderboard_rank_card
        key={index}
        rank={index + 1}
        streamer={item.channelname}
        views={item.viewcount}
        subscribers={item.subscribercount}
      />
    ))}


    </div>
  );
}
