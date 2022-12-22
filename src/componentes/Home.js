import React, { useEffect, useState } from "react";
import crud from '../conexiones/crud';
import HeaderHome from "./HeaderHome";



const Home = () => {

  const [categoria, setCategoria] = useState([]);

  const cergarCategorias = async ()=>{
    const response = await crud.GET(`/api/categorias`);
    setCategoria(response.categoria);
  }

  useEffect(() => {
    cergarCategorias();
  },[]);

  const [productos, setProductos] = useState([]);

  const cergarProductos = async ()=>{
    const response = await crud.GET(`/api/productos`);
    setProductos(response.categoria);
  }

  useEffect(() => {
    cergarProductos();
  },[]);

  return (
    <>
    <HeaderHome/>
    <main className="flex-1 flex-col mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="w-full">
        <h1 className="py-9 inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center">
            HOME E-COMMERCE G12
        </h1> 
        
      </div>
      <div className="flex bg-white">
      <div className="py-16 sm:py-24 xl:mx-auto xl:max-w-7xl xl:px-8">
        <div className="px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 xl:px-0">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Comprar por categorías</h2>
          <a href="#" className="hidden text-sm font-semibold text-indigo-600 hover:text-indigo-500 sm:block">
            Mostrar todas las categorías
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mt-4 flow-root">
          <div className="-my-2">
            <div className="relative box-content h-80 overflow-x-auto py-2 xl:overflow-visible">
              <div className="min-w-screen-xl absolute flex space-x-8 px-4 sm:px-6 lg:px-8 xl:relative xl:grid xl:grid-cols-5 xl:gap-x-8 xl:space-x-0 xl:px-0">
                {categoria.map((category) => (
                  <a
                    key={category.nombre}
                    href={category.href}
                    className="relative flex h-80 w-56 flex-col overflow-hidden rounded-lg p-6 hover:opacity-75 xl:w-auto"
                  >
                    <span aria-hidden="true" className="absolute inset-0">
                      <img src={category.imagen} alt="" className="h-full w-full object-cover object-center" />
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-gray-800 opacity-50"
                    />
                    <span className="relative mt-auto text-center text-xl font-bold text-white">{category.nombre}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 px-4 sm:hidden">
          <a href="#" className="block text-sm font-semibold text-indigo-600 hover:text-indigo-500">
            Mostrar todas las categorías
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>

    <div className="bg-gray-300">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-xl font-bold text-gray-900">Otros clientes también compraron:</h2>
        
    
        
        
      </div>
    </div>

    </main>
    </>
  );
}
export default Home;