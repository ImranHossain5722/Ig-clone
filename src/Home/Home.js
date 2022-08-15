import React from "react";
import CreateRoom from "../Components/CreateRoom/CreateRoom";
import LeftSideBar from "../Components/LeftSideBar/LeftSideBar";
import NewsFeed from "../Components/NewsFeed/NewsFeed";
import RightSideBar from "../Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div>
      <div className="flex justify-between ">
        <div className="bg-[#FAFAFA w-[10%]  hidden lg:block">
          <LeftSideBar />
        </div>
        <div className="NewFeed mt-[60px] flex mx-auto h-full  w-[60%]">
          <NewsFeed />
        </div>
        <div
          className=" mt-[60px] bg-[#FAFAFA]  w-[30%] hidden lg:block"  >
          <RightSideBar />
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Home;
