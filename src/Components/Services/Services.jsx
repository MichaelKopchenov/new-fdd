import ListComponent from '../ListComponent/ListComponent';
import { listComponentText, buttonComponentText } from '../../utils/arrays';
import ButtonComponent from '../ButtonComponent/ButtonComponent';
import './Services.css';

export default function Services() {
    return (
        <div id='Services' className='services'>
            <h2 className='services__title'>
                Мы создаем WEB-приложения
                для наших клиентов
            </h2>
            <p className='services__description'>
                Наши уникальные подходы и передовые технологии обеспечат ваш бизнес надежным фундаментом в цифровом пространстве.
            </p>
            <ul className='services__list'>
                {
                    listComponentText.map((item) => (
                        <ListComponent key={item.title} {...item} />))
                }
            </ul>
            <ButtonComponent {...buttonComponentText[1]} />
        </div>
    )
}