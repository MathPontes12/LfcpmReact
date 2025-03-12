import { Link } from 'react-router'
import './PostCardInicio.css'

// a variavel post recebe os atributos .id e .titulo
function PostCardInicio({ titulo }) {
    return (
        <Link to={`/${titulo}`}>

            <div className='post-inicio'>
                <img className='capa-inicio' src={`/assets/inicio/${titulo}.jpeg`} />
                <h2 className='titulo-inicio'> {titulo} </h2>
                <button className='botaoLer-inicio' >Saiba mais</button>
            </div>

        </Link>
    )
}

export default PostCardInicio