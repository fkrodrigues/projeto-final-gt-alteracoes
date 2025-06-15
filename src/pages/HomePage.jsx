import Collection from "../components/Collection";
import IconsCollection from "../components/IconsCollection";
import LastBannerHome from "../components/LastBannerHome";
import ProductListing from "../components/ProductListing";
import Section from "../components/Section";
import Gallery from "../components/Gallery";
import BannerHome from "../components/BannerHome";



const Home = () => {

  const link = {
    text: `ver mais ${"\u2192"}`,
    href: "#",
  }

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
  ]

  const infosSection1 = {
      title: "Coleções em Destaque",
      titleAlign: "",
  }

  const dataCollection = [
      {
        titleCard: 'Novo drop Supreme',
        image: "../public/camisa.png",
        discount:"80% OFF"
      },

      {
        titleCard: "Coleção Adidas",
        image: "../public/tenis.png",
        discount:"45% OFF"
      },

      {
        titleCard: "Novo Beats Bass",
        image: "../public/fone.png",
        discount:"59% OFF"
      }
  ]
   
  const infosSection3 = {
      title: "Produtos em alta",
      titleAlign: "",
  }

  
  const imageSlide= [
    
    {id:1, src: "/public/home slide 1.png"},
    {id:2, src: "/public/home slide 2.jpeg"},
    {id:3, src: "/public/home slide 3.jpeg"},
    {id:4, src: "/public/home slide 4.png"},
    {id:5, src: "/public/home slide 5.png"},
    {id:6, src: "/public/home slide 6.png"},
    {id:7, src: "/public/home slide 7.png"},
    {id:8, src: "/public/home slide 8.png"},
  ]

  return ( 
    <>
        <Gallery 
        show="banner"
        imageSlide={imageSlide}
        />
        <Section 
          children={
            <Collection 
              dataCollection={dataCollection}
            />}
          title={infosSection1.title}
          titleAlign={infosSection1.titleAlign}
        />
        <Section children={<IconsCollection />}/>
        <Section 
          children={<ProductListing arrayProductCard={arrayProductCard}/>} 
          title={infosSection3.title}
          titleAlign={infosSection3.titleAlign} 
          link={link} 
        />
        <LastBannerHome/>

    </>
   );
}
 
export default Home;