
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu)
    }


    return (
        <>
            <div className='fixed w-full bg-gray-800 text-white p-5 shadow-2xl rounded-lg z-10'>
                <nav className='hidden lg:flex justify-around items-center h-16'>
                <div className='text-2xl font-semibold'>Kogilathota Vijay Reddy</div>
                    <ul className='flex gap-8 list-none text-2xl'>
                    <li><a href='#about' className='hover:text-red-500'>About</a></li>
                    <li><a href='#projects' className='hover:text-red-500'>Projects</a></li>
                    <li><a href='#skills' className='hover:text-red-500'>Skills</a></li>
                    <li><a href='#coding' className='hover:text-red-500'>Coding Profiles</a></li>
                    <li><a href='#contact' className='hover:text-red-500'>Contact</a></li>
                    </ul>
                </nav>   
            </div>

            <div className='lg:hidden fixed w-full bg-gray-800 text-white shadow-2xl z-10'>
                <nav className='flex justify-between items center h-16 px-4'>
                    <div className='text-2xl font-semibold'>Vijay Reddy</div>
                    <div className='relative'>
                        <div className='cursor-pointer' onClick={toggleMenu}>
                            {openMenu ? <CloseIcon fontSize='large' /> : <MenuIcon fontSize='large' />}
                        </div>
                        <ul className={`absolute top-full right-0 bg-gray-900 shadow-2xl list-none hover:bg-red-200 transition-max-heght overflow-hidden  ${openMenu ? 'max-h-60' : 'max-h-0'}`}>
                            <li><a href='#about' className='block px-4 py-2 hover:bg-gray-800' onClick={toggleMenu}>About</a></li>
                            <li><a href='#projects' className='block px-4 py-2 hover:bg-gray-800' onClick={toggleMenu}>Projects</a></li>
                            <li><a href='#skills' className='block px-4 py-2 hover:bg-gray-800' onClick={toggleMenu}>Skills</a></li>
                            <li><a href='#coding' className='block px-4 py-2 hover:bg-gray-800' onClick={toggleMenu}>Coding Profiles</a></li>
                            <li><a href='#contact' className='block px-4 py-2 hover:bg-gray-800' onClick={toggleMenu}>Contact</a></li>
                        </ul>
                    </div>
                </nav>
            </div>

        </>
        
    )

}

export default Navbar;