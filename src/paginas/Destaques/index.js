import Banner from '../../componentes/Banner'
import PostCardDestaques from '../../componentes/PostCardDestaques'
import PostModelo from '../../componentes/PostModelo'
import './Destaques.css'
import eventos from '../../json/eventos.json'
import ScrollToTop from '../../componentes/ScrollToTop'

function Destaques() {
    return (
        
        <>  
        <ScrollToTop />
        <Banner />
        <PostModelo titulo={'Destaques'} fotoCapa={'./assets/destaques-background.jpg'} />
        <ul className="posts">
            {eventos.map((evento) => (
                <li key={evento.id}>
                    <PostCardDestaques evento={evento} />
                </li>
            ))}
            
        </ul>        
        </>
        
    )
}

export default Destaques

