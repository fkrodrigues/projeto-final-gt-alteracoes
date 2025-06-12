import ProductCard from "./ProductCard";

const ProductListing = ({arrayProductCard}) => {
    return ( 

        <div className=" 
          text-[#474747] 
          mb-4 ml-[100px]
          w-[1320px] 
        ">
         
          <div className="flex flex-wrap gap-9">
            {arrayProductCard.map((item, index) => (
                <ProductCard key={index} discount={item.discount} image={item.image} type={item.type} name={item.name} price={item.price} priceDiscount={item.priceDiscount}/>
             ))}
          </div>

        </div>
     );
}
 
export default ProductListing;