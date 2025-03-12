import './PostEvento.css'
import PostModelo from '../../componentes/PostModelo';
import Banner from '../../componentes/Banner';
import eventos from '../../json/eventos.json'
import { useParams } from 'react-router';
import EndMessage from '../../componentes/End-message';
import ReactMarkdown from "react-markdown";

function PostEvento() {
    const parametros = useParams();

    const evento = eventos.find((evento) => {
        return evento.id === Number(parametros.id);
    })

    return (
        <>
            <Banner />
            <PostModelo fotoCapa={`/assets/destaques-background.jpg`} titulo={evento.titulo}>

                <img className='foto-evento' src={`/assets/eventos/${evento.titulo}.jpeg`} />
                <div className="paragrafo-evento">
                    <ReactMarkdown>
                        {evento.texto}
                    </ReactMarkdown>
                </div>
            </PostModelo>
            <EndMessage />
        </>
    )
}

export default PostEvento