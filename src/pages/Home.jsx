
import Banner from "../components/Banner";
import BannerFinalHome from "../components/BannerFinalHome";
import ColecaoIcones from "../components/ColecaoIcones";
import ColecoesDestaque from "../components/ColecoesDestaque";
import ProdutosAlta from "../components/ProdutosAlta";


const Home = () => {

  const data = [
    {
      titulo: 'Novo drop Supreme',
      imagem: "../public/camisa.png",
      desconto:"80% OFF"
    },

    {
      titulo: "Coleção Adidas",
      imagem: "../public/tenis.png",
      desconto:"45% OFF"
    },

    {
      titulo: "Novo Beats Bass",
      imagem: "../public/fone.png",
      desconto:"59% OFF"
    }
  ]

  const arrayItemProduto = [
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
    {
      desconto: '30% OFF',
      imagem: "../public/tenisAlta.png",
      titulo: 'K-Swiss V8 - Masculino',
      tipo:"Tênis",
      precoDe:"$200",
      precoPor:"$100"
    },
  ]

  const funcaoBtn = () => {
    alert("text")
    };

  const contentBannerfinal = {
      imagem:"../tenisAmareloFinal.png",
      titulo:"Air Jordan edição de colecionador",
      descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      btn: funcaoBtn
    }
  
  return ( 
    <>
     
        <Banner/>

        <ColecoesDestaque data={data} titulo={"Coleções em Destaque"}/>

        <ColecaoIcones/>

        <ProdutosAlta arrayItemProduto={arrayItemProduto} titulo={"Produtos em Alta"}/>

        <BannerFinalHome imagem={contentBannerfinal.imagem} titulo={contentBannerfinal.titulo} descricao={contentBannerfinal.descricao} funcaoBtn={contentBannerfinal.btn}/>

    </>
   );
}
 
export default Home;