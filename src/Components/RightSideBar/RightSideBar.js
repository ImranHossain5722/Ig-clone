import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { BsGiftFill } from "react-icons/bs";
import group2 from "../../Assets/Images/group2.jpg";
import wp from "../../Assets/Images/wp.png";
import imran from "../../Assets/Images/story_image.jpg";
import giftbox from "../../Assets/Images/giftbox.png";
import "./RightSideBar.css";
import { RiVideoAddFill } from "react-icons/ri";
import {GrSearch} from "react-icons/gr";
import {BsThreeDots} from "react-icons/bs";
import Contacts from "../Contacts/Contacts";

const RightSideBar = () => {

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => setUsers(data[0].user_data));
  }, []);
    
  return (
    <div className="RightSideBar mt-14" >
      <div class="flex items-center  hover:bg-[#E4E6E9] dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
        
      </div>
      {/* add */}
      <div className="flex items-center cursor-pointer">
      <div className='w-11 h-11 bg-gray-300 m-4 rounded-full '
              style={{
                background:`url(${imran})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}>
              </div>
              <p className="">Md Imran Hossain</p>
              
              <p className="text-[#23a4fa] font-bold ml-5 ">Switch</p>
      </div>
      
      <div className="add mt-5">
        <div class="flex items-center dark:bg-gray-700 dark:border-gray-600 dark:text-white px-4">
      
          <p className=" px-4 text-gray-500 text-[20px] font-bold text-left  w-[280px] dark:bg-gray-800 dark:border-gray-600">
          Suggestions For You
          </p>
          <p className=" px-4 text-gray-black text-[16px] font-bold text-left  w-[250px] dark:bg-gray-800 dark:border-gray-600">
          See All
          </p>
        </div>
      </div>

      {/* contact */}
      <div className="mt-6 flex gap-x-14">
        <div className="">
        <p className="font-semibold pl-5" >Contacts</p>
        </div>
        <div className="flex items-center gap-8">
        <RiVideoAddFill className=" text-gray-600"/> 
        <GrSearch/>
        <BsThreeDots/>
        </div>
      </div>
      {
        users.map((user) =>(
          <Contacts key={user.id} user={user} />
        ))}
       
        
    </div>
  );
};

export default RightSideBar;
