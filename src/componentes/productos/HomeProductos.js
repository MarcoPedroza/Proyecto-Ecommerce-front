import React, { useEffect, useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { Link, useNavigate, useParams } from 'react-router-dom';
import crud from "../../conexiones/crud";
import ViewProductos from "./ViewProductos";


const HomeProductos = () => {

  //Navigate
  const navigate = useNavigate();

  //Trer idCategoria de la URL
  const { idCategoria } = useParams();

  const [productos, setProductos] = useState([]);

  const cargarProductos = async () => {
    const response = await crud.GET(`/api/productos/${idCategoria}`);
    setProductos(response);
  }; 

  console.log(productos);

  useEffect (() => {
    cargarProductos();
  },[]);


  return (
    <>
    <Header/>
    <div className="md:flex md:min-h-screen">
      <Sidebar/>
      <main className="md:w-full border-none">
        <div className="md:w-full">
          <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center py-5">
          Lista de productos 
          </h1>
        </div>

        <div className="p-10">
            <Link 
            to={`/crear-producto/${idCategoria}`}
            className="bg-blue-500 p-5 rounded-md text-white w-full uppercase font-bold text-center hover:cursor-pointer hover:bg-blue-600 transition-colors hover:-translate-y-0.5">
                Crear Producto
            </Link>
        </div>

        <div className="bg-white shadow m-4 mt-10 rounded-lg">
          {
            productos.map( producto =>
              <ViewProductos
                key={producto._id}
                producto = {producto}
              />
            
          )}
        </div>


      </main>
    </div>
  </>
  );
}
export default HomeProductos;