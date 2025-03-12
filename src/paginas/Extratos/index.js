import Banner from '../../componentes/Banner'
import PostModelo from '../../componentes/PostModelo'
import './Extratos.css'
import extratos from '../../json/extratos.json'
import PostCardExtratos from '../../componentes/PostCardExtratos'
import ScrollToTop from '../../componentes/ScrollToTop'


function Extratos() {
    return (
        
        <>  
            <ScrollToTop/>
            <Banner />
            <PostModelo titulo={'Extratos'} fotoCapa={'./assets/extratos-background.jpeg'} />
            <ul className="posts">
                {extratos.map((extrato) => (
                    <li key={extrato.id}>
                        <PostCardExtratos extrato={extrato} />
                    </li>
                ))}
                
            </ul>        
        </>
        
    )
}

export default Extratos