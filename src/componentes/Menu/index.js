import { Link, useLocation } from 'react-router'
import './Menu.css'
import MenuLink from '../MenuLink';

function Menu() {

    return(
        //a ancora no react-router nao é usada, da lugar ao "Link", e href da lugar ao "to"
        <header>
            <nav className='navegacao link'>
                <MenuLink to= '/'> Inicio </MenuLink>
                <MenuLink to= '/sobre'> Sobre </MenuLink>
            </nav>
        </header>
    )
}

export default Menu