import './PostAnimais.css'
import PostModelo from '../../componentes/PostModelo';
import Banner from '../../componentes/Banner';
import animais from '../../json/animais.json'
import { useParams } from 'react-router';
import ReactMarkdown from "react-markdown";


function PostEvento() {
    const parametros = useParams();

    const animal = animais.find((animal) => {
        return animal.id === Number(parametros.id);
    })

    return (
        <>
            <Banner />
            <PostModelo fotoCapa={`/assets/animais-background.jpeg`} titulo={animal.titulo}>

                <img className='foto-animal' src={`/assets/animais/${animal.titulo}.jpg`} />
                <div className="paragrafo-animal">
                <ReactMarkdown>
                    {animal.texto}
                </ReactMarkdown>
            </div>

            </PostModelo>


        </>
    )
}

export default PostEvento