import { Button } from "primereact/button";

const BannerFinalHome = ({imagem, titulo, descricao, funcaoBtn}) => {
    return ( 
        <div className="flex ">

          <div className="
            w-[575px] h-[330px]
          ">
            <img src={imagem} alt=""></img>
        </div>

        <div className="flex flex-col">
              <div className="
                text-[#C92071] text-[14px]
                font-bold
              ">Oferta Especial</div>
              <div>{titulo}</div>
              <div>{descricao}</div>
               <Button onClick={funcaoBtn} label="Ver Ofertas"
                    className="
                    bg-[#c92071] text-white
                    p-2.5 rounded-[8px]
                    w-[210px] text-[.9rem]
                    tracking-[1px]
                    hover:bg-[#db2777]
                "/>
        </div>

        </div>
     );
}
 
export default BannerFinalHome;