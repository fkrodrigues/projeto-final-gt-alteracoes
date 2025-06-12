import ProductCard from "./ItemCollection";

const ProdutoPesquisa = ({arrayProductCard}) => {
    return ( 

        <div className=" 
          text-[#474747]
          w-[1100px] h-[1080]
          ml-8 mb-8 
        ">
          <div className="flex justify-between items-center  ">
          </div>

          <div className="
          flex justify-between flex-wrap w-[1005px]  
           mb-3 gap-8
          ">
            {arrayProductCard.map((item, index) => (
                <ProductCard key={index} discount={item.discount} image={item.image} type={item.type} name={item.name} price={item.price} priceDiscount={item.priceDiscount}/>
             ))}
          </div>

        </div>
     );
}
 
export default ProdutoPesquisa;