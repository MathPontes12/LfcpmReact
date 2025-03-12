import './PostExtrato.css'
import PostModelo from '../../componentes/PostModelo';
import Banner from '../../componentes/Banner';
import extratos from '../../json/extratos.json'
import { useParams } from 'react-router';
import ReactMarkdown from "react-markdown";


function PostEvento() {
    const parametros = useParams();

    const extrato = extratos.find((extrato) => {
        return extrato.id === Number(parametros.id);
    })

    return (
        <>
            <Banner />
            <PostModelo fotoCapa={`/assets/extratos-background.jpeg`} titulo={extrato.titulo}>

                <img className='foto-extrato' src={`/assets/extratos/${extrato.titulo}.jpg`} />
                <div className="paragrafo-extrato">
                <ReactMarkdown>
                    {extrato.texto}
                </ReactMarkdown>
            </div>

            </PostModelo>


        </>
    )
}

export default PostEvento