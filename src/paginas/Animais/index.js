import Banner from '../../componentes/Banner'
import PostModelo from '../../componentes/PostModelo'
import './Animais.css'
import animais from '../../json/animais.json'
import PostCardAnimais from '../../componentes/PostCardAnimais'
import ScrollToTop from '../../componentes/ScrollToTop'


function Animais() {
    return (
        
        <>
            <ScrollToTop />
            <Banner />
            <PostModelo titulo={'Modelos Experimentais'} fotoCapa={'./assets/animais-background.jpeg'} />
            <ul className="posts">
                {animais.map((animal) => (
                    <li key={animal.id}>
                        <PostCardAnimais animal={animal}/>
                    </li>
                ))}
                
            </ul>        
        </>
        
    )
}

export default Animais