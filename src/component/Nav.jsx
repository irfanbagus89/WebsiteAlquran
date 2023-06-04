import '../tailwind-output-style.css';
import { NavLink } from 'react-router-dom';

const Nav = (props) => {
    
    return(
        <div className='w-full h-auto mt-4 md:mt-0 md:h-12 md:w-3/5 md:my-auto  md:py-3'>
            <ul className='flex w-full h-60 pt-4 flex-col justify-evenly  md:w-auto md:p-0 md:h-auto md:flex-row'>
                {props.dataNav.map((nav) =>{
                    return <NavLink key={nav.id} to={nav.url} className={({isActive}) => isActive ? 'block w-full h-10 cursor-pointer font-sans font-medium rounded-md text-center leading-10 md:w-auto md:h-auto md:leading-none text-white bg-red-600 md:text-red-600 md:bg-transparent md:inline' : 'text-gray-600 block w-full h-10 cursor-pointer font-sans font-medium hover:text-white hover:bg-red-600 md:hover:text-red-600 rounded-md text-center leading-10 md:w-auto md:h-auto md:hover:bg-transparent md:leading-none md:bg-transparent md:inline'}>
                    {nav.title}</NavLink>
                })}
            </ul>
        </div>
    );
}

export default Nav;