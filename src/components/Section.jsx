

const Section = ({title, titleAlign, link, children}) => {

   



  return (
    <div className="relative">
      <div className="
       bg-amber-300 
       w-full h-[600px]
       flex justify-between
       p-5
      ">

        <div className={` w-full h-[50px]    
           bg-blue-300 relative
           ${titleAlign === "center"?"text-center":""}`}
        >
           {title}

           <div className="
          bg-red-400 w-[100px] h-[50px]
          absolute right-0 top-0
           "><a href={link.href}>{link.text}</a></div>

        </div>
        
      
     
      </div>
        <div 
        className="
         bg-red-400 w-[100px] h-[50px]
        absolute
        top-[50%]
        -translate-y-[50%]
        right-[50%]
        translate-x-[50%]
        z-2
        ">chi{children}</div>
   </div>
  );
};

export default Section;
