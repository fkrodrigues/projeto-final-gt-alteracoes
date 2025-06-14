
const BannerHome = () => {
  return (
   
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
       "
        >
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

          <button 
                className="
                  bg-[#c92071] text-white
                  p-2.5 rounded-[8px]
                  w-[210px] text-[.9rem]
                  tracking-[1px] font-bold
                  hover:bg-[#db2777]
                  hover:cursor-pointer
                " 
          
          >
             Ver Ofertas
          </button>
        </div>
      </div>
    
  );
};

export default BannerHome;
