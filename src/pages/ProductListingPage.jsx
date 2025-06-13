import FilterBy from "../components/FilterBy";
import ProductListing from "../components/ProductListing";


const ProductListingPage = () => {

    const arrayFilters = [
         
            {
               "title":"Marca",
               "inputType":[
                  {
                     "checked":true,
                     "text":"Adidas"
                  },
                  {
                     "checked":false,
                     "text":"Calenciaga"
                  },
                  {
                     "checked":true,
                     "text":"K-Swiss"
                  },
                  {
                     "checked":false,
                     "text":"Nike"
                  },
                  {
                     "checked":false,
                     "text":"Puma"
                  },
               ]
            },
            {
               "title":"Categoria",
               "inputType":[
                  {
                     "checked":true,
                     "text":"Esporte e Lazer"
                  },
                  {
                     "checked":false,
                     "text":"Casual"
                  },
                  {
                     "checked":false,
                     "text":"Utilitário"
                  },
                  {
                     "checked":false,
                     "text":"Corrida"
                  }
               ]
            },
            {
               "title":"Gênero",
               "inputType":[
                  {
                     "checked":true,
                     "text":"Masculino"
                  },
                  {
                     "checked":true,
                     "text":"Feminino"
                  },
                  {
                     "checked":false,
                     "text":"Unissex"
                  }
               ]
            },
            {
               "title":"Estado",
               "inputType":[
                  {
                     "radio":true,"checked": true,
                     "text":"Novo"
                  },
                  {
                     "radio":true, "checked": false,
                     "text":"Usado"
                  }
               ]
            }
         

    ]

    const arrayProductCard = [
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      },
      {
        discount: '30% OFF',
        image: "../public/tenisAlta.png",
        name: 'K-Swiss V8 - Masculino',
        type:"Tênis",
        price:"$200",
        priceDiscount:"$100"
      }
  ]

    return ( 
        <div className=" 
           flex flex-col items-center 
           xs: 
           h-[2600px] 
        ">

          <div className="flex justify-between w-[1300px] my-10">

            <div className="flex ">
               <h4>Resultado para "Tênis"</h4>
               <p>- 389 produtos</p>
            </div>

            <div className="flex gap-1">
               <h4>
                  <label htmlFor="ordenar">
                  Ordenar por: 
                  </label>
               </h4>
               <select id="ordenar">
                 <option value="op1">mais relevantes
                 </option>
                 <option value="op2">maior preço</option>
                 <option value="op3">menor preço</option>
               </select>
            </div>

          </div>

          <div className="flex flex-wrap w-[1300px]
             h-[720px] relative
          ">
             <div className="
               bg-white
               w-[280px]
               text-[#474747]
               ">
                <h4 className="my-5 ml-5  w-30">Filtrar por</h4>
                <hr className="
                 text-[#CCCCCC] w-[220px]
                  ml-5
                 "/>
                <FilterBy arrayFilters={arrayFilters}/>
             </div>
                <section className="
                  w-[1090px] 
                  flex flex-wrap
                  absolute right-0
                ">
                    <ProductListing arrayProductCard={arrayProductCard}/>
                 </section>
          </div>
          
        </div>
     );
}
 
export default ProductListingPage;