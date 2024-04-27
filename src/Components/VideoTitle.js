const VideoTitle=({title,overview})=>{
    
    return(
        <div className="pt-[20%] mx-20 absolute text-white">
            <h1 className="font-bold text-3xl">{title}</h1>
            <p className="font-medium text-base w-2/3 py-6">{overview}</p>
            <div>
                <button className="bg-white text-black p-4 px-12 text-xl rounded-lg hover:bg-opacity-80">▶️ Play</button>
                <button className="mx-2  bg-gray-500 text-white p-4 px-12 text-xl hover:bg-opacity-50 rounded-lg">ℹ️ More Info</button>
            </div>
        </div>
    )
}
export default VideoTitle;