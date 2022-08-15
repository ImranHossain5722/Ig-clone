import React from 'react';
import imran from "../../Assets/Images/story_image.jpg";
import jira from "../../Assets/Images/jira.jfif";
import'./NewsFeed.css'
import { AiOutlinePlus } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import stroy1 from "../../Assets/Images/story.jpg";
import stroy2 from "../../Assets/Images/story1.jpg";
import wp from "../../Assets/Images/wp.png";
import'./NewsFeed.css'
import Post from '../Post/Post';
const NewsFeed = () => {
    return (
        <div className='max-h-screen mx-auto max-w-sm md:max-w-md lg:max-w-lg'>
            
              {/* facbook story  */}
            <div className='flex gap-4 '>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${imran})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='bg-white  absolute 
                 w-[118px] h-[70px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <AiOutlinePlus className='absolute left-14 mt-[-6px] bg-[#166ADA] rounded-xl border border-solid white text-white ' />
                  </div>
                    <p className='text-center text-[13px] p-5'>Create Your Story</p>
                 </div>

                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${stroy1})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className=' absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-blue-500 text-[20px]' />
                  </div>
                    <p className='text-white font-semibold  text-[13px] w-6 lg:w-full'>Jhon Adom </p>
                 </div>
                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${stroy2})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-blue-500 text-[20px]' />
                  </div>
                    <p className=' text-white font-semibold  text-[13px] w-6 lg:w-full'>Jhon Adom </p>
                 </div>

                </div>
                <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${wp})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                  <div className='absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-blue-500 text-[20px]' />
                  </div>
                    <p className=' text-white font-semibold  text-[13px] w-6 lg:w-full'>Jhon Adom </p>
                 </div>

                </div>
                {/* <div className='bg-gray-500 w-[130px] h-[200px] rounded-md mt-5 relative shadow-md cursor-pointer'
                style={{
                    background:`url(${jira})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                >
                 <div className='absolute 
                 w-[130px] h-[75px] bottom-0 rounded-b-md'>
                  
                  <div className='relative '>

                  <FiCircle className='absolute bottom-24 left-5  text-blue-500 text-[20px]' />
                  </div>
                    <p className= 'text-white font-semibold text-[13px]  w-6 lg:w-full'>Jhon Adom </p>
                 </div>

                </div> */}
                     
           </div>
           {/* post  */}
           <Post/>

        </div>
    );
};

export default NewsFeed;