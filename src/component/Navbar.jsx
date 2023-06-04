import '../tailwind-output-style.css';
import Nav from './Nav.jsx'
import {useState} from 'react';
import {AiOutlineMenu} from 'react-icons/ai';
import {AiOutlineClose} from 'react-icons/ai';
import Logo from '../assets/Logo.png'

const Navbar = () => {
    const [open,setOpen] = useState(false);
    const [scroll,setNavScroll] = useState(false);
    const nav = [
        { id: 1, title: 'HOME', url:'/'},
        {id: 2, title: 'PRODUCT', url:'/Product'},
        {id: 3, title: 'Tentang Kami', url:'/TentangKami'}
    ];
    const navbarOnscroll = () => {
        if(window.scrollY >= 80){
            setNavScroll(true)
        }else{
            setNavScroll(false)
        }
    }
    window.addEventListener('scroll', navbarOnscroll);
    return(
        <div className={`${scroll ? 'nav-fix' : 'bg-transparent static'} w-full h-auto`}>
            <div className="h-auto w-full relative">
                <div className={`${open ? 'h-auto' : "h-20"} w-full flex px-4 pt-4 flex-wrap md:flex-nowrap md:justify-between md:items-center md:pb-4`}>
                    <img src={Logo} alt="Logo" className='w-auto h-12'/>
                    <div className="hidden md:contents">
                        <Nav dataNav={nav}/>
                    </div>
                    {open && <Nav dataNav={nav}/>}
                </div>
                <div className="absolute right-5 top-8 cursor-pointer md:hidden" onClick={(()=> setOpen(!open))}>
                {open ? <AiOutlineClose/> : <AiOutlineMenu/>}
                </div>
            </div>
        </div>
    );
}

export default Navbar;