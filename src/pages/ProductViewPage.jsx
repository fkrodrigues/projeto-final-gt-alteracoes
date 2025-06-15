import ProductListing from "../components/ProductListing";
import ProductOptions from "../components/ProductOptions ";
import Section from "../components/Section";
import BuyBox from "../components/BuyBox";
import Gallery from "../components/ShowThumbs";
import ShowThumbs from "../components/ShowThumbs";

const ProductViewPage = () => {


    
    const arrayInfoBuybox = [
        {
            name:"Tênis Nike Revolution 6 Next Nature Masculino",
            ref: "Casual | Nike | REF:38416711",
            rating:[
                {
                    id: 1,
                    stars: true
                },
                {
                    id: 2,
                    stars: true
                },
                {
                    id: 3,
                    stars: true
                },
                {
                    id: 4,
                    stars: true
                },
                {
                    id: 5,
                    stars: false
                },
            ],
            score: "4.7",
            qntAvaliation: "90 avaliações",
            priceDiscount:"219,00",
            price:"320,00",
            description :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.",
            tamanho:[ "39","40","41","42","43"],
            cor:[ "1","2","3","4","5"],
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
    ]

    const infosSection = {
        title: "Produtos em alta",
        titleAlign: "",
    }

    const link = {
        text: `ver mais ${"\u2192"}`,
        href: "#",
      }

    const slideGallery = [
    
        {id:1, src: "/public/produc-image-1.jpeg"},
        {id:2, src: "/public/produc-image-2.jpeg"},
        {id:3, src: "/public/produc-image-3.jpeg"},
        {id:4, src: "/public/produc-image-4.jpeg"},
        {id:5, src: "/public/produc-image-5.jpeg"},
    ]

    const imagesShowTrumbs = [
    
        {src: "/public/product-thumb-1.jpeg",
         alt: "Tênis"
        },
        {src: "/public/product-thumb-2.jpeg",
          alt: "Tênis"
        },
        {src: "/public/product-thumb-3.jpeg",
          alt: "Tênis"
        },
        {src: "/public/product-thumb-4.jpeg",
          alt: "Tênis"
        },
        {src: "/public/product-thumb-5.jpeg",
          alt: "Tênis"
        },
    ]

    // const imageSlide= [
    //   null
    // ]


    return ( 
        <div className="w-full">

           <p className="text-[#474747] mt-5 mb-10 ml-[100px] text-[15px]">
            <strong>Home</strong> / Produtos / Tênis /Nike / Tênis Nike Revolution 6 Next Nature Masculino
           </p>

           <div className="flex h-[700px] ">
               <Gallery 
                 show="showThumbs"
                 slideGallery={slideGallery}
                 imagesShowTrumbs={imagesShowTrumbs}
               />
               <BuyBox 
               name={arrayInfoBuybox[0].name}
               ref={arrayInfoBuybox[0].ref}
               rating={arrayInfoBuybox[0].rating} 
               score={arrayInfoBuybox[0].score} 
               qntAvaliation={arrayInfoBuybox[0].qntAvaliation}
               priceDiscount={arrayInfoBuybox[0].priceDiscount}
               price={arrayInfoBuybox[0].price}
               description={arrayInfoBuybox[0].description}
               children={<ProductOptions/>}
               />
           </div>
           
           <Section 
             title={infosSection.title} 
             link={link}
             cla
           >
               <ProductListing arrayProductCard={arrayProductCard}/>
           </Section>
        </div>
     );
}
 
export default ProductViewPage;