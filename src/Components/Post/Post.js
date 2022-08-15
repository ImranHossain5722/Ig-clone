import React, { useEffect, useState } from "react";
import imran from "../../Assets/Images/story_image.jpg";
import { RiVideoAddFill } from "react-icons/ri";
import { MdOutlinePhotoLibrary } from "react-icons/md";
import { BiSmile } from "react-icons/bi";
import CreateRoom from "../CreateRoom/CreateRoom";
import ShowPost from "../ShowPost/ShowPost";

const Post = () => {
  

  // console.log(userPost);
  return (
    <div className="">
      <div className="post mt-6 bg-white  mx-auto max-w-sm md:max-w-md lg:max-w-[100%]">
        <div className="flex items-center justify-center border-t-2 border-gray-300">
          <div className=""
            ><BiSmile  className="w-14 h-14 m-4 text-[#262626] "/></div>
          {/* search input field  */}
  
                   <input className="flex justify-center mr-3  bg-white  mx-auto  w-5/6 h-12 rounded-xl focus:outline-none "
            placeholder=" Add a Comment.. "
          />
  
            <button disabled className="text-[#23a4fa]" >Post</button>
        </div>  
      </div>

      <div className="mt-6">
  
      </div>

      {/* <div className="mt-6">
        {userPost?.map(singlePost => (
          <ShowPost key={singlePost?.id} singlePost={singlePost} />
        ))}
      </div> */}
    </div>
  );
};

export default Post;
