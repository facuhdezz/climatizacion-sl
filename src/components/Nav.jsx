import Menu from '../assets/iconos/menu.svg';
import Search from '../assets/iconos/search.svg';
import Cart from '../assets/iconos/cart.svg';
import Wpp from '../assets/iconos/whatsapp.svg';
import Ig from '../assets/iconos/instagram.svg';
import Fb from '../assets/iconos/facebook.svg';
import Logo from '../assets/logos/logonav.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import SearchProducts from './SearchProducts';

const Nav = () => {

    const [display, setDisplay] = useState(window.innerWidth);
    const [flag, setFlag] = useState(false);
    const [displayed, setDisplayed] = useState(false)

    useEffect(() => {
        const changeWidth = () => {
            setDisplay(window.innerWidth);
        }

        window.addEventListener('resize', changeWidth);

        return () => {
            window.removeEventListener('resize', changeWidth);
        }
    }, []);

    useEffect(() => {
        if(display <= 1024) {
            setFlag(true)
        } else {
            setFlag(false)
        }
    }, [display]);

    const toggleDropDown = () => {
        setDisplayed(!displayed);
    };

    const DropDown = () => {
        return (
            <article className="bg-gray-950 flex flex-col gap-2 justify-around items-center p-3 text-white">
                <Link onClick={toggleDropDown} to={"/"}><h1>Inicio</h1></Link>
                <Link onClick={toggleDropDown} to={"calefactores"}><h1>Calefactores</h1></Link>
                <Link onClick={toggleDropDown} to={"aires"}><h1>Aires acondicionados</h1></Link>
                <Link onClick={toggleDropDown} to={""}><h1>Otros productos</h1></Link>
                <Link onClick={toggleDropDown} to={""}><h1>Mantenimiento</h1></Link>
            </article>
        )
    }

    return (
        <nav className="w-full sticky top-0 navbar z-10 bg-gray-950 col-span-5 border-b">
            {flag && <article className="nav-logo flex justify-around items-center pt-2">
                <Link to={"/"}><img className='h-[50px]' src={Logo} alt='Logo de Climatización Santa Lucía: fuego con copo de nieve debajo' /></Link>
                <div className='flex items-center gap-2'>
                    <a href="https://wa.me/59899707135" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Wpp} alt='Ícono de WhatsApp' /></a>
                    <a href="https://www.instagram.com/climatizacion_santa_lucia/" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Ig} alt='Ícono de Instagram' /></a>
                    <a href="https://www.facebook.com/profile.php?id=61560347577671" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Fb} alt='Ícono de Facebook' /></a>
                </div>
            </article>}
            <article className="nav-nav flex justify-center gap-4 items-center p-3 mx-auto sm:justify-between sm:w-[70%] max-sm:w-full sm:gap-6">
                {flag && <img src={Menu} alt='Menú' onClick={toggleDropDown}/>}
                {!flag && <Link to={"/"}><img className='h-[50px]' src={Logo} alt='Logo de Climatización Santa Lucía: fuego con copo de nieve debajo' /></Link>}
                {/* <div className='flex gap-1 items-center bg-gray-400 w-[80%] sm:w-[65%] h-7 rounded-sm p-2'>
                    <img src={Search} alt='Buscar: ícono de lupa' />
                    <input type="search" placeholder="Buscar" className="search-input bg-transparent outline-none placeholder:text-gray-200 w-full"/>
                </div> */}
                <SearchProducts />
                <img className="hidden" src={Cart} alt='Carrito de compras' />
                {!flag && <div className='flex items-center gap-2'>
                    <a href="https://wa.me/59899707135" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Wpp} alt='Ícono de WhatsApp' /></a>
                    <a href="https://www.instagram.com/climatizacion_santa_lucia/" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Ig} alt='Ícono de Instagram' /></a>
                    <a href="https://www.facebook.com/profile.php?id=61560347577671" target="_blank" rel="noopener noreferrer"><img className='h-6 hover:opacity-60 hover:cursor-pointer duration-200' src={Fb} alt='Ícono de Facebook' /></a>
                </div>}
            </article>
            {flag && displayed && <DropDown />}
        </nav>
    );
}

export default Nav;