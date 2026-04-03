import React from 'react'

const ChannelDisplay = ({channelData}) => {
    console.log("channel display", channelData);
    const {channelTitle, title} = channelData.snippet;
    const {likeCount} = channelData.statistics;
    console.log(channelTitle, " ", title);

  return (
    <div>
        <div className='my-2 font-bold'>
            {title}
        </div>
        <div className='flex cursor-pointer'>
            <div><img className="w-12 h-12 border border-black rounded-full" src="https://tse1.mm.bing.net/th/id/OIP.ZtvknNHtPvv_zATtMCzMWQHaHa?rs=1&pid=ImgDetMain&o=7&rm=3" /></div>
            <div className='flex flex-col mx-2 '>
                <span className='text-sm font-semibold'>{channelTitle}</span>
                <span className='text-sm text-gray-600'>{likeCount}</span>
            </div>
            <div className='p-1 ' >
                <button className='p-2 px-3 mx-3 text-sm font-semibold border border-black rounded-full hover:bg-black hover:text-white'>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default ChannelDisplay