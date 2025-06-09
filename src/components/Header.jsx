import Logo from "./Logo";
import Nav from "./Navbar";
import { Button } from 'primereact/button';

import { FiSearch } from "react-icons/fi";

const Header = () => {
    return ( 
        <header className=" h-45 px-25 py-5 bg-white">
            <div className="flex justify-between items-center">
                <Logo/>
                <div className="relative">
                        <input
                        className="
                         bg-gray-100
                           rounded-lg
                           w-xl h-14
                           p-5                          
                        "
                        type="search" placeholder="Pesquisar produto..."
                        />
                        <a href="#">
                            <FiSearch className=" absolute
                            bottom-4 right-5 text-gray-400 w-[25px] h-[25px] hover:text-gray-300" />
                        </a>
                </div>
                <div className="text-[#474747]">
                    <a href="#" >Cadastre-se</a>
                    <div className="
                      w-full h-[1px]
                      bg-[#474747]
                    "></div>
                </div>
                    
                <Button label="Entrar"
                    className="
                      bg-[#c92071] text-white
                      p-2.5 rounded-[8px]
                      w-[114px] text-[.9rem]
                      tracking-widest
                      hover:bg-[#db2777]
                    "
                />

                <div className="relative w-[33px] h-[29px] ">
                    <img
                    className=" w-[18.5px] h-[35px]
                    "
                    src="./src/assets/mini-cart.svg"
                    alt="carrinho"
                    />
                    <div className=" bg-[#db2777] w-[17px] h-[17px] absolute rounded-[100%] top-0 right-1 flex justify-center items-center ">
                      <div className="text-white  text-[12px]">2</div>
                    </div>
                </div>

            </div>
            <div className="mt-8" >
               <Nav/>
            </div>
        </header>
     );
}
 
export default Header;