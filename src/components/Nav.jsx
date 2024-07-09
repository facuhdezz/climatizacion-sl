import Menu from '../assets/iconos/menu.svg';
import Search from '../assets/iconos/search.svg';
import Cart from '../assets/iconos/cart.svg';
import Wpp from '../assets/iconos/whatsapp.svg';
import Ig from '../assets/iconos/instagram.svg';
import Fb from '../assets/iconos/facebook.svg';
import Logo from '../assets/logos/logonav.png';

const Nav = () => {
    return (
        <nav className="w-full fixed navbar">
            <article className="nav-logo bg-gray-950 flex justify-around items-center pt-2">
                <img className='h-[60px]' src={Logo} />
                <div className='flex items-center gap-2'>
                    <img className='h-[24px]' src={Wpp} />
                    <img className='h-[24px]' src={Ig} />
                    <img className='h-[24px]' src={Fb} />
                </div>
            </article>
            <article className="nav-nav bg-gray-950 flex justify-around items-center p-3">
                <img src={Menu} />
                <div className='flex gap-1 items-center bg-gray-400 w-[70%] h-7 rounded-sm p-2'>
                    <img src={Search} />
                    <input type="search" placeholder="Buscar" className="search-input bg-transparent outline-none"/>
                </div>
                <img src={Cart} />
            </article>
        </nav>
    );
}

export default Nav;