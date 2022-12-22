import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import swal from 'sweetalert';
import crud from '../conexiones/crud';

const CrearCuenta = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario ] = useState ({
    nombre:'',
    email:'',
    password:'',
    confirmar:''
  });
  
  const { nombre, email, password, confirmar } = usuario;

  const onChange = (e) => {
    setUsuario ({
      ...usuario,
      [e.target.name]: e.target.value
    })
  };

  const crearCuenta = async () => {
    
    //validación campos sin diligenciar
    //if((nombre).length===0 || (email).length===0 || (password).length===0) 
    if(nombre === "" || email ==="" || password === "" || confirmar===""){
      const mensaje = "Todos los campos son obligatorios";
      swal({
        title:'Error',
        text: mensaje,
        icon:'error',
        buttons:{
          confirm:{
            text:'ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          } 
        }
      });
      //Modificado a else if para que primero valide que esten todos los campos
    }else if(password !== confirmar){
      console.log("Las contraseñas no coinciden")
      const mensaje = "Las contraseñas no coinciden";
      swal({
        title:'Error',
        text: mensaje,
        icon:'error',
        buttons:{
          confirm:{
            text:'ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
    }else{
      const data = {
        nombre: usuario.nombre,
        email: usuario.email,
        password: usuario.password
      }
      console.log(data);
      const response = await crud.POST(`/api/usuarios`, data);
      const mensaje = response.msg;
      //console.log(mensaje);
      
      if(mensaje === "El usuario ya existe"){
        const mensaje = "El usuario ya existe";
      swal({
        title:'Error',
        text: mensaje,
        icon:'error',
        buttons:{
          confirm:{
            text:'ok',
            value: true,
            visible: true,
            className: 'btn btn-danger',
            closeModal: true
          }
        }
      });
      }else{
        const mensaje = "El usuario fue creado correctamente";
        swal({
          title:'Información',
          text: mensaje,
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
        // Redireccionar a pantalla inicial (serviría para cualquier otra página)
        navigate("/login");
      }

      // Limpiar cajas
      setUsuario({
        nombre: '',
        email:'',
        password:'',
        confirmar:''
      })

      // Redireccionar a pantalla inicial (serviría para cualquier otra página)
      //navigate("/login")
    };
  };

  const onSubmit = (e) => {
    e.preventDefault();
    crearCuenta();
  };
 
  return (
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center">E-commerce G12</h1>
      <form className="my-10 bg-blue-300 shadow rounded-lg p-10"
      onSubmit={onSubmit}>
        <div className="my-5">
          
          <label className="mt-3 uppercase text-indigo-900 block text-lx font-bold"> Nombre </label>
          <input 
          type="nombre"
          id="nombre"
          name="nombre"
          placeholder="Ingrese su nombre"
          className="w-full mt-3 p-3 border rounded-xl hover:tr"
          value={ nombre }
          onChange={ onChange }
          />
          
          <label className="mt-3 uppercase text-indigo-900 block text-lx font-bold">Email</label>
          <input 
          type="email" 
          id="email"
          name="email"
          placeholder="Email de registro"
          className="w-full mt-3 p-3 border rounded-xl"
          value={ email }
          onChange={ onChange }
          />

          <label className="mt-3 uppercase text-indigo-900 block text-lx font-bold"> Password</label>
          <input 
          type="password" 
          id="password"
          name="password"
          placeholder="Password de registro"
          className="w-full mt-3 p-3 border rounded-xl hover:tr"
          value={ password }
          onChange={ onChange }
          />

          <label className="mt-3 uppercase text-indigo-900 block text-lx font-bold"> Confirme su Password</label>
          <input 
          type="password"
          id="confirmar"
          name="confirmar"
          placeholder="Confirmación password"
          className="w-full mt-3 p-3 border rounded-xl hover:tr"
          value={ confirmar }
          onChange={ onChange }
          />

          <input 
            type="submit"
            value="Crear cuenta"
            className="bg-violet-600 mt-6 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" 
            />
          
          <Link 
            type="submit"
            value="Crear cuenta"
            className="block text-center my-5 hover:cursor-pointer hover:-translate-y-0.5" 
            to={"/"}>
            Regresar</Link>
        </div>
      </form>
      </div>
    </main>
  );
}

export default CrearCuenta;