import BannerFinalHome from "./BannerFinalHome";

const Section = () => {

    const contentBannerfinal = {
        imagem:"../tenisAmareloFinal.png",
        titulo:"Air Jordan edição de colecionador",
        descricao:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip",
      }

  return (
    <>
      <Section>
        <BannerFinalHome
          imagem={contentBannerfinal.imagem}
          titulo={contentBannerfinal.titulo}
          descricao={contentBannerfinal.descricao}
          funcaoBtn={contentBannerfinal.btn}
        />
      </Section>

      <BannerFinalHome
        imagem={contentBannerfinal.imagem}
        titulo={contentBannerfinal.titulo}
        descricao={contentBannerfinal.descricao}
        funcaoBtn={contentBannerfinal.btn}
      />
    </>
  );
};

export default Section;
