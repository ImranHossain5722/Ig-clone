import React, { useState, useEffect } from "react";
import imran from "../../Assets/Images/story_image.jpg";
import jira from "../../Assets/Images/jira.jfif";
import "./NewsFeed.css";
import { AiOutlinePlus } from "react-icons/ai";
import { FiCircle } from "react-icons/fi";
import stroy1 from "../../Assets/Images/story.jpg";
import stroy2 from "../../Assets/Images/story1.jpg";
import wp from "../../Assets/Images/wp.png";
import "./NewsFeed.css";
import Post from "../Post/Post";
import CreateRoom from "../CreateRoom/CreateRoom";
import ShowPost from "../ShowPost/ShowPost";
const NewsFeed = () => {
  const [userPost, setUserPost] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((response) => response.json())
      .then((data) => setUserPost(data[1].post_data));
  }, []);

  return (
    <div className="max-h-screen mt-6 mx-auto max-w-sm md:max-w-md lg:max-w-lg">
      <CreateRoom />

      <div className="mt-6">
        {userPost?.map((singlePost) => (
          <ShowPost key={singlePost?.id} singlePost={singlePost} />
        ))}
      </div>

      {/* post  */}
      {/* <Post/> */}
    </div>
  );
};

export default NewsFeed;
