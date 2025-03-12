import { Link } from 'react-router'
import './PostCardAnimais.css'

function PostCardAnimais({ animal }) {
    return (
        <Link to={`/Modelos Experimentais/${animal.id}`}>

            <div className='post'>
                <img className='capa' src={`./assets/animais/${animal.titulo}.jpg`} />
                <h2 className='titulo-post'> {animal.titulo} </h2>
                <button className='botaoLer' >Saiba mais</button>
            </div>

        </Link>

    )
}

export default PostCardAnimais