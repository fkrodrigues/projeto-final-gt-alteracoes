import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="
    bg-[#1F1F1F]
     w-full
     flex flex-col items-center
    ">
        <div className="
         text-white
          px-[100px] pt-[72px]
          flex justify-between
          w-full
          relative
        ">
          <div className="
          w-[300px] h-[230px]
        
          ">
            <h2 className="
              mb-[40px]
            ">
              <img src="../src/assets/logo-footer.svg" alt="" />
            </h2>
            <p className="
              mb-[40px]
               leading-7 text-justify
            ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae,
              fugiat repellendus nemo iure eligendi quos neque.
            </p>
            <ul className="
              flex justify-between
              w-[90px]
               text-[#d0d0d0]
            ">
              <li className="hover:text-white">
                <a href="#" target="_blank">
                  <FaFacebookF />
                </a>
              </li>
              <li className="hover:text-white">
                <a href="#" target="_blank">
                  <FaInstagram />
                </a>
              </li>
              <li className="hover:text-white">
                <a href="#" target="_blank">
                  <FaTwitter />
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="mb-9 font-">Informação</h3>
            <ul
              className="
                flex flex-col gap-4
                tracking-[1px]
                text-[.9rem]
                text-[#d0d0d0]
        
              ">
                <li className="hover:text-white">
                  <a href="#">Sobre Drip Store</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Segurança</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Wishlist</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Blog</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Trabalhe Conosco</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Meus Pedidos</a>
                </li>
            </ul>
        
          </div>
          <div>
            <h3 className="mb-9 font-">Categorias</h3>
            <ul className="
                flex flex-col gap-4
                tracking-[1px]
                text-[.9rem] text-[#d0d0d0]">
                <li className="hover:text-white">
                  <a href="#">Camisetas</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Calças</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Bonés</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Headphones</a>
                </li>
                <li className="hover:text-white">
                  <a href="#">Tênis</a>
                </li>
            </ul>
          </div>
          <div className="
                flex flex-col
                tracking-[1px]
                text-[.9rem]
                w-[220px]
                text-justify
                text-[#e4e4e4]
                ">
            <h3 className="mb-9 ">Contato</h3>
            <p className="mb-6">Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE, 60150-161
            </p>
            <p>(85) 3051-3411</p>
          </div>
        
        </div>

        <div className="
          bg-[#797979]
            w-[1350px] h-[1px]
            my-6
          ">
        </div>

        <div className="
        text-white text-[.8rem]
          tracking-[.5px]
          mb-6
        ">
            <p>
            &copy; 2025 Digital College
            </p>
        </div>

    </div>
  );
};

export default Footer;
