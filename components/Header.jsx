import Link from 'next/link';
import React from 'react';

const Header = () => {
  return <header className='p-4 bg-slate-600 space-y-5'>
    <h1 className='p-8 text-xl text-center text-slate-50'>AUTOMATAS FINITOS DETERMINISTAS</h1>

    <nav>
        <ul className='flex justify-evenly uppercase'>
          	<li className='p-2 bg-slate-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>
              <Link href={'/'}>Inicio</Link>
            </li> 
            <li className='p-2 bg-slate-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>
              <Link href={'/ejercicio01'}>Ejercicio 01</Link>
            </li>  
            <li className='p-2 bg-slate-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>
              <Link href={'/ejercicio02'}>Ejercicio 02</Link>
            </li>
            <li className='p-2 bg-slate-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>
              <Link href={'/ejercicio03'}>Ejercicio 03</Link>
            </li>
            <li className='p-2 bg-slate-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>
              <Link href={'/ejercicio04'}>Ejercicio 04</Link>
            </li>
            <li className='p-2 bg-slate-200 rounded-md cursor-pointer hover:bg-black hover:text-white'>
              <Link href={'/ejercicio05'}>Ejercicio 05</Link>
            </li>
        </ul>
    </nav>

  </header>
};

export default Header;