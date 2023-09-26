import YouTube, { YouTubeProps } from 'react-youtube';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Type from './Type';

function Main() {
    const onPlayerReady: YouTubeProps['onReady'] = (event) => {
        event.target.pauseVideo();
    }

    const opts: YouTubeProps['opts'] = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    const setting:any = {
        spaceBetween :30,
        centeredSlides : true,
        autoplay:{
            delay: 2500,
            disableOnInteraction: false,
        },
        pagination:{
            clickable: true,
        },
        navigation:true,
        modules:[Autoplay, Pagination, Navigation]
    }

    return (
        <>
            <Swiper
                {...setting}
                className="mySwiper"
            >
                <SwiperSlide><img className='swipers' src='./main_1.jpg'></img></SwiperSlide>
                <SwiperSlide><img className='swipers' src='./main_2.jpg'></img></SwiperSlide>
                <SwiperSlide><img className='swipers' src='./main_3.jpg'></img></SwiperSlide>
                <SwiperSlide><img className='swipers' src='./main_4.jpg'></img></SwiperSlide>
            </Swiper>

           
            <Type />
            <YouTube
                videoId='TNVjlSVKWLQ' //동영상 주소
                opts={{
                    width: "100%",
                    height: "260px",
                    playerVars: {
                        autoplay: 1, //자동 재생 여부 
                        modestbranding: 1, //컨트롤 바에 유튜브 로고 표시 여부
                        loop: 1, //반복 재생
                        playlist: 'TNVjlSVKWLQ', //반복 재생으로 재생할 플레이 리스트
                    },
                }}
                onReady={(e) => {
                    e.target.mute(); //소리 끔
                }}
            />
             <div className='banner'>
                <div className='row bannerImg'>
                    <img src='./main_banner01.jpg'></img>
                    <img src='./main_banner02.jpg'></img>
                    <img src='./main_banner03.jpg'></img>
                </div>
            </div>
        </>
    )
}

export default Main