import React from "react";
import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="px-9 py-4 bg-indigo-800 border-b text-gray-200  bg-gradient-to-r from-blue-400 to-blue-600 border-none" >
        <div className="md:flex md:justify-between">
          <h2 className=" text-5xl text-slate-200 py-4 font-black text-center mb-3 md:mb-1 uppercase">
                Bienvenido
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
          <Link 
              type="submit"
              value="Crear cuenta"
              className="md:flex md:justify-center text-center my-3 hover:cursor-pointer hover:-translate-y-0.5 mx-6 p-5 font-semibold uppercase  bg-violet-600 rounded-lg text-white  hover:bg-violet-700 transition-colors" 
              to={"/login"}>
              Iniciar sesión</Link>
        
          </div>
        </div>
    </header>
  );
}
export default Header;