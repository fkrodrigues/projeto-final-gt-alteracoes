import { NavLink } from "react-router-dom";


const Nav = () => {
  return (
      <ul className="flex gap-8 text-gray-700 
      ">
        <li className="relative transition duration-300 hover:text-[#c92071]"><NavLink to={"/"} >Home</NavLink></li>

        <li className="relative transition duration-300 hover:text-[#c92071]"><NavLink to={"/produtos"}>Produtos</NavLink></li>

        <li className="relative transition duration-300 hover:text-[#c92071]"><NavLink to={"/categorias"}>Categorias</NavLink></li>

        <li className="relative transition duration-300 hover:text-[#c92071]"><NavLink to={"/pedidos"}>Meus Pedidos</NavLink></li>
      </ul>
  );
};

export default Nav;
