import BannerFinalHome from "../components/BannerFinalHome";
import ColecaoIcones from "../components/ColecaoIcones";
import ColecoesDestaque from "../components/ColecoesDestaque";
import ProdutosAlta from "../components/ProdutosAlta";
import { Button } from "primereact/button";

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

  //   const arrayItemProduto = [
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //     {
  //       desconto: '30% OFF',
  //       imagem: "../public/tenisAlta.png",
  //       titulo: 'K-Swiss V8 - Masculino',
  //       tipo:"Tênis",
  //       precoDe:"$200",
  //       precoPor:"$100"
  //     },
  //   ]

  

  return (
    <>
      <div
        className="
        w-[1440] h-[681px] bg-[#F5F5F5]
        overflow-hidden flex relative
    "
      >
        <div
          className=" w-[510px]
        h-[398px] mt-[100px] ml-[100px] flex flex-col 
      "
        >
          <p
            className="
          mt-12 tracking-wide
          text-[1rem] text-[#F6AA1C]
          font-bold
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

        <img
          src="src/assets/Ornament 11.svg"
          alt="ornamentos"
          className="
          absolute
          w-[140px] h-[140px] 
          mt-24  right-[80px]
        "
        />

        <img
          src="public/White Sneakers.png"
          alt=""
          className="
            absolute
            w-[733px]
            rotate-[-20deg]
            right-[250px]
            bottom-[20px]
            
        "
        />

        <div
          className="
           h-[12px] w-[60px] 
           absolute 
           flex
           gap-2
           bottom-[50px]
           left-[50%]
           -translate-x-[50%]
        "
        >
          <div
            className="    
              w-[10px] h-[10px] 
              bg-[#db2777]
              rounded-[50%] 
            "
          ></div>

          <div
            className="    
              w-[10px] h-[10px] 
              bg-[#CCCCCC]
              rounded-[50%] 
            "
          ></div>

          <div
            className="    
              w-[10px] h-[10px] 
              bg-[#CCCCCC]
              rounded-[50%] 
            "
          ></div>

          <div
            className="    
              w-[10px] h-[10px] 
              bg-[#CCCCCC]
              rounded-[50%] 
            "
          ></div>
        </div>
      </div>

      {/* <Banner/>
    
            <ColecoesDestaque data={data} titulo={"Coleções em Destaque"}/>
    
            <ColecaoIcones/>
    
            <ProdutosAlta arrayItemProduto={arrayItemProduto} titulo={"Produtos em Alta"}/>
    
             */}
    </>
  );
};

export default Gallery;
