import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "./CreateRoom.css";
import { Pagination, Navigation, Autoplay } from "swiper";
import { MdVideoCall } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa";
import { FaAngleLeft } from "react-icons/fa";
import left  from "../../Assets/Images/left.png";
import right  from "../../Assets/Images/right.png";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
// import required modules

const CreateRoom = () => {
  const [users, setusers] = useState([]);
  useEffect(() => {
    fetch("review.json")
      .then((res) => res.json())
      .then((data) => setusers(data));
  }, []);

  // for swiper slider
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  // classes
  // swiper-button-prev,  swiper-button-disabled
  return (
    <div className="bg-white mx-auto max-w-sm md:max-w-md lg:max-w-[750px] rounded-xl py-2">
      {/* title section */}

      <div className="">
        <Swiper
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 3,
            },
            992: {
              slidesPerView: 5,
            },
            1500: {
              slidesPerView: 5,
            },
          }}
          // spaceBetween={0}
          loop={true}
          navigation={{
            prevEl: "#prev_slide",
            nextEl: "#next_slide",
          }}
          modules={[Autoplay, Navigation]}
          autoplay={false}
          className="mySwiper"
          style={{ "--swiper-theme-color": "#27AE61" }}
          onInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
         
          {users?.map((user) => (
            <SwiperSlide key={user.id}>
              <div class="avatar online py-8 ">
                <div class=" w-28">
                  <img className= " avter-image  w-11 h-11 lg:w-16 lg:h-16 rounded-full gap-4" src={user.image}  alt="" />
                  <p>{user.name}</p>
                </div>
              </div>

                
            </SwiperSlide>
          ))}
          <div className="swiperSlide_button_group">
            <div style={{background:`url(${left})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",}} className="swiper_button swiper_button_prev" ref={prevRef}>
            {/* <img  className="z-50" src={left} alt='' /> */}
            </div>
            <div style={{background:`url(${right})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",}} className="swiper_button swiper_button_next" ref={nextRef}>
            {/* <FaAngleRight/> */}
            </div>
          </div>
          
        </Swiper>
      </div>
    </div>
  );
};

export default CreateRoom;
