import React, { useState } from "react";
import Header from "../components/Header";
import RankIcon from "../assets/myAccount/rankicon.png";
import XPIcon from "../assets/myAccount/xpicon.png";
import MembershipIcon from "../assets/myAccount/membershipicon.png";
import CrystalIcon from "../assets/myAccount/crystalicon.png";
import Mastre1Icon from "../assets/myAccount/master1.png";
import Mastre3Icon from "../assets/myAccount/master3.png";
import LegendIcon from "../assets/myAccount/legend.png";
import Payment_history_card from "../components/Payment_history_card";
import Game_download_card from "../components/Game_download_card";

export default function Myaccount() {
  const [selectedDiv, setSelectedDiv] = useState("Dashboard");
  const [channelDiv, setChannelDiv] = useState("MyChannels");

  const handleDivClick = (divId) => {
    setSelectedDiv(divId === selectedDiv ? null : divId);
  };

  const handleChannel = (divId) => {
    setChannelDiv(divId === channelDiv ? null : divId);
  };

  var xpPoints = 40;

  return (
    <div>
      <Header navid="home" />
      <div className="h-1/4 p-8 flex flex-row justify-center">
        <div className="flex justify-center">
          <img
            className="h-32 w-32"
            src="https://img.icons8.com/ios-filled/100/FD7E14/user-male-circle.png"
            alt="user-male-circle"
          />
        </div>
        <div className="px-5">
          <h1 className="font-bold text-[40px] text-white">
            Jonathan durairaj
          </h1>
          <span className="bg-gradient-to-b from-[#FF451D] to-[#FE7804] text-white px-2 py-1 rounded-2xl text-[14px]">
            Primium
          </span>
          <span className="text-[20px] text-[#ffffff8d] ml-2">Member</span>
          <div className="pt-2">
            <span className="text-[16px] text-[#ffffff8d] font-bold ">
              Level 4
            </span>
            <span className="text-[16px] text-[#ffffff8d] float-right">
              440 xp
            </span>
          </div>
          <div className="relative">
            <div className="bg-[#fe790460] w-full h-[3px] absolute top-[1px] left-0 rounded-sm"></div>
            <div className="bg-[#FF451D] h-[5px] w-28 absolute top-0 left-0 z-10 rounded-sm"></div>
          </div>
        </div>
      </div>

      <div className=" mx-auto pb-[2px] w-11/12 bg-gradient-to-r from-[#FF451D] to-[#FE7804]">
        <div className="flex flex-row w-full  relative bg-[#2A2B2F]">
          <div
            className={`py-2 px-5 rounded-t-[10px] ${
              selectedDiv === "Dashboard"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="dashboard" />
            <label
              htmlFor="dashboard"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Dashboard")}
            >
              Dashboard
            </label>
          </div>
          <div
            className={`py-2 px-5 rounded-t-[10px] ${
              selectedDiv === "Channels"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="Channels" />
            <label
              htmlFor="Channels"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Channels")}
            >
              Channels
            </label>
          </div>
          <div
            className={`py-2 px-5 rounded-t-[10px] ${
              selectedDiv === "Purchase"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="Purchase" />
            <label
              htmlFor="Purchase"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Purchase")}
            >
              Purchases
            </label>
          </div>
          <div
            className={`py-2 px-5 rounded-t-[10px] ${
              selectedDiv === "Downloads"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="Downloads" />
            <label
              htmlFor="Downloads"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Downloads")}
            >
              Downloads
            </label>
          </div>
          <div
            className={`py-2 px-5 rounded-t-[10px] ${
              selectedDiv === "Reviews"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="Reviews" />
            <label
              htmlFor="Reviews"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Reviews")}
            >
              Reviews
            </label>
          </div>
          <div
            className={`py-2 px-5 rounded-t-[10px] ${
              selectedDiv === "Events"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="Events" />
            <label
              htmlFor="Events"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Events")}
            >
              Events
            </label>
          </div>
          <div
            className={`py-2 px-5 rounded-t-[10px]  ${
              selectedDiv === "Settings"
                ? "bg-gradient-to-t from-[#FF451D] to-[#FE7804]"
                : ""
            }`}
          >
            <input type="checkbox" id="Settings" />
            <label
              htmlFor="Settings"
              className="text-white font-medium hover:text-[#FF451D] cursor-pointer"
              onClick={() => handleDivClick("Settings")}
            >
              Settings
            </label>
          </div>
        </div>
      </div>

      {/* ######################### Dashboard ########################   */}
      {selectedDiv === "Dashboard" && (
        <div className=" flex w-11/12 mx-auto">
          <div className=" w-2/5 ">
            <div className="bg-[#ffffff1a] rounded-3xl mt-9 flex flex-col items-center pt-9 pb-5">
              <img
                className="h-[200px] w-[225px]"
                src={Mastre3Icon}
                alt="rank-icon"
              />
              <span className=" text-[#FE7804] text-3xl font-bold mt-6">
                Master III
              </span>
              <span className=" text-[#ffffff8d] text-xl">League</span>
              <div className="mt-9 w-full px-9">
                <span className=" text-white text-lg font-bold w-full">
                  Next Targets
                </span>
                <div className="flex items-center mt-5">
                  <img
                    className="h-[55px] w-[62px]"
                    src={Mastre3Icon}
                    alt="rank-icon"
                  />
                  <span className=" text-[#ffffff92] font-bold text-base pl-8">
                    Master II
                  </span>
                </div>
                <div className="flex items-center mt-5">
                  <img
                    className="h-[55px] w-[62px]"
                    src={Mastre1Icon}
                    alt="rank-icon"
                  />
                  <span className=" text-[#ffffff92] font-bold text-base pl-8">
                    Master I
                  </span>
                </div>
                <div className="flex items-center mt-5">
                  <img
                    className="h-[55px] w-[62px]"
                    src={LegendIcon}
                    alt="rank-icon"
                  />
                  <span className=" text-[#ffffff92] font-bold text-base pl-8">
                    Legend
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col w-3/5">
            <div className=" w-full flex justify-around px-5">
              <div className="flex flex-col items-center  py-8 mt-9 bg-[#ffffff1a] w-5/12 rounded-3xl">
                <img
                  className="h-[70px] w-[70px]"
                  src={RankIcon}
                  alt="rank-icon"
                />
                <span className="text-[25px] text-white font-bold my-4">
                  Ranking
                </span>
                <div className="w-2/3 h-[2px] bg-[#ffffff50]"></div>
                <span className="text-[18px] text-white my-7">Level 4</span>
              </div>

              <div className=" bg-[#ffffff1a] w-5/12 flex flex-col items-center py-8 mt-9 rounded-3xl">
                <img className="h-[65px] w-[65px]" src={XPIcon} alt="xp-icon" />
                <span className="text-[25px] text-white font-bold my-4">
                  Experience Points
                </span>
                <div className="w-2/3 h-[2px] bg-[#ffffff50]"></div>
                <span className="text-[18px] text-white my-7">440 Points</span>
                <div className="w-2/3">
                  <span className="text-[13px] text-[#ffffff8d]">400 xp</span>
                  <span className="text-[13px] text-[#ffffff8d] float-right">
                    500 xp
                  </span>
                </div>
                <div className="relative w-2/3">
                  <div className="bg-[#fe790460] w-full h-[3px] absolute top-[1px] left-0 rounded-sm"></div>
                  <div className="bg-[#FF451D] h-[5px] w-28 absolute top-0 left-0 z-10 rounded-sm"></div>
                </div>
              </div>
            </div>

            <div className=" w-full flex justify-around px-5">
              <div className="flex flex-col items-center  py-8 mt-9 bg-[#ffffff1a] w-5/12 rounded-3xl">
                <img
                  className="h-[70px] w-[70px]"
                  src={CrystalIcon}
                  alt="crystal-icon"
                />
                <span className="text-[25px] text-white font-bold my-4">
                  Crystals
                </span>
                <div className="w-2/3 h-[2px] bg-[#ffffff50]"></div>
                <span className="text-[18px] text-white my-7">30 Crystals</span>
              </div>

              <div className=" bg-[#ffffff1a] w-5/12 flex flex-col items-center py-8 mt-9 rounded-3xl">
                <img
                  className="h-[65px] w-[65px]"
                  src={MembershipIcon}
                  alt="rank-icon"
                />
                <span className="text-[25px] text-white font-bold my-4">
                  Membership
                </span>
                <div className="w-2/3 h-[2px] bg-[#ffffff50]"></div>
                <span className="text-[18px] text-white my-7">Gold Member</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ######################### Channels ########################   */}
      {selectedDiv === "Channels" && (
        <div className="w-11/12 mx-auto mt-3">
          <div className="py-5">
            <span
              className=" py-2 px-4 border-2 border-[#FE7804] rounded-3xl text-[#FE7804] font-semibold mr-6 cursor-pointer hover:bg-gradient-to-t from-[#FF451D] to-[#FE7804] hover:text-white"
              onClick={() => handleChannel("MyChannels")}
            >
              My channel
            </span>
            <span
              className=" py-2 px-4 border-2 border-[#FE7804] rounded-3xl text-[#FE7804] font-semibold mr-6 cursor-pointer hover:bg-gradient-to-t from-[#FF451D] to-[#FE7804] hover:text-white"
              onClick={() => handleChannel("MySubcriptions")}
            >
              My Subscriptions
            </span>

            {/* ######################### MyChannels ########################   */}
            {channelDiv === "MyChannels" && (
              <div className="text-white px-5 mt-3">
                <h1>MyChannels</h1>
              </div>
            )}

            {/* ######################### MySubcriptions ########################   */}
            {channelDiv === "MySubcriptions" && (
              <div className="text-white px-5 mt-3">
                <h1>MySubcriptions</h1>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ######################### Purchases ########################   */}
      {selectedDiv === "Purchase" && (
        <div className="w-11/12 mx-auto mt-5">
          <h1 className="text-white text-2xl font-bold mb-6">
          Purchase History
          </h1>
          <div className="flex ">
            <div className=" w-1/2 p-[2px] bg-gradient-to-l from-[#FE7804] to-[#FF451D] rounded-lg">
              <input
                className=" bg-[#2A2B2F] text-[#FE7804] rounded-lg w-full  px-3 py-2 placeholder-[#FE7804]"
                type="search"
                placeholder="Search Payment"
              />
            </div>
            <div className="w-1/2 flex justify-between px-3">
              <span className="h-full bg-gradient-to-r from-[#FE7804] to-[#FF451D] rounded-lg flex items-center px-8 text-white font-semibold">
                Search
              </span>
              <span className="h-full bg-transparent border-2 border-[#FE7804] rounded-lg flex items-center px-8 text-[#FE7804] font-semibold">
                Clear All
              </span>
            </div>
          </div>

          <br />
          <Payment_history_card
            reason="Gold Plan"
            amount="10.00"
            date="10/02/2024"
          />
          <Payment_history_card
            reason="Call of Duty - Modern warefire III "
            amount="18.00"
            date="08/01/2024"
          />
          <Payment_history_card
            reason="Mobile legends"
            amount="20.00"
            date="19/12/2023"
          />
          <Payment_history_card
            reason="Asphalt 8"
            amount="22.00"
            date="10/02/2023"
          />
        </div>
      )}

      {/* ######################### Downloads ########################   */}
      {selectedDiv === "Downloads" && (
        <div className="w-11/12 mx-auto mt-5">
          <h1 className="text-white text-2xl font-bold mb-6">My Games</h1>
          <div className="flex mb-8">
            <div className=" w-1/2 p-[2px] bg-gradient-to-l from-[#FE7804] to-[#FF451D] rounded-lg">
              <input
                className=" bg-[#2A2B2F] text-[#FE7804] rounded-lg w-full  px-3 py-2 placeholder-[#FE7804]"
                type="search"
                placeholder="Search Games"
              />
            </div>
            <div className="px-3">
            <span className="h-full bg-gradient-to-r from-[#FE7804] to-[#FF451D] rounded-lg flex items-center px-8 text-white font-semibold">
              Search
            </span>
            </div>
          </div>
          <Game_download_card
            id="1"
            name="Call of Duty - Modern warefire III"
          />
          <Game_download_card id="1" name="Aspalt 8" />
          <Game_download_card id="1" name="Mobile legends" />
        </div>
      )}

      {/* ######################### Reviews ########################   */}
      {selectedDiv === "Reviews" && (
        <div className="w-11/12 mx-auto mt-3">
          <h1>Reviews</h1>
        </div>
      )}

      {/* ######################### Events ########################   */}
      {selectedDiv === "Events" && (
        <div className="w-11/12 mx-auto px-5 mt-3">
          <h1>Events</h1>
        </div>
      )}

      {/* ######################### Settings ########################   */}
      {selectedDiv === "Settings" && (
        <div className="w-11/12 mx-auto mt-3">
          <h1>Settings</h1>
        </div>
      )}
    </div>
  );
}
