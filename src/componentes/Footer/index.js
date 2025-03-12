import { Link } from 'react-router'
import './Footer.css'

function Footer() {
    return (
        <footer className='rodape'>
            <p className='texto-rodape'>LFCPM</p>
            <Link to={"https://www.instagram.com/lfcpm.uerj/"}>
                <img className='instagram-image' src='./assets/instagram.png' />
            </Link>
        </footer>
    )
}

export default Footer