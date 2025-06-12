import ItemCollection from "./ItemCollection";


const ColecoesDestaque = ({dataCollection}) => {

    return ( 

        <>
          <div className=" 
            w-[1320px] h-[267px]
            flex justify-between
            mx-[100px] text-[#1F1F1F] 
            gap-[12px]
            
            ">
          {dataCollection.map((item, index) => (
          <ItemCollection key={index} titleCard={item.titleCard} image={item.image} discount={item.discount}/>
          ))}
          </div>
        </>

     );
}
 
export default ColecoesDestaque;