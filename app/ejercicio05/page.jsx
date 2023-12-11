'use client'
import React, { useState } from 'react'

const Ejercicio05 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');

    const matriz = [
      [1, 200, 200],
      [1, 1, 200],
    ];

    const analizar = () => {
        const c = palabra.split('');
        const inicio = c[0];
        const final = c[c.length - 1];
        let i = 0;
        let estado = 0;
        let caracter = 0;

        const a = new RegExp('[aA]');
        const b = new RegExp('[bB]');
        
        while(i < c.length){

            if(a.test(c[i]) || b.test(c[i])){
                caracter = 0;
            }else if(a.test(c[i])){
                caracter = 1;
            }else{
                caracter = 2;
            }

            estado = matriz[estado][caracter]

            if (estado === 200) {
                setResultado('Cadena invalida ❌');
                return;
            }

            if(inicio !== final){
                setResultado('Cadena invalida ❌');
                return;
            };
                
            i++;
        }

        if(estado === 1){
            setResultado('Cadena aceptada ✅');
            return;
        }else{
            setResultado('Cadena invalida ❌');
        }

    }

    const limpiar = () => {
        setPalabra('');
        setResultado('');
    };

    return (
        <div className='max-w-lg mx-auto mt-5'>
            <br />
            <h1 className='font-light text-center'>Automata que solo acepta cadenas de a-b que empieze y termine con la misma letra</h1>
            <br />
            <div>
                <input
                    type='text'
                    placeholder='Coloca una palabra'
                    className='m-4 p-4 w-full text-center'
                    value={palabra}
                    onChange={(e) => setPalabra(e.target.value)}
                />
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
    );
}

export default Ejercicio05;