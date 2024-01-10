import Header from '../Header/Header';
import './Initial.css';

export default function Initial() {
    return (
        <div className='initial'>
            <Header />
            <div className='initial__block'>
                <h4 className='initial__block-h4'>
                    Передовая IT-студия
                </h4>
                <h1 className='initial__block-h1'>
                    Мы создаем легкие решения
                    сложных задач и проблем
                </h1>
                <a href="#Services" className='initial__block-button'>
                    <p className='initial__block-button_text'>
                        Узнать больше
                    </p>
                </a>
            </div>
        </div>
    )
}