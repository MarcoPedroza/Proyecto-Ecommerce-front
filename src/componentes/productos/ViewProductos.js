import React from 'react';

export const ViewProductos = ({ producto }) => {
    
    const { nombre, descripcion, stock, precio, imagen } = producto;
    
    return(
        <main>
            <div className='m-3 border-b p-5 flex justify-between items-center'>
                <div className='flex flex-col items-start'>
                    <p className='mb-1 text-xl text-violet-600 uppercase'>nombre:{nombre}</p>
                    <img src={imagen} width="250" height="150"></img>
                    <p className='mb-1 text-sm text-violet-600'>Descripción:{descripcion}</p>
                    <p className='mb-1 text-sm text-violet-600'>Stock:{stock}</p>
                    <p className='mb-1 text-sm text-violet-600'>Precio:{precio}</p>
                </div>
                <div className='flex flex-col lg:flex-row gap-2'>
                    <button className="bg-violet-600 mt-2 mb-4 w-full p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5">
                        Editar
                    </button>
                    <button className="bg-violet-600 mt-2 mb-4 w-full p-3 text-white uppercase font-bold rounded hover:cursor-pointer hover:bg-fuchsia-700 transition-colors hover:-translate-y-0.5">
                        Eliminar
                    </button>
                </div>
            </div>
        </main>
    )
}

export default ViewProductos;