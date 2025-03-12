import { Link } from 'react-router'
import './PostCardExtratos.css'

function PostCardExtratos({ extrato }) {
    return (
        <Link to={`/extratos/${extrato.id}`}>

            <div className='post'>
                <img className='capa' src={`./assets/extratos/${extrato.titulo}.jpg`} />
                <h2 className='titulo-post'> {extrato.titulo} </h2>
                <button className='botaoLer' >Saiba mais</button>
            </div>

        </Link>

    )
}

export default PostCardExtratos