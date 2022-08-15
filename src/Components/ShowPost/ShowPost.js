import React, { useEffect, useState } from "react";
import imran from "../../Assets/Images/story_image.jpg";
import commentsImag from "../../Assets/Images/bubble-chat.png";
import { GiEarthAmerica } from "react-icons/gi";
import { BsThreeDots } from "react-icons/bs";
import Pogramming from "../../Assets/Images/post1.jpg";
import likeImage from '../../Assets/Images/like.svg'
import heart from '../../Assets/Images/heart.svg'
import care from '../../Assets/Images/care.svg'
import sad from '../../Assets/Images/sad.svg'
import haha from '../../Assets/Images/haha.svg'
import angry from '../../Assets/Images/angry.svg'
import wow from '../../Assets/Images/wow.svg'
import { comment } from "postcss";
import { AiOutlineLike } from "react-icons/ai";
import { BiComment } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { AiOutlineHeart} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import Post from "../../Components/Post/Post";

const ShowPost = ({singlePost}) => {

  //  console.log(singlePost)
   const {post, post_image_url,user_photo_url,user_name,post_time,conments} = singlePost
  

  const [post_likes ,setPost_likes] = useState(singlePost.post_likes)
  const [islike ,seIstLike] = useState(false)
  const likeHandeler =()=>{
    setPost_likes(islike ? post_likes -1 : post_likes+1)
    seIstLike(!islike)
  }

  const [userComments, setUseComments] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => console.log(data.post_data?.comments));
  }, []);
  return (
    <div className="">
      <div className="">
        <div className=" mx-auto max-w-sm md:max-w-md lg:max-w-[750px] bg-white shadow-md rounded-xl mb-4 ">
          <div className="flex items-start">
            <div
              className="w-14 h-14 bg-gray-300 m-4 rounded-full"
              style={{
                background: `url(${user_photo_url})`,
                backgroundSize: "content",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="">
                {/* post time */}
                <small className="flex gap-1 items-center relative top-8 left-16 text-gray-500 font-semibold">
                
                </small>
              </div>
            </div>

            <h3 className="text-[18px] font-semibold mt-3 ml-[-8px]">
            {user_name}
            </h3>
            <BsThreeDots className="relative  left-[130px] md:left-[202px] lg:left-[200px]  top-4" />
            
          </div>
          <div>
            {/* post des */}
            <p className="px-4">
              {post}
            </p>
            <img className="pt-4 w-full " src={post_image_url} alt='' />
          </div>
          {/* like comment share */}
          <div className="likeCommentShar mb- ">
            <div className="flex justify-between p-2 pb-4">

                {/* imoje */}
              <div className="flex gap-1">
              <div className="lg:flex topbarIconItem p-2">
                < AiOutlineHeart className="text-[30px]"/>
              </div>
              <div className=" lg:flex topbarIconItem p-2">
                <img className="w-8 h-8 " src={commentsImag } />
              </div>
              <div className=" lg:flex topbarIconItem p-2">
                <FiSend className="text-[30px]"/>
              </div>
                
                 

              </div>
              {/* comment */}
              <div className="flex hover:underline cursor-pointer">
              
               
              </div>
            </div>
               
            <p className="px-4">
              {post}
              <p className="py-5 text-gray-400 ">  View all {conments.length} Comments</p>
              <p className="py-2 text-gray-400 ">  {post_time}  ago</p>
              <Post/>
            </p>



          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowPost;
