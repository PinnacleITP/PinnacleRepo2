import React, { useState, useEffect } from "react";
import axios from "axios";

export default function SubscriptionCard(props) {
  const [channelDetails, setChannelDetails] = useState([]);
  // Read channel details using member id
  useEffect(() => {
    axios
      .get(`http://localhost:3001/getChannelByChannelID/${props.channelID}`)
      .then((result) => {
        console.log(result);
        setChannelDetails(result.data);
      })
      .catch((err) => console.log(err));
  }, [props.channelID]);

  return (
    <div className=" bg-gradient-to-b from-[#2A2B2F] to-[#00000094] text-[#D9D9D9] text-[20px] font-semibold py-3 px-7 flex justify-between items-center ">
      <div className="w-[15%]">
        <img
          className=" inline-block mr-1 rounded-full w-[70px] h-[70px]"

          src={channelDetails.channelDp}
          alt="external-design-web-design-device-solid-style-set-2-solid-style-bomsymbols-"
        />
      </div>
      <div className="w-[50%]">{channelDetails.channelName}</div>
      <div className="w-[15%]">{channelDetails.subscribercount} Subscribers</div>
      <div className="w-[15%]">
        <div className=" py-1 px-3 border-2 text-center text-[18px] border-[#FE7804] rounded-3xl text-[#FE7804]  mr-6 cursor-pointer hover:bg-gradient-to-t from-[#FF451D] to-[#FE7804] hover:text-white">
          Unsubscribe
        </div>
      </div>
    </div>
  );
}
