import Banner from "../../componentes/Banner"
import PostModelo from "../../componentes/PostModelo"
import './SobreMim.css'

function SobreMim() {
    return (
        <>
            <Banner/>
            <PostModelo fotoCapa={'./assets/grupo-background.jpg'} titulo={'O Grupo'} >

                <img className="fotoSobreMim" src="./assets/grupo.jpeg" alt="foto do grupo" />

                <p className='paragrafo'>
                    O Laboratório Cardiovascular e Plantas Medicinais (LFCPM) está no Departamento de Farmacologia e Psicobiologia (DFP) do Instituto de Biologia Roberto Alcântara Gomes (IBRAG/UERJ) 
                    e tem realizado importantes estudos com produtos naturais. 
                </p>
                <p className='paragrafo'>
                    A nossa linha de pesquisa aborda os aspectos farmacológicos e bioquímicos de extratos de plantas medicinais, 
                    e seus efeitos cardiovasculares e metabólicos. aprendi lógica de programação e o básico de várias linguagens, como PHP, Python, Java, mas sem aprofundar muito em cada uma delas. Eu gostava muito de estudar programação, mas na época não fazia ideia de que trabalharia com isso hoje.
                </p>
                <p className='paragrafo'>
                    O professor emérito Roberto Soares de Moura deu início à linha de pesquisa de produtos naturais que segue 
                    sendo coordenada com a liderança e dedicação da professora Titular Angela de Castro Resende, 
                    contando com a importante colaboração das professoras Dayane Teixeira Ognibene, 
                    Cristiane Aguiar da Costa e Graziele Freitas de Bem, que foi incorporada ao grupo mais recentemente. 
                </p>
                <p className='paragrafo'>
                    Nosso grupo conta também com a importante colaboração de técnicos, graduandos, mestrandos, doutorandos e pós-doutorandos, 
                    além do importante apoio financeiro da FAPERJ, CNPq e CAPES. 
                </p>
            </PostModelo >
        </>

    )
}

export default SobreMim