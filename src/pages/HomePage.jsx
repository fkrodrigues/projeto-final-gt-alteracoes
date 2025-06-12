import Gallery from "../components/Gallery";
import LastBannerHome from "../components/LastBannerHome";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";



const Home = () => {

  const link = {
    text: "ver mais &#8594",
    href: "https://www.google.com/",
  };

   const arrayItemProduct = [
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
    ]

  return ( 
    <>
        <Gallery/>
        {/* <Section/> */}
        {/* <Section/> */}
        <Section 
        children={<ProductListing arrayItemProduto={arrayItemProduct}/>} 
        link={link} titleAlign="center" title={"Coleções em Destaque"}/>
        <LastBannerHome/>

    </>
   );
}
 
export default Home;