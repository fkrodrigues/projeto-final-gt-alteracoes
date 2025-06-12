

const Section = ({title, titleAlign, link, children}) => {

   



  return (
    <div className=" flex flex-col ">

      <div className="
       w-full 
       flex justify-center
       mt-6
      ">
          <div className={` 
            w-[1320px] ml-[0px] mb-3 
           relative
           
           ${titleAlign === "center"?"text-center":""}`}
          >
           <h3 className="
           text-[#474747]
           ">{title}</h3>

          {link && (
           <div className="
              w-[100px] right-0 top-0
              absolute
              
              text-[#C92071] text-[1rem]
              hover:text-[#fb3997de]
              ">
                <a href={link.href}>
                  {link.text}
                </a>
            </div>
          )}
          
          </div>
        </div>

        <div 
          className="
          w-[100%]
          ">
            <div className="mb-12">{children}</div>
        </div>
   </div>
  );
};

export default Section;
