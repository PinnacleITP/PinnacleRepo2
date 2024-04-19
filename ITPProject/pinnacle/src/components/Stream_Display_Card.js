import React from 'react'
import cod from '../assets/games/cod2.jpg'

export default function Stream_Display_Card() {
  return (
    <div className=' mb-10 bg-black'>
      <div className=' bg-transparent relative'><img src={cod}/>
      <img className=' absolute top-[43%] left-[45%]' width="50" height="50" src="https://img.icons8.com/ios-filled/50/FD7E14/circled-play.png" alt="circled-play"/>
      </div>
      <div className=' flex relative items-center'>
      <div className=' bg-transparent px-3 py-3 '><img width="38" height="38" src="https://img.icons8.com/ios-filled/50/FD7E14/user-male-circle.png" alt="user-male-circle"/></div>
        <div className='flex flex-col justify-center'>
            <p className=' font-semibold'>Asphalt 8</p>
            <p className=' text-[16px] text-[#ffffff9a]'>Channel name</p>
        </div>
        <div className=' absolute right-0 px-3'>
            <div className=' text-[#FE7804] font-semibold text-[15px]'>52 views</div>
            <div className='flex text-[15px]'>
                <div className=' mr-4'><img className=' inline-block' width="19" height="19" src="https://img.icons8.com/ios-glyphs/30/FD7E14/conference-call--v1.png" alt="conference-call--v1"/> 45</div>
                <div><img className=' inline-block' width="19" height="19" src="https://img.icons8.com/windows/32/FD7E14/chat-messages--v2.png" alt="chat-messages--v2"/> 53</div>
            </div>
        </div>      
      </div>   
    </div>
  )
}
