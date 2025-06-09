import ItemColecao from "./ItemColecao";


const ColecoesDestaque = ({data,titulo}) => {


    return ( 

        <>
            <h2 className=" text-[#474747] mt-5 
        mb-4 ml-[100px]
        ">{titulo}</h2>
        <div className=" 
          w-[1240pxx] h-[267px]
           flex justify-between
          mx-[100px] text-[#1F1F1F] 
          gap-[12px]
          
          ">
        {data.map((item, index) => (
        <ItemColecao key={index} titulo={item.titulo} imagem={item.imagem} desconto={item.desconto}/>
         ))}
        </div>
        </>

     );
}
 
export default ColecoesDestaque;