
import ColecaoIcones from "../components/ColecaoIcones";
import ColecoesDestaque from "../components/ColecoesDestaque";

import { Button } from "primereact/button";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Importe os estilos necessários
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const Gallery = () => {

  // const data = [
  //     {
  //       titulo: 'Novo drop Supreme',
  //       imagem: "../public/camisa.png",
  //       desconto:"80% OFF"
  //     },

  //     {
  //       titulo: "Coleção Adidas",
  //       imagem: "../public/tenis.png",
  //       desconto:"45% OFF"
  //     },

  //     {
  //       titulo: "Novo Beats Bass",
  //       imagem: "../public/fone.png",
  //       desconto:"59% OFF"
  //     }
  //   ]

   

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

      <div
        className="
        overflow-hidden flex
        rounded-3xl
        absolute 
        top-[9.2rem] ml-[100px]
        z-2
        bg-[#f5f5f5b7]
        shadow-2xl
        backdrop-blur-sm
        w-[560px] h-[400px]
        p-5
      "
      >

       <div
          className=" 
          w-[510px]
          h-[500px]
          flex flex-col
          rounded-lg
          ml-4
       ">
          <p
            className="
          tracking-wide
          text-[1rem] text-[#F6AA1C]
          font-bold
          mt-3
        "
          >
            Melhores ofertas personalizadas
          </p>
          <h2
            className="
          text-[4rem] font-bold leading-none
          mb-6 mt-5 w-[515px]
        "
          >
            Queima de estoque Nike 🔥
          </h2>
          <p
            className="
          text-[17px] text-[#474747]
          tracking-widest leading-7 mb-9
        "
          >
            Consequat culpa exercitation mollit nisi excepteur do do tempor
            laboris eiusmod irure consectetur.
          </p>

          <Button
            label="Ver Ofertas"
            className="
              bg-[#c92071] text-white
              p-2.5 rounded-[8px]
              w-[210px] text-[.9rem]
              tracking-[1px]
              hover:bg-[#db2777]
            "
          />
        </div>

      </div>

           {/* 
    
            <ColecoesDestaque data={data} titulo={"Coleções em Destaque"}/>
    
            <ColecaoIcones/>
    
             */}

            
    </div>
  );
};

export default Gallery;
