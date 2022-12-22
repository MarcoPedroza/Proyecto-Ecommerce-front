import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();

  const cerrarSesion = () =>{
    localStorage.removeItem("token");
    navigate("/");
  }

  return (
    <header className="px-4 py-5 bg-indigo-800 border-b text-gray-200  bg-gradient-to-r from-blue-400 to-blue-600 border-none" >
        <div className="md:flex md:justify-between">
          <h2 className=" text-4xl text-slate-200 py-3 font-black text-center mb-3 md:mb-1 uppercase">
                Panel de Administrador G12
          </h2>
          <div className="flex flex-col md:flex-row items-center gap-4">
            <input 
                type="submit"
                value="Cerrar sesión"
                className="bg-violet-600 mt-2 mb-4 w-full p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" 
                onClick={cerrarSesion}
            />
          </div>
        </div>
    </header>
  );
}
export default Header;