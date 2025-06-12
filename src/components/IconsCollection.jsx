import { BsHeadphones } from "react-icons/bs";
import { GiBilledCap, GiRunningShoe } from "react-icons/gi";
import { LiaTshirtSolid } from "react-icons/lia";
import { PiPants } from "react-icons/pi";

const IconsCollection = () => {
    return ( 
        <div className="
          flex flex-col items-center
          w-full
          gap-4
          mb-[70px]
        ">
          <h3 className="
           text-[#474747] 
           mt-[10px] 
        " >Coleções em destaque</h3>

          <div className="flex gap-10">

            <div className="flex flex-col
               items-center gap-3">
               <div className="
                    bg-white w-[110px] h-[110px]
                    rounded-[100%]
                     flex justify-center items-center
                  ">
                    <a href="#">
                    <LiaTshirtSolid className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Camisetas</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[110px] h-[110px]
                    rounded-[100%]
                     flex justify-center items-center
                  ">
                    <a href="#">
                    <PiPants className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Calças</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[110px] h-[110px]
                    rounded-[100%]
                     flex justify-center items-center
                  ">
                    <a href="#">
                    <GiBilledCap className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Bonés</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[110px] h-[110px]
                    rounded-[100%]
                     flex justify-center items-center
                  ">
                    <a href="#">
                    <BsHeadphones className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Headphones</p>
            </div>

            <div className="flex flex-col
                 items-center gap-3">
               <div className="
                    bg-white w-[110px] h-[110px]
                    rounded-[100%]
                     flex justify-center items-center
                  ">
                    <a href="#">
                    <GiRunningShoe className="
                       w-[64px] h-[63px]
                       text-[#8F8F8F]
                       hover:text-[#C92071]
                       transition duration-300
                    " />
                    </a>
                </div>
                  <p className="
                      font-bold
                      tracking-[.74px]
                      text-[14px] text-[#474747]
                  ">Tênis</p>
            </div>


          </div>

        </div>

     );
}
 
export default IconsCollection;