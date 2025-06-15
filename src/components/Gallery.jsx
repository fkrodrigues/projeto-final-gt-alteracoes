
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import BannerHome from './BannerHome';
import ShowThumbs from './ShowThumbs';

const Gallery = ({show, imageSlide, slideGallery,imagesShowTrumbs }) => {


    return (
    <div className="relative">

      {show === 'banner' ? <BannerHome imageSlide={imageSlide} /> : <ShowThumbs slideGallery={slideGallery} imagesShowTrumbs={imagesShowTrumbs} />}

    </div>
  );
};

export default Gallery;
