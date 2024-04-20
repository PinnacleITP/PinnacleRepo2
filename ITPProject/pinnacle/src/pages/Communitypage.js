import React, {useEffect, useState} from 'react'
import Header from '../components/Header'
import Commiunity_display_card from '../components/Commiunity_display_card'
import Footer from '../components/Footer'
import axios from 'axios'

export default function Communitypage() {
  var pageid ="Community"
  const [CommunityPosts, setCommunityPosts] = useState([]);

  //read community post details
  useEffect(() => {
    axios
      .get(`http://localhost:3001/${pageid}`)
      .then((result) => setCommunityPosts(result.data))
      .catch((err) => console.log(err));
  }, [pageid]);

  return (
    <div>
      <Header navid='community'/>
      <div className=' w-11/12 mx-auto mt-9'>
        <h1 className=' text-[32px] font-bold text-white'>Upcoming Games</h1>
        <div className=' flex justify-between flex-wrap'>
          {CommunityPosts.map((item) => {
                return (
                  <div className=" w-[30%]">
                  <Commiunity_display_card id={item._id} post={item.postUrl} description={item.description} name={item.name} releasedate={item.releasedate} />
                </div>
                );
              })}
        </div>
      </div>

      <Footer/>
    </div>
  )
}
