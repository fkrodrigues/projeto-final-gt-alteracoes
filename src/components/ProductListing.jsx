import ItemProduto from "./ProductCard";

const ProdutosAlta = ({arrayItemProduto}) => {
    return ( 

        <div className=" 
          text-[#474747] mt-5 
          mb-4 ml-[100px]
          w-[1320px] 
        ">
         
          <div className="flex flex-wrap gap-9">
            {arrayItemProduto.map((item, index) => (
                <ItemProduto key={index} discount={item.discount} image={item.image} type={item.type} name={item.name} price={item.price} priceDiscount={item.priceDiscount}/>
             ))}
          </div>

        </div>
     );
}
 
export default ProdutosAlta;