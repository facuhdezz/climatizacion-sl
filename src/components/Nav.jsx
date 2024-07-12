import Menu from '../assets/iconos/menu.svg';
import Search from '../assets/iconos/search.svg';
import Cart from '../assets/iconos/cart.svg';
import Wpp from '../assets/iconos/whatsapp.svg';
import Ig from '../assets/iconos/instagram.svg';
import Fb from '../assets/iconos/facebook.svg';
import Logo from '../assets/logos/logonav.png';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
                <h1>Calefactores</h1>
                <h1>Aires acondicionados</h1>
                <h1>Otros productos</h1>
                <h1>Sobre nosotros</h1>
            </article>
        )
    }

    return (
        <nav className="w-full sticky top-0 navbar z-10 bg-gray-950 col-span-5 border-b">
            {flag && <article className="nav-logo flex justify-around items-center pt-2">
                <Link to={"/"}><img className='h-[50px]' src={Logo} /></Link>
                <div className='flex items-center gap-2'>
                    <img className='h-[24px]' src={Wpp} />
                    <img className='h-[24px]' src={Ig} />
                    <img className='h-[24px]' src={Fb} />
                </div>
            </article>}
            <article className="nav-nav flex justify-around items-center p-3 mx-auto sm:justify-between sm:w-[70%] max-sm:w-full sm:gap-6">
                {flag && <img src={Menu} onClick={toggleDropDown}/>}
                {!flag && <Link to={"/"}><img className='h-[50px]' src={Logo} /></Link>}
                <div className='flex gap-1 items-center bg-gray-400 max-sm:w-[70%] sm:w-[70%] lg:w-[40%] 2xl:w-[50%] h-7 rounded-sm p-2'>
                    <img src={Search} />
                    <input type="search" placeholder="Buscar" className="search-input bg-transparent outline-none placeholder:text-gray-200 w-full"/>
                </div>
                <img src={Cart} />
                {!flag && <div className='flex items-center gap-2'>
                    <img className='h-[24px]' src={Wpp} />
                    <img className='h-[24px]' src={Ig} />
                    <img className='h-[24px]' src={Fb} />
                </div>}
            </article>
            {flag && displayed && <DropDown />}
        </nav>
    );
}

export default Nav;