import ItemProduto from "./ItemProdutoAlta";

const ProdutosAlta = ({arrayItemProduto, titulo}) => {
    return ( 

        <div className=" 
          text-[#474747] mt-5 
          mb-4 ml-[100px]
          w-[1320px] 
        ">
          <div className="flex justify-between items-center mb-4 ">
             <h2>{titulo}</h2>
             <a href="#">
                 <p className="
                 text-[#C92071] hover:text-[#c92072a3]
                 ">ver mais &#8594; </p>
             </a>
          </div>

          <div className="flex flex-wrap gap-9">
            {arrayItemProduto.map((item, index) => (
                <ItemProduto key={index} desconto={item.desconto} imagem={item.imagem} tipo={item.tipo} titulo={item.titulo} precoDe={item.precoDe} precoPor={item.precoPor}/>
             ))}
          </div>

        </div>
     );
}
 
export default ProdutosAlta;