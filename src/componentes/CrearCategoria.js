import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { useNavigate } from 'react-router-dom';
import crud from '../conexiones/crud';
import swal from 'sweetalert';


const CrearCategoria = () => {

  //Navigate
  const navigate = useNavigate();

  //Capturar datos
  const [categoria, setCategoria ] = useState ({
    nombre:'',
    imagen:''
  });
  
  //Arreglo json
  const { nombre, imagen } = categoria;

  //Capturar evento y leer lo que tienen las cajas
  const onChange = (e) => {
    setCategoria ({
      ...categoria,
      [e.target.name]: e.target.value
    })
  };

  const ingresarCategoria = async () => {
    //Lo que se envía a la BD
    const data = {
      nombre: categoria.nombre,
      imagen: categoria.imagen
    }
    console.log(data);
    const response = await crud.POST(`/api/categorias`, data);
    const mensaje = response.msg;
    console.log(mensaje);
    const mensaje1 = "La categoría fue creada correctamente";
        swal({
          title:'Información',
          text: mensaje1,
          icon:'success',
          buttons:{
            confirm:{
              text:'ok',
              value: true,
              visible: true,
              className: 'btn btn-primary',
              closeModal: true
            }
          }
        });
  
        setCategoria({
          nombre: ''
        });

        navigate("/admin");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ingresarCategoria();
  };

  return (
    <>
    <Header/>
    <div className="md:flex md:min-h-screen">
      <Sidebar/>
      <main className="md:w-full border-none">
        <div className="md:w-full">
          <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center py-5">
          Crear categorías 
          </h1>
        </div>
        
        <div className="mt-10 flex justify-center">
          <form 
            className="my-10 bg-blue-300 shadow rounded-lg p-10"
            onSubmit={onSubmit}
          >
            <div className="my-5">
                
            <label className="uppercase text-indigo-900 block text-lx font-bold"> Nombre de la Categoría</label>
            <input 
            type="nombre" 
            id="nombre"
            name="nombre"
            placeholder="Nombre de la categoría a crear"
            className="w-full mt-3 p-3 border rounded-xl"
            value={ nombre }
            onChange={ onChange }
            />

            <label className="mt-3 uppercase text-indigo-900 block text-lx font-bold"> Imagen de la Categoría</label>
            <input 
            type="text" 
            id="imagen"
            name="imagen"
            placeholder="URL de la imagen de la categoría"
            className="w-full mt-3 p-3 border rounded-xl"
            value={ imagen }
            onChange={ onChange }
            />

            <input 
              type="submit"
              value="CREAR"
              className="bg-violet-600 mt-6 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" />
             </div>
          </form>
        </div>

      </main>
    </div>
  </>
  );
}
export default CrearCategoria;