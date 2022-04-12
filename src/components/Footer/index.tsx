import logo from '../../assets/footer_logo.svg';
import * as S from './styles';

export function Footer() {
    return (
        <S.Container>
            <div className='container'>
                <S.Text>
                    <h3>Módulo JavaScript</h3>
                    <p>Consumindo e exibindo dados de uma API</p>
                </S.Text>
                <a href='https://codeboost.com.br' target='_blank' rel="noreferrer">
                    <img src={logo} alt='Logo Codeboost'/>
                </a>
            </div>
        </S.Container>
    )
}