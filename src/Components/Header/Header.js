import React from "react";
import logo from "../../Assets/Images/T5Insta.png";
import { GoSearch } from "react-icons/go";
import { BsPersonFill} from "react-icons/bs";
import { HiHome } from "react-icons/hi";

import { FiSend } from "react-icons/fi";
import { AiOutlineHeart} from "react-icons/ai";
import { MdOutlineExplore} from "react-icons/md";
import { FiPlusSquare } from "react-icons/fi";
import imran from "../../Assets/Images/story_image.jpg";
const Header = () => {
    return (
      <div className="navbar ">
              {/* desktop mmeu */}
     
        <nav class="bg-white w-full lg:w-full h-[70px] z-50 border-b-2 fixed top-0 py-4 border-[#DBDBDB] dark:bg-gray-9">
  
           {/* logo fir desktop */}
          <div class="flex  justify-evenly  mx-auto  max-w-screen-full
         ">
            <a href="/" class="flex items-start pl-4  ">
              <img src={logo} class="mr-3 w-40 h-10 " alt="Logo" />
            </a>
  
                {/* searcbar for destop */}
            <div className="flex items-center bg-gray-100  max-w-sm md:max-w-md lg:w-1/2 rounded-2xl py-2 hover:bg-gray-200 ">
              <GoSearch className="ml-[20px] text-sm text-gray-500" />
              <input
                className="sm:max-w-sm md:max-w-md lg:w-full searchbar bg-[#80808000] text-black font-sembold pl-1 focus:outline-none "
                placeholder="Search "
              />
            </div>
  
            <div class="flex  items-end  mx-auto md:mx-auto  gap-8 md:gap-8 lg:mx-0 lg:gap-3 pr-4">
               
              {/* for destop icon  */}
              <div className="hidden lg:flex topbarIconItem p-2 ">
                < HiHome className=" text-[32px]" />
              </div>
              
               {/* for destop icon  */}
              <div className=" hidden lg:flex topbarIconItem p-2">
                <FiSend className="text-[30px]"/>
              </div>
              <div className="lg:flex topbarIconItem p-2">
                < FiPlusSquare className="text-[30px]"/>
              </div>
              <div className=" lg:flex topbarIconItem p-2">
                < MdOutlineExplore  className="text-[30px]"/>
              </div>
              <div className="lg:flex topbarIconItem p-2">
                < AiOutlineHeart className="text-[30px]"/>
              </div>
               {/* for destop icon  */}
              <div style={{
                background: `url(${imran})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }} className="lg:flex  bg-gray-200 hover:bg-gray-300 mb-2 rounded-full w-8 h-8 ">
                 
              </div>
            </div>
          </div>
        </nav>
      </div>
    );
  };
  
  export default Header;