import './Header.css';

export default function Header({ onChange }) {
    return (
        <header className="header" id='Header'>
                <ul className='header__ul'>
                    <li className='header__li'>
                        <button
                            className='header__li-link'
                            active='main'
                            onClick={() => onChange('main')
                            }>
                            Главная
                        </button>
                    </li>
                    <li className='header__li'>
                        <button
                            className='header__li-link'
                            active='staff'
                            onClick={() => onChange('staff')}
                        >
                            Наша команда
                        </button>
                    </li>
                    <li className='header__li'>
                        <button
                            className='header__li-link'
                            active='works'
                            onClick={() => onChange('works')}
                        >
                            Наши проекты
                        </button>
                    </li>
                    <li className='header__li'>
                        <button
                            className='header__li-link'
                            active='works'
                            onClick={() => onChange('services')}
                        >
                            Услуги
                        </button>
                    </li>
                    <li className='header__li'>
                        <button
                            className='header__li-link'
                            active='works'
                            onClick={() => onChange('contacts')}
                        >
                            Контакты
                        </button>
                    </li>
                </ul>
            </header>
    )
}