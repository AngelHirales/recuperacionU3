'use client'
import React, { useState } from 'react'

const Ejercicio01 = () => {
    const [palabra,setPalabra] = useState('')
    const [resultado,setResultado] = useState('')
    const input = document.getElementById('input');

    const matriz = [
        [1,200,200],
        [1,0,200]
    ];

    const analizar = () => {
        // palabra del usuario
        const c = palabra.split('');
        // variable que controla el ciclo para la iteracion
        let i = 0;
        // variable que funcionara como transicion (estado inicial)
        let estado = 0;
        // variable caracter
        let caracter = 0;

        // patrones para analizar la palabra caracter por caracter
        const patronLetra = new RegExp('[a-zA-Z]+');
        const patronDigito = new RegExp('[0-9]+');

        // ciclo para iterar el array de la palabra del usuario
        while(i < c.length){
            if (patronLetra.test(c[i])){
                caracter = 0
            } else if(patronDigito.test(c[i])){
                caracter = 1
            } else{
                caracter = 2
            }

            estado = matriz[estado][caracter];

            if(estado === 200){
                setResultado('palabra aceptada. ✅')
                return;
            }

            i++;
        }

        if(estado === 1){
            setResultado("Aceptado. ✅");
            return;
        }else{
            setResultado("No aceptado. ❌");
        }
    };

    const limpiar = () => {
        setPalabra('');
        setResultado('');
    };
  
    return (
        <div className='max-w-lg mx-auto mt-5'>
            <br />
            <h1 className='font-light text-center'>Automata que acepta cualquier palabra: Ejemplo de clase</h1>
            <br />
            <div>
                <input 
                    type="text"
                    placeholder='Coloca una palabra'
                    className='m-4 p-4 w-full text-center'
                    value={palabra}
                    onChange={(e) => setPalabra(e.target.value)}/>
            </div>

            <div>
                <button onClick={analizar} className='w-full mt-5 bg-slate-600 p-4 uppercase font-bold cursor-pointer rounded hover:bg-black hover:text-slate-500'>
                    Analizar la entrada
                </button>
            </div>

            <div>
                <button onClick={limpiar} className='w-full mt-5 bg-slate-600 p-4 uppercase font-bold cursor-pointer rounded hover:bg-black hover:text-slate-500'>
                    Limpiar
                </button>
            </div>

            <div className='m-4 p-2 text-center'>
                {resultado}
            </div>

        </div>
    )
};

export default Ejercicio01;