import React, { useState, useEffect } from "react";
import cod from "../assets/games/cod2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stream_Display_Card from "../components/Stream_Display_Card";
import "./styles/External.css";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";

export default function StreamDetailsPage() {
  const [streamMoreDetails, setStreamMoreDetails] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const streamid = queryParams.get("streamid");
  const channel = queryParams.get("channel");
  const [channelDetails, setChannelDetails] = useState([]);
  // const [channelName, setChannelName] = useState([]);
  // const [channelDp, setChannelDp] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/getChannelByStreamID/${channel}`)
  //     .then((result) => {
  //       console.log(result.channel_ID);
  //       setChannelName(result.data.channelName);
  //       setChannelDp(result.data.channelDp);
  //     })
  //     .catch((err) => console.log(err));
  // }, [channel]);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getChannelbyid/${channel}`)
      .then((result) => {
        console.log("Stream details:", result.data);
        setChannelDetails(result.data);
        // Call updateViewCount after setting streamMoreDetails
      
      })
      .catch((err) => console.log(err));
  }, [channel]);

  useEffect(() => {
    updateChannelViewCount(channelDetails.viewCount);
    console.log("channel"+channelDetails.viewCount);
  }, [channelDetails.viewCount]);

  const updateChannelViewCount = (bdviewcount) => {
    const channelviewCount = bdviewcount + 1;
    console.log("Current view count:", bdviewcount);
    console.log("Updated view count:", channelviewCount);
    axios
      .put(`http://localhost:3001/updateChannelViewCount/${channelDetails._id}`, { channelviewCount })
      .then((result) => {
        console.log("Update result:", result);
      })
      .catch((err) => console.log(err));
  };

  //read all stream details

  // useEffect(() => {
  //   axios
  //     .get(`http://localhost:3001/getStream/${streamid}`)
  //     .then((result) => {setStreamMoreDetails(result.data);
  //       updateViewCount();})
  //     .catch((err) => console.log(err));
  // }, [streamid]);

  // const [newViewCount, setNewViewCount] = useState(streamMoreDetails.viewCount);

  // const updateViewCount = () => {
  //   const viewCount = streamMoreDetails.viewCount + 1;
  //   console.log(streamMoreDetails.viewCount);
  //   console.log(viewCount);
  // axios.put(`http://localhost:3001/updateViewCount/${streamid}`, { viewCount})
  //     .then(result => {
  //         console.log(result);
  //         setNewViewCount(viewCount);
  //     })
  //     .catch(err => console.log(err));
  // };

  useEffect(() => {
    axios
      .get(`http://localhost:3001/getStream/${streamid}`)
      .then((result) => {
        console.log("Stream details:", result.data);
        setStreamMoreDetails(result.data);
        // Call updateViewCount after setting streamMoreDetails
        updateViewCount(result.data.viewCount);
      })
      .catch((err) => console.log(err));
  }, [streamid]);

  const [newViewCount, setNewViewCount] = useState(0);
  const updateViewCount = (bdviewcount) => {
    const viewCount = bdviewcount + 1;
    console.log("Current view count:", bdviewcount);
    console.log("Updated view count:", viewCount);
    axios
      .put(`http://localhost:3001/updateViewCount/${streamid}`, { viewCount })
      .then((result) => {
        console.log("Update result:", result);
        setNewViewCount(viewCount);
      })
      .catch((err) => console.log(err));
  };
  
  return (
    <div className=" text-white">
      <Header navid="streams" />
      <div className=" w-11/12 mx-auto mt-5">
        <h1 className=" text-[28px] font-bold">Game Streams</h1>
        <div className=" px-4 mx-auto w-full mt-5">
          <div className=" w-11/12 mx-auto bg-black ">
            <div className=" w-full">

              <video
                controls
                className="w-full h-full"
                src={streamMoreDetails.videoUrl}
                type="video/mp4"
              />
                  
            </div>
            <div className="py-4 px-7 flex justify-start relative items-center">
              <div>
                <img
                className=" w-[50px] h-[50px] rounded-full"
                  src={channelDetails.channelDp}
                  alt="user-male-circle"
                />
              </div>
              <div className=" ml-5">

                <p className=" font-bold text-[20px]">
                  {streamMoreDetails.name}
                </p>
                <p className="text-[18px] text-[#ffffff9a]">{channelDetails.channelName}</p>

              </div>
              <div className=" ml-5">
                <div className=" p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer">
                  <div className=" text-center text-[#FE7804] px-7 py-2 bg-black rounded-3xl hover:bg-transparent hover:text-white">
                    Subscribe
                  </div>
                </div>
              </div>
              <div className=" absolute right-7 flex justify-end items-center font-semibold ">

                <div className=" mr-7">
                  <img
                    className=" inline-block mr-1"
                    width="40"
                    height="40"
                    src="https://img.icons8.com/external-solid-style-bomsymbols-/65/FD7E14/external-design-web-design-device-solid-style-set-2-solid-style-bomsymbols-.png"
                    alt="external-design-web-design-device-solid-style-set-2-solid-style-bomsymbols-"
                  />

                  <span className=" text-[#FE7804]">{newViewCount} views</span>

                </div>
                <div className=" mr-7">
                  <img
                    className=" inline-block mr-1"
                    width="30"
                    height="30"
                    src="https://img.icons8.com/windows/32/FD7E14/chat-messages--v2.png"
                    alt="chat-messages--v2"
                  />
                  <span>45</span>
                </div>
                <div>
                  <img
                    className=" inline-block mr-1"
                    width="30"
                    height="30"
                    src="https://img.icons8.com/ios-glyphs/30/FD7E14/conference-call--v1.png"
                    alt="conference-call--v1"
                  />
                  <span>57</span>
                </div>

              </div>
            </div>
          </div>
        </div>
        <div className=" w-11/12 mx-auto flex justify-between px-4 mt-10">
          <div className=" w-[65%] bg-[#00000075] rounded-lg py-5 px-7">
            <h1 className=" font-bold text-[18px]">54 Comments</h1>
          </div>
          <div className=" w-[31%] p-2">
            <h1 className=" font-bold text-[20px]">Recommended Videos</h1>
            <div className="w-full mt-5 h-[900px] overflow-y-auto scrollbar-hide">
              <Stream_Display_Card />
              <Stream_Display_Card />
              <Stream_Display_Card />
              <Stream_Display_Card />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
