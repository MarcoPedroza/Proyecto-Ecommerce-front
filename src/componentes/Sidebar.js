import React from "react";
import { Link } from 'react-router-dom';


const Sidebar = () => {


  return (
    <aside className=" bg-white md:w-60 lg:w-76 px-5 py-10 border-none">
        <Link 
            type="submit"
            value="inicio"
            className="w-full py-5 font-semibold bg-blue-400 rounded-lg text-white block text-center my-5 hover:cursor-pointer  hover:bg-blue-500 transition-colors hover:-translate-y-0.5" 
            to={"/admin"}>
            Inicio
        </Link>
        
        <Link 
            type="submit"
            value="Crear cuenta"
            className="w-full py-5 font-semibold bg-blue-400 rounded-lg text-white block text-center my-5 hover:cursor-pointer  hover:bg-blue-500 transition-colors hover:-translate-y-0.5" 
            to={"/crear-categoria"}>
            Crear Categoria
        </Link>
        <Link 
            type="submit"
            value="Crear cuenta"
            className="w-full py-5 font-semibold bg-blue-400 rounded-lg text-white block text-center my-5 hover:cursor-pointer hover:bg-blue-500 transition-colors hover:-translate-y-0.5" 
            to={"/buscar-categoria"}>
            Buscar categorías
        </Link>
        <Link 
            type="submit"
            value="Crear cuenta"
            className="w-full py-5 font-semibold bg-blue-400 rounded-lg text-white block text-center my-5 hover:cursor-pointer  hover:bg-blue-500 transition-colors  hover:-translate-y-0.5" 
            to={"/actualizar-categoria"}>
            Actualizar categorías
        </Link>
        <Link 
            type="submit"
            value="Crear cuenta"
            className="w-full py-5 font-semibold bg-blue-400 rounded-lg text-white block text-center my-5 hover:cursor-pointer  hover:bg-blue-500 transition-colors hover:-translate-y-0.5" 
            to={"/actualizar-categoria"}>
            Borrar categorías
        </Link>
    </aside>
  );
}
export default Sidebar;