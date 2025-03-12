import './Banner.css';

export default function Banner() {
    return (
        <div className= 'banner'>
            <div className='apresentacao'>
                <h1 className='titulo-banner'>
                   Laboratorio de Farmacologia Cardiovascular e Plantas Medicinais
                </h1>

                <p className='paragrafo'>
                    Focado na pesquisa ciêntifica pré-clínica, o Laboratorio de Farmacologia Cardiovascular e Plantas Medicinais (LFCPM)
                    se destaca pela pesquisa de plantas medicinais e seus efeitos cardiovasculares, metabólicos e renais em modelos animais.
                </p>
            </div>

            <div className='imagens'>
                <img
                    className='logo-fundo'
                    src='/assets/fundo-logo.png'
                />
                <img
                    className='logo'
                    src='/assets/logo.png'
                />

            </div>
        </div>
    )
}