const Thumb = ({ src, alt }) => {
  return (
    <div
      className=" w-[115px] 
        h-[92px] overflow-hidden 
        rounded-[6px] hover:border-[#c92071]
        hover:border-3 hover:cursor-pointer
        "
       >
      <img src={src} alt={alt} />
    </div>
  );
};

export default Thumb;
