import './Inicio.css'

// importe do json
import Banner from '../../componentes/Banner'
import PostModelo from '../../componentes/PostModelo'
import PostCardInicio from '../../componentes/PostCardInicio'

function Inicio() {
    return (
        // posts.map retorna uma funçao passando o atributo qualquer (post) que retorna uma li
        <>
            <Banner />
            <PostModelo titulo={'Conheça um pouco mais...'} fotoCapa={'./assets/destaques-background.jpg'}  />
            <ul className="posts">
               <li>
                    <PostCardInicio titulo={'Destaques'}/>
               </li>
               <li>
                    <PostCardInicio titulo={'Extratos'}/>
               </li>
               <li>
                    <PostCardInicio titulo={'Modelos Experimentais'}/>
               </li>
            </ul>
        </>
    )
}

export default Inicio