import './Services.css';

export default function Services() {
    return (
        <div className='services'>
            <h2 className='services__title'>
                Мы создаем WEB-приложения
                для наших клиентов
            </h2>
            <p className='services__description'>
                Наши уникальные подходы и передовые технологии обеспечат ваш бизнес надежным фундаментом в цифровом пространстве.
            </p>
            <ul className='services__list'>
                <li className='services__item'>
                    <div className='services__logo'>
                        <div className='services__logo_image' />
                    </div>
                    <div className='services__item_block'>
                        <h3 className='services__item_block_title'>
                            Создание сайтов
                        </h3>
                        <p className='services__item_block_description'>
                            Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
                        </p>
                    </div>
                </li>
                <li className='services__item'>
                    <div className='services__logo'>
                        <div className='services__logo_image' />
                    </div>
                    <div className='services__item_block'>
                        <h3 className='services__item_block_title'>
                            Создание сайтов
                        </h3>
                        <p className='services__item_block_description'>
                            Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
                        </p>
                    </div>
                </li>
                <li className='services__item'>
                    <div className='services__logo'>
                        <div className='services__logo_image' />
                    </div>
                    <div className='services__item_block'>
                        <h3 className='services__item_block_title'>
                            Создание сайтов
                        </h3>
                        <p className='services__item_block_description'>
                            Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.
                        </p>
                    </div>
                </li>
            </ul>
        </div>
    )
}