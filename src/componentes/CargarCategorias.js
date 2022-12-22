import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Link, useNavigate } from 'react-router-dom';
import crud from '../conexiones/crud';

const CargarCategorias = () => {

  const navigate = useNavigate();
  
  //Arreglo json
  //const { nombre } = categoria;
  
  const [categoria, setCategorias] =useState([]);

  /*const onChange = (e) => {
    setCategoria ({
      ...categoria,
      [e.target.name]: e.target.value
    })
  };*/

  const cargarCategorias = async () =>{
    const response = await crud.GET(`/api/categorias`);
    console.log(response);
    setCategorias(response.categoria);
  }

  //Cargar info al momento de cargar la página
  useEffect(() => {
    cargarCategorias();
  },[])

  /*const onSubmit = (e) => {
    e.preventDefault();
    cargarCategoria();
  }*/

  return (
    <>
    <Header/>
    <div className="md:flex md:min-h-screen">
      <Sidebar/>
      <main className="md:w-full border-none">
        <div className="md:w-full">
          <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center py-5">
          Cargar categorías 
          </h1>
        </div>
        
        <div className="mt-10 flex justify-center">
          <table className="table table-bordered">
            <thead className="bg-white">
              <tr>
                <th style={{width:'10%'}}>ID</th>
                <th style={{width:'75%'}}>NOMBRE</th>
                <th style={{width:'15%'}}>OPCIONES</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {
                categoria.map(
                  item=>
                    <tr key ={item._id}>
                      <td>{item._id}</td>
                      <td>{item.nombre}</td>
                
                      <td>
                        <Link>Crear producto</Link>&nbsp;&nbsp;
                        <Link>Editar</Link>&nbsp;&nbsp;
                        <button>Eliminar</button>
                      </td>
                    </tr>
                )
              }

            </tbody>

          </table>
        </div>

      </main>
    </div>
  </>
  );
}
export default CargarCategorias;