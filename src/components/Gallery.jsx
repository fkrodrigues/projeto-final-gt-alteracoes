import { Button } from "primereact/button";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

const Gallery = ({children}) => {

  const imageSlide= [
    
      {id:1, src: "/public/home slide 1.png"},
      {id:2, src: "/public/home slide 2.jpeg"},
      {id:3, src: "/public/home slide 3.jpeg"},
      {id:4, src: "/public/home slide 4.png"},
      {id:5, src: "/public/home slide 5.png"},
      {id:6, src: "/public/home slide 6.png"},
      {id:7, src: "/public/home slide 7.png"},
      {id:8, src: "/public/home slide 8.png"},
  ]

    return (
    <div className="relative">
      
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dotsClass: 'swiper-dots',
          dotsActiveClass: 'swiper-dots-active'
        }}
        navigation
        className="w-full h-[680px] object-cover"
      >
        {imageSlide.map((image) => (
          <SwiperSlide key={image.id}>
            <img 
              src={image.src} 
              alt={`Slide ${image.id}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {children && (
        <div>{children}</div>
      )}

   

    </div>
  );
};

export default Gallery;
