import React from 'react'
import { Link } from 'react-router-dom'

// Images
import Logo from '@/presentation/assets/images/logo.png'

// stylds 
import { NavbarStyled } from './styled'

// icons
import { MdDarkMode } from 'react-icons/md'
import { BsSun } from 'react-icons/bs'

// interfaces
import { NavbarType } from '@/presentation/interfaces'

const Navbar:React.FC<NavbarType> = ({ theme, toggleTheme }) => {

    return (
        <NavbarStyled>
            <Link to='/'>
                <img src={Logo} alt="logo da wa project" />
                <h1>Project</h1>
            </Link>
            <nav>
                <ul>
                    <li onClick={toggleTheme}>
                        {
                            theme === 'dark' ? <MdDarkMode /> : <BsSun />
                        }
                    </li>
                </ul>
            </nav>
        </NavbarStyled>
    )
}

export default Navbar