import { NavLink } from 'react-router'
import './MenuLink.css'

function MenuLink(props) {
      // useLocalion é um hook do react-router 
      //const localizacao= useLocation();
      //
        
    return (
        //o NavLink vem como alternativa para o useLocation(), sendo uma funçao de ativaçao para a classe nesse formato
        <NavLink className= {({ isActive }) => `${isActive ? 'linkDestacado' : ""}`}
    to={props.to}
    end > {props.children} </NavLink> // usando o children o que for escrito pra titulo do link fica sendo o children
    )
}

export default MenuLink
