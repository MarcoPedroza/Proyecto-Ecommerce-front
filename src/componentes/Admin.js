import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import crud from '../conexiones/crud';
import swal from 'sweetalert';


const Admin = () => {

  //Hacer ruta segura
  const navigate = useNavigate();

  useEffect(()=>{
    const autenticarUsuario = async () => {
      const token = localStorage.getItem('token');
      //console.log(token);
      //Validación si no hay token
      if(!token){
        navigate("/login");
      }
    }
    autenticarUsuario();
  },[navigate]);//con los [] se ejecuta solo una vez (cuando se ingresa)

  const [categoria, setCategorias] =useState([]);
  
  const cargarCategorias = async () =>{
    const response = await crud.GET(`/api/categorias`);
    console.log(response);
    setCategorias(response.categoria);
  }
  
  //Cargar info al momento de cargar la página
  useEffect(() => {
    cargarCategorias();
  },[])

  const borrarCategoria = async(e, idCategoria) => {
    
      swal({
        title:'¿Estas seguro de eliminar esta categoría?',
        text: 'Esta acción no se puede revertir',
        icon:'warning',
        buttons:true,
        dargerMode:true,
      })
      .then((willDelete) => {
        if(willDelete) {
          e.preventDefault();
          const response = crud.DELETE(`/api/categorias/${idCategoria}`);
          console.log(response.msg);
          const mensaje = response.msg;
          console.log(mensaje);
          //if(mensaje === "Categoria eliminada"){
            swal("La categoría fue eliminada correctamente",{ 
              icon: "success",
          });
          //} 
          cargarCategorias(); 
        }else{
          swal("Acción cancelada");
        }
        });
  }

  const actualizarCategoria = async (idCategoria) => {
    navigate(`/actualizar-categoria/${idCategoria}`);
  }

  const crearProductos = async (idCategoria) =>{
    navigate(`/home-productos/${idCategoria}`);
  }

  return (
    <>
      <Header/>
      <div className="md:flex md:min-h-screen">
        <Sidebar/>
        <main className="md:w-full border-none">
          <div className="md:w-full">
            <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center py-5">
              Lista de categorías 
            </h1> 
          </div>
          <div className="md:flex md:justify-center">
            <table className=" border-cyan-800 border-">
              <thead className="bg-white">
                <tr>
                  <th style={{width:'15%'}}>Imagen</th>
                  <th style={{width:'20%'}}>Nombre Categoría</th>
                  <th style={{width:'10%'}}>ID de la categoría</th>
                  <th style={{width:'45%'}}>Opciones</th>
                </tr>
              </thead>

              <tbody className="bg-white">
                {
                  categoria.map(
                    item =>
                    <tr key={item._id}>
                      <td><img src={item.imagen} width="200" height="100"></img></td>
                      <td><center>{item.nombre}</center></td>
                      <td><center>{item._id}</center></td>
                      <td>
                      
                        <input 
                          type="submit"
                          value="Eliminar"
                          className="bg-violet-600 mt-2 mb-4 m-2 p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" 
                          onClick={(e)=> borrarCategoria(e, item._id)}
                        />
                        <input 
                          type="submit"
                          value="Actualizar"
                          className="bg-violet-600 mt-2 mb-4 m-2 p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" 
                          onClick={(e)=> actualizarCategoria(item._id)}
                        />
                        <input 
                          type="submit"
                          value="Crear producto"
                          className="bg-violet-600 mt-2 mb-4 m-2 p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" 
                          onClick={(e)=> crearProductos(item._id)}
                        />

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

/* TIPO CARDS
<div>
              {
                categoria.map(
                  item =>
                  <div key={item._id} className="bg-blue-300">
                    <h5>Categoría</h5>
                    <div><img src={item.imagen} width="200" height="100"></img></div>
                    <div>{item.nombre}</div>
                    <div>{item._id}</div>
                  </div>
                )
              }
            </div>
*/ 
export default Admin;