import React, { useState, useEffect } from "react";
import cod from "../assets/games/cod2.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Stream_Display_Card from "../components/Stream_Display_Card";
import "./styles/External.css";
import axios from "axios";
import { useNavigate, useLocation, Link } from "react-router-dom";
import SuccessPopup from "../components/SuccessPopup";

export default function StreamDetailsPage() {
  const userId = localStorage.getItem("userId");
  var memberID = userId;
  var readstream = "stream";
  
  const [streamMoreDetails, setStreamMoreDetails] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const streamid = queryParams.get("streamid");
  const channel = queryParams.get("channel");
  const [channelDetails, setChannelDetails] = useState([]);
  const [alreadySubscribed, setAlreadySubscribed] = useState(false);
  const [createSuccessMessagechecked, setCreateSuccessMessagechecked] =
    useState(false);
  const [streamDetailsCard, setStreamDetailsCard] = useState([]);

   //read all stream details
   useEffect(() => {
    axios
      .get(`http://localhost:3001/${readstream}`)
      .then((result) => setStreamDetailsCard(result.data))
      .catch((err) => console.log(err));
  }, [readstream]);

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
    console.log("channel" + channelDetails.viewCount);
  }, [channelDetails.viewCount]);

  const updateChannelViewCount = (bdviewcount) => {
    const channelviewCount = bdviewcount + 1;
    console.log("Current view count:", bdviewcount);
    console.log("Updated view count:", channelviewCount);
    axios
      .put(
        `http://localhost:3001/updateChannelViewCount/${channelDetails._id}`,
        { channelviewCount }
      )
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

  useEffect(() => {
    const fetchSubscription = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3001/getSubscribtionByMemberID/${memberID}/${channelDetails._id}`
        );
        const matchingSubscription = response.data;

        if (matchingSubscription) {
          setAlreadySubscribed(true);
          console.log("Matching subscription found:", matchingSubscription);
        } else {
          setAlreadySubscribed(false);
          console.log("No matching subscription found.");
        }
      } catch (error) {
        console.error("Error fetching subscription:", error);
      }
    };

    if (memberID && channelDetails._id) {
      fetchSubscription();
    }
  }, [memberID, channelDetails._id]);

  useEffect(() => {
    console.log("Updated alreadySubscribed:", alreadySubscribed);
  }, [alreadySubscribed]);

  const AddSubscription = (e) => {
    e.preventDefault();
    if (alreadySubscribed === true) {
      alert("This Channel is Already Subscribed.");
      return;
    }
    axios
      .post("http://localhost:3001/createSubscription", {
        memberID: memberID,
        channelID: channelDetails._id,
      })
      .then((result) => {
        console.log(result);
        setCreateSuccessMessagechecked(true);
        setAlreadySubscribed(true);
        // updateSubscriberCountofChannel(channelDetails.subscribercount);
      })
      .catch((err) => console.log(err));
  };

  const handleCreateCloseSuccessPopup = () => {
    setCreateSuccessMessagechecked(false);
  };

  // const updateSubscriberCountofChannel = (subcount) => {
  //   const subscriberCount = subcount + 1;
  //   console.log("Current subscribers count:", subcount);
  //   console.log("Updated subscribers count:", subscriberCount);
  //   axios
  //     .put(
  //       `http://localhost:3001/updateSubscriberCountofChannel/${channelDetails._id}`,
  //       { subscriberCount }
  //     )
  //     .then((result) => {
  //       console.log("Update result:", result);
  //     })
  //     .catch((err) => console.log(err));
  // };

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
                <p className="text-[18px] text-[#ffffff9a]">
                  {channelDetails.channelName}
                </p>
              </div>
              <div className=" ml-5">
                {!alreadySubscribed && (
                  <div className=" p-[2px] bg-gradient-to-t from-[#FF451D] to-[#FE7804] relative rounded-3xl cursor-pointer">
                    <div
                      onClick={AddSubscription}
                      className=" text-center text-[#FE7804] px-7 py-2 bg-black rounded-3xl hover:bg-transparent hover:text-white"
                    >
                      Subscribe
                    </div>
                  </div>
                )}
                {alreadySubscribed && (
                  <div className=" p-[2px] bg-gradient-to-t from-[#adacac] to-[#c0bebc] relative rounded-3xl cursor-pointer">
                    <div
                      // onClick={AddSubscription}
                      className=" text-center text-[#aaa9a8] px-7 py-2 bg-black rounded-3xl "
                    >
                      Subscribed
                    </div>
                  </div>
                )}
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
        <div className="flex justify-between w-11/12 px-4 mx-auto mt-10 ">
        <div className=" w-[65%] bg-[#00000075] rounded-lg py-5 px-7 mb-6">
            {/* <h1 className=" font-bold text-[18px]">54 Comments</h1> */}
            {/* feedbacks */}
            <div className="container py-8 mx-auto">
                <h1 className="text-xl font-bold">{filteredFeedbacks.length} Comments</h1>
                <input
                    type="text"
                    placeholder="Search comments"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full px-3 py-2 mt-4 mb-8 text-white bg-[#2A2B2F] border border-gray-300 rounded"
                />


                  <div className="flex flex-col space-y-4">
                  {filteredFeedbacks.map((feedback, index) => (
                        <div key={feedback._id} className={`p-6 rounded-lg shadow-md ${feedback._id === memberID ? 'bg-gradient-to-r from-orange-600 to-orange-400' : 'bg-[#2A2B2F]'} border-2 border-orange-500 ${index !== filteredFeedbacks.length - 1 ? 'mb-4' : ''}`}>
            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="orange" className="w-6 h-6 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg> */}
                    <img src={memberDetails.image} className=" h-[45px] w-[45px] rounded-full"></img>
                    <h3 className="ml-2 text-lg font-semibold">{feedback.name}</h3>
                </div>
                {feedback._id === memberID && (
                    <button onClick={() => toggleMenu(feedback._id)} className="text-white">
                        {/* Three-dot menu icon */}
                        <span className="text-3xl">&#8230;</span>
                    </button>
                )}
            </div>
            <p className='text-xs'>{feedback.email}</p>
            <p className='text-xl'>Feedback: {feedback.feedback}</p>
            {selectedFeedback === feedback._id && (
                <div className="mt-4">
                    <Link to={`/updatefeedback/${feedback._id}`} className="inline-block px-4 py-2 mr-2 text-white bg-blue-500 border border-blue-500 rounded hover:bg-blue-600">
                        Update
                    </Link>
                    <button onClick={() => handleDelete(feedback._id)} className="inline-block px-4 py-2 text-white bg-red-500 border border-red-500 rounded hover:bg-red-600">
                        Delete
                    </button>
                </div>
            )}
        </div>
    ))}
</div>

                <div className="mt-8">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4 text-xl">Add Comment</h2>
                        {/* <p>stream id:{streamid}</p> */}
                        <div className="hidden mb-4 ">
                            <label htmlFor="name">Name</label>
                            <input
                                type='text'
                                id="name"
                                placeholder='Name'
                                className="w-full px-3 py-2 mt-1 text-white bg-[#2A2B2F] border rounded"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            {errors.name && <p className="text-red-500">{errors.name}</p>}
                        </div>
                        <div className="hidden mb-4 ">
                            <label htmlFor="email">Email</label>
                            <input
                                type='email'
                                id="email"
                                placeholder='Email'
                                className="w-full px-3 py-2 mt-1 text-white bg-[#2A2B2F] border rounded"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            {errors.email && <p className="text-red-500">{errors.email}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor='feedback'>Comment</label>
                            <input
                                type='text'
                                id="feedback"
                                placeholder='Comment'
                                className="w-full px-3 py-2 mt-1 text-white bg-[#2A2B2F] border rounded"
                                value={feedback}
                                onChange={(e) => setFeedback(e.target.value)}
                            />
                            {errors.feedback && <p className="text-red-500">{errors.feedback}</p>}
                        </div>
                        <button
                            type='submit'
                            className="px-4 py-2 text-orange-500 border border-orange-500 rounded hover:bg-orange-500 hover:text-white hover:border-range-600">
                            Submit
                        </button>
                    </form>
                </div>
            </div>
          </div>
          <div className=" w-[31%] p-2">
            <h1 className=" font-bold text-[20px]">Recommended Videos</h1>
            <div className="w-full mt-5 h-[900px] overflow-y-auto scrollbar-hide">
            {streamDetailsCard.slice(0,4).map((item) => {
                return (
                  <div className="w-[100%] ">
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
        </div>
      </div>
      {createSuccessMessagechecked && (
        <SuccessPopup
          type="Subscribe"
          item="Channel Subscribtion"
          onClose={handleCreateCloseSuccessPopup}
        />
      )}
      <Footer />
    </div>
  );
}
