import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import crud from '../conexiones/crud';
import swal from 'sweetalert';


const Login = () => {

  const navigate = useNavigate();

  const [usuario, setUsuario ] = useState ({
    email:'',
    password:''
  });
  
  const { email, password } = usuario;

  const onChange = (e) => {
    setUsuario ({
      ...usuario,
      [e.target.name]: e.target.value
    })
  };

  const ingresarCuenta = async () => {
    
    const data = {
      email: usuario.email,
      password: usuario.password
    }
    console.log(data);
    const response = await crud.POST(`/api/auth`, data);
    const mensaje = response.msg;
      console.log(mensaje);

      //validaciones de seguridad credenciales
      if(mensaje === "El usuario no existe"){
        const mensaje = "El usuario no existe";
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
      }else if(mensaje === "Password incorrecto"){
        const mensaje = "Password incorrecto";
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
        //Guardar el token en una vaiable
        const jwt = response.token;

        //Guardar la info en localStorage
        localStorage.setItem('token', jwt);
      
        // Redireccionar a pantalla inicial (serviría para cualquier otra página)
        navigate("/admin");
      }   
  };

  const onSubmit = (e) => {
    e.preventDefault();
    ingresarCuenta();
  };

  return (
    // 2- Estilo contenedor 
      // 2- Estilo formulario
    <main className="container mx-auto mt-5 md:mt-20 p-5 md:flex md:justify-center">
      <div className="md:w-2/3 lg:w-2/5">
        <h1 className="inline bg-gradient-to-r from-indigo-900 via-indigo-400 to-indigo-900 bg-clip-text font-display text-5xl tracking-tight text-transparent font-bold  md:flex md:justify-center">E-commerce G12</h1>
      <form 
      className="my-10 bg-blue-300 shadow rounded-lg p-10"
      onSubmit={onSubmit}
      >
        <div className="my-5">
          
          <label className="uppercase text-indigo-900 block text-lx font-bold">Email</label>
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

          <input 
            type="submit"
            value="Iniciar sesión"
            className="bg-violet-600 mt-6 mb-5 w-full py-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5" />
          
          <Link 
            type="submit"
            value="Crear cuenta"
            className="block text-center my-5 hover:cursor-pointer hover:-translate-y-0.5" 
            to={"/crear-cuenta"}>
            Crear Cuenta</Link>
        </div>
      </form>
      </div>
    </main>
  );
}
export default Login;