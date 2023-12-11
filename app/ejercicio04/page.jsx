'use client'
import React, {useState} from 'react'

const Ejercicio04 = () => {
    const [palabra,setPalabra] = useState('');
    const [resultado, setResultado] = useState('');
    
    const matriz = [
        [1, 0, 200],
        [2, 0, 200],
        [2, 3, 200],
        [1, 4, 200],
        [4, 4, 200]
    ];

    const analizar = () => {
        const c = palabra.split('');
        let i = 0;
        let estado = 0;
        let caracter = 0;

        const a = new RegExp('[a]');
        const b = new RegExp('[b]');

        while (i < c.length) {
        
            if(a.test(c[i])){
                caracter = 0;
            }if(a.test(c[i])){
                caracter = 0;
            }else if(b.test(c[i])){
                caracter = 1;
            }else if(b.test(c[i])){
                caracter = 4;
            }else{
                caracter = 4;
            }

            estado = matriz[estado][caracter]

            if (estado === 200) {
                setResultado('palabra invalida ❌')
                return;
            }

            i++;
        }

        if(estado === 4){
            setResultado('palabra aceptada ✅');
            return;
        }else {
            setResultado('palabra invalida ❌');
        }

}
    const limpiar = () => {
        setPalabra('');
        setResultado('');
    }

    return (
        <div className='max-w-lg mx-auto mt-5'>
            <br />
            <h1 className='font-light text-center'>Automata que solo acepta cadenas de a-b que contenga la palabra "aabb"</h1>
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
};

export default Ejercicio04;