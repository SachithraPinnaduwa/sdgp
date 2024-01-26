import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";

const VideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isVideoSelected, setIsVideoSelected] = useState(false);

  const handleVideoSelect = (video) => {
    setSelectedVideo(video);
    setIsVideoSelected(true); // Set video selected to true
  };

  const handleCancel = () => {
    setSelectedVideo(null);
    setIsVideoSelected(false); // Set video selected to false
  };

  return (
    <div className="flex flex-wrap m-20">
      <div className='grid grid-cols-1 lg:grid-cols-12 my-auto gap-5 justify-center '>
        <div className='col-span-5 text-center'> 
          <p className="text-2xl mb-8 text-white ">Discover more about us through our introduction videos! <br/>Click play and get to know us better! </p><hr/>
          <ul className="list-none p-0 text-white">
            <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 pl-3  text-left">
              <div
                className={`p-2 cursor-pointer ${selectedVideo === 'video1' ? 'italic' : ''}`}
                onClick={() => handleVideoSelect('video1')}
              >
                <h3 className="text-lg font-medium">Chatbot</h3>
              </div>
            </li>
            <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  text-left">
              <div
                className={`p-2 cursor-pointer ${selectedVideo === 'video2' ? 'italic' : ''}`}
                onClick={() => handleVideoSelect('video2')}
              >
                <h3 className="text-lg font-medium ">Find scam</h3>
              </div>
            </li>
            <li className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-2  text-left">
              <div
                className={`p-2 cursor-pointer ${selectedVideo === 'video3' ? 'italic' : ''}`}
                onClick={() => handleVideoSelect('video3')}
              >
                <h3 className="text-lg font-medium ">Write Post</h3>
              </div>
            </li>
          </ul>
        </div>
        <div className='col-span-7'>
          {isVideoSelected ? (
            <div className="w-full mt-4 relative">
              <button onClick={handleCancel} className="absolute right-1 top-1 text-white"><MdOutlineCancel size={30} /></button>
              <video 
                src={`/main/${selectedVideo}.mp4`}
                controls
                className="w-full absolute top-8"
              />
            </div>
          ) : (
            <img src="/placeholder-image.jpg" alt="Placeholder" className="w-full" />
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
