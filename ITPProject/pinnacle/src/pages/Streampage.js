import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import CallofDuty from "../assets/streams/cod.jpg";
import MobileLegends from "../assets/streams/mobilelegends.jpg";
import Gtav from "../assets/streams/gtav.jpg";
import Asphalt8 from "../assets/streams/asphalt8.png";
import PUBGMobile from "../assets/streams/pubg.jpg";
import Warzone from "../assets/streams/warezone.jpg";
import Roblox from "../assets/streams/roblox.jpg";
import Footer from "../components/Footer";
import Stream_Display_Card from "../components/Stream_Display_Card";
import SearchError from "../assets/payment/searchnotfound.webm";

export default function Streampage() {
  const [isAllChecked, setIsAllCkecked] = useState(true);
  const [isActionChecked, setIsActionCkecked] = useState(false);
  const [isAdventureChecked, setIsAdventureCkecked] = useState(false);
  const [isRacingChecked, setIsRacingCkecked] = useState(false);
  const [isShootingChecked, setIsShootingCkecked] = useState(false);
  const [isSportChecked, setIsSportCkecked] = useState(false);

  const allGameHandler = () => {
<<<<<<< Updated upstream
=======
    setEnableSearchDiv(false);
    setIisGameFilterChecked(false);
>>>>>>> Stashed changes
    setIsAllCkecked(true);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
  };

  const actionGameHandler = () => {
<<<<<<< Updated upstream
=======
    setEnableSearchDiv(false);
    setIisGameFilterChecked(false);
>>>>>>> Stashed changes
    setIsAllCkecked(false);
    setIsActionCkecked(true);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
  };

  const adventureGameHandler = () => {
<<<<<<< Updated upstream
=======
    setEnableSearchDiv(false);
    setIisGameFilterChecked(false);
>>>>>>> Stashed changes
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(true);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
  };

  const racingGameHandler = () => {
<<<<<<< Updated upstream
=======
    setEnableSearchDiv(false);
    setIisGameFilterChecked(false);
>>>>>>> Stashed changes
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(true);
    setIsShootingCkecked(false);
    setIsSportCkecked(false);
  };

  const shootingGameHandler = () => {
<<<<<<< Updated upstream
=======
    setEnableSearchDiv(false);
    setIisGameFilterChecked(false);
>>>>>>> Stashed changes
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(true);
    setIsSportCkecked(false);
  };

  const sportGameHandler = () => {
<<<<<<< Updated upstream
=======
    setEnableSearchDiv(false);
    setIisGameFilterChecked(false);
>>>>>>> Stashed changes
    setIsAllCkecked(false);
    setIsActionCkecked(false);
    setIsAdventureCkecked(false);
    setIsRacingCkecked(false);
    setIsShootingCkecked(false);
    setIsSportCkecked(true);
  };

<<<<<<< Updated upstream
=======
  //read all stream details
  useEffect(() => {
    axios
      .get(`http://localhost:3001/${pageid}`)
      .then((result) => setStreamDetailsCard(result.data))
      .catch((err) => console.log(err));
  }, [pageid]);

  //search streams
  const [searchResultArr, setSearchResultArr] = useState([]);
  const [enableSearchDiv, setEnableSearchDiv] = useState(false);

  const searchStreamsbyName = () => {
    setEnableSearchDiv(true);
    const searchInput = document.getElementById("streamsearchinput").value;
    console.log(searchInput);
    const searchedResult = streamDetailsCard.filter(
      (stream) =>
      stream.name &&
      stream.name
          .toLowerCase()
          .includes(searchInput.toLowerCase())
    );
    setSearchResultArr(searchedResult);
  }


>>>>>>> Stashed changes
  return (
    <div className="text-white">
      <Header navid="streams" />
      <div className=" w-11/12 mx-auto mt-7">
        <h1 className=" text-[28px] font-bold">
          MOST POPULAR STREAMS ON PINNACLE
        </h1>
        <div className=" flex justify-between mt-4">
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={CallofDuty} />
            <p className=" font-semibold text-center mt-3">Call of Duty</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={MobileLegends} />
            <p className=" font-semibold text-center mt-3">Mobile Legends</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={Gtav} />
            <p className=" font-semibold text-center mt-3">Gta v</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={Asphalt8} />
            <p className=" font-semibold text-center mt-3">Asphalt 8</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={PUBGMobile} />
            <p className=" font-semibold text-center mt-3">PUBG Mobile</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={Warzone} />
            <p className=" font-semibold text-center mt-3">Warzone</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={Roblox} />
            <p className=" font-semibold text-center mt-3">Roblox</p>
          </div>
          <div className=" w-[11%]">
            <img className=" w-full h-[250px]" src={CallofDuty} />
            <p className=" font-semibold text-center mt-3">Other</p>
          </div>
        </div>

        <div className="py-10 mt-2">
          <h1 className=" text-[28px] font-bold">GAME STREAMS</h1>
          <div className=" flex justify-start my-5">
            <div className=" w-4/5 p-[2px] bg-gradient-to-l from-[#FE7804] to-[#FF451D] rounded-2xl z-10">
              <input
              onKeyUp={searchStreamsbyName} id="streamsearchinput"
                className=" bg-[#262628] text-[#FE7804] rounded-2xl w-full  px-3 py-2 placeholder-[#FE7804]"
                type="search"
                placeholder="Search Streams...."
              />
            </div>
            <button  className=" bg-gradient-to-tr from-[#FF451D] to-[#FE7804] rounded-xl px-10 ml-4 font-semibold">
              Search
            </button>
          </div>
          <div className="flex mx-auto mt-9 font-semibold">
            <div
              onClick={allGameHandler}
              className=" mr-10 w-[10%] p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer"
            >
              <div className=" text-center text-[#FE7804] px-7 py-2 bg-[#2A2B2F] rounded-3xl hover:bg-transparent hover:text-white">
                All
              </div>
            </div>
            <div
              onClick={actionGameHandler}
              className=" mr-10 w-[10%] p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer"
            >
              <div className=" text-center text-[#FE7804] px-7 py-2 bg-[#2A2B2F] rounded-3xl hover:bg-transparent hover:text-white">
                Action
              </div>
            </div>
            <div
              onClick={adventureGameHandler}
              className=" mr-10 w-[10%] p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer"
            >
              <div className=" text-center text-[#FE7804] px-7 py-2 bg-[#2A2B2F] rounded-3xl hover:bg-transparent hover:text-white">
                Adventure
              </div>
            </div>
            <div
              onClick={racingGameHandler}
              className=" mr-10 w-[10%] p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer"
            >
              <div className=" text-center text-[#FE7804] px-7 py-2 bg-[#2A2B2F] rounded-3xl hover:bg-transparent hover:text-white">
                Racing
              </div>
            </div>
            <div
              onClick={shootingGameHandler}
              className=" mr-10 w-[10%] p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer"
            >
              <div className=" text-center text-[#FE7804] px-7 py-2 bg-[#2A2B2F] rounded-3xl hover:bg-transparent hover:text-white">
                Shooter
              </div>
            </div>
            <div
              onClick={sportGameHandler}
              className=" mr-10 w-[10%] p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer"
            >
              <div className=" text-center text-[#FE7804] px-7 py-2 bg-[#2A2B2F] rounded-3xl hover:bg-transparent hover:text-white">
                Sport
              </div>
            </div>
          </div>
        </div>
      </div>
<<<<<<< Updated upstream
=======

      {!enableSearchDiv && (<div>
{!isGameFilterChecked && (
>>>>>>> Stashed changes

      <div className=" w-11/12 mx-auto">
        {isAllChecked && (
          <div>
            <h1 className=" font-bold text-[22px] mb-5">Pinnacle Streams</h1>
            <div className="flex flex-wrap justify-between">
              <div className=" w-[30%]"><Stream_Display_Card /></div>
              <div className=" w-[30%]"><Stream_Display_Card /></div>
              <div className=" w-[30%]"><Stream_Display_Card /></div>
              <div className=" w-[30%]"><Stream_Display_Card /></div>
              <div className=" w-[30%]"><Stream_Display_Card /></div>
              <div className=" w-[30%]"><Stream_Display_Card /></div>
            </div>
          </div>
        )}

        {isActionChecked && <div></div>}

        {isAdventureChecked && <div></div>}

        {isRacingChecked && <div></div>}

        {isShootingChecked && <div></div>}

        {isSportChecked && <div></div>}
      </div>

<<<<<<< Updated upstream
=======
    {isGameFilterChecked && (
      <div className=" w-11/12 mx-auto">
          <div>
            <h1 className=" font-bold text-[22px] mb-5">Pinnacle Streams</h1>
            <div className="flex flex-wrap justify-between">
              {streamFilterResuls.map((item) => {
                return (
                  <div className="w-[30%] ">
                    <Link
                      to={`/streamdetail?streamid=${item._id}&channel=${item.channel_ID}`}
                    >
                      <Stream_Display_Card
                        name={item.name}
                        videoUrl={item.videoUrl}
                        thumbnailUrl={item.thumbnailUrl}
                        description={item.description}
                        viewCount={item.viewCount}
                        type={item.type}
                        channel_ID={item.channel_ID}
                        secretVideoCode={item.secretVideoCode}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>)}
        </div>)}
        {enableSearchDiv && (<div>
          {searchResultArr.length > 0 ? (<div className=" w-11/12 mx-auto">
          <div>
            <h1 className=" font-bold text-[22px] mb-5">Search Result</h1>
            <div className="flex flex-wrap justify-between">
              {searchResultArr.map((item) => {
                return (
                  <div className="w-[30%] ">
                    <Link
                      to={`/streamdetail?streamid=${item._id}&channel=${item.channel_ID}`}
                    >
                      <Stream_Display_Card
                        name={item.name}
                        videoUrl={item.videoUrl}
                        thumbnailUrl={item.thumbnailUrl}
                        description={item.description}
                        viewCount={item.viewCount}
                        type={item.type}
                        channel_ID={item.channel_ID}
                        secretVideoCode={item.secretVideoCode}
                      />
                    </Link>
                  </div>
                );
              })}
            </div>
          </div>
        </div>) : (<div className=" w-full p-7 flex flex-col justify-center items-center mb-9">
                  <video autoPlay loop className="w-[200px] h-auto">
                    <source src={SearchError} type="video/webm" />
                    Your browser does not support the video tag.
                  </video>
                  <p className=" text-[#ffffffa0] text-[18px]">
                    No results found
                  </p>
                </div>)}
        </div>)}
>>>>>>> Stashed changes
      <Footer />
    </div>
  );
}
