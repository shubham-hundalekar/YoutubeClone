

const VideoCard = ({info}) => {
    if(!info) return null;
    const {snippet, statistics} = info;
    const {channelTitle, thumbnails, title} = snippet;
    
  return (
    <div className='p-2 m-2 bg-gray-200 rounded-lg shadow-xl w-72'>
        <img className='rounded-lg w-72 ' alt='Loading....' src={thumbnails.medium.url} />
        <ul>
            <li className='py-2 font-bold'>{title}</li>
            <li className=''>{channelTitle}</li>
            <li>{statistics.viewCount} views</li>
        </ul>

    </div>
  )
}

export const AdCard = ({info})=>{
  return(
    <div className="rounded-lg bg-slate-500">
      <VideoCard info={info}/>
    </div>
  )
}


export default VideoCard;