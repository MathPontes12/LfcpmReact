import { Link } from 'react-router'
import './PostCardDestaques.css'

function PostCardDestaques({ evento }) {
    return (
        <Link to={`/Destaques/${evento.id}`}>

            <div className='post'>
                <img className='capa' src={`./assets/eventos/${evento.titulo}.jpeg`} />
                <h2 className='titulo-post'> {evento.titulo} </h2>
                <button className='botaoLer' >Saiba mais</button>
            </div>

        </Link>

    )
}

export default PostCardDestaques