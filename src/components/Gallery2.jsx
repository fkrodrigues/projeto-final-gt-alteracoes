
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import ShowThumbs from "./ShowThumbs";

const Gallery = ({slideGallery, imagesShowTrumbs}) => {

    return (
    <div className="
      w-[700px] h-[700px]
      ml-[100px] rounded-[4px]
      overflow-hidden
    
    ">
      
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        pagination={{ 
          clickable: true,
          dotsClass: 'swiper-dots',
          dotsActiveClass: 'swiper-dots-active'
        }}
        navigation
        className="w-full h-[570px]"
      >
        {slideGallery.map((image) => (
          <SwiperSlide key={image.id}>
            <img 
              src={image.src} 
              alt={`Slide ${image.id}`}
              className="w-full h-full "
            />
          </SwiperSlide>
        ))}
      </Swiper>

       <div className="
      flex justify-between
       mt-5
      ">
          {imagesShowTrumbs ? imagesShowTrumbs.map((item, index) => (
              <ShowThumbs 
                key={index} 
                src={item.src} 
                alt={item.alt}/>
            )): null  }
      </div> 


    </div>
  );
};

export default Gallery;
