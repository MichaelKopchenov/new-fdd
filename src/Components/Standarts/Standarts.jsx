import { listComponentStandartText } from '../../utils/arrays';
import ListComponentStandarts from '../ListComponentStandarts/ListComponentStandarts';
import './Standarts.css';

export default function Standarts() {
    return (
        <section className='standarts'>
            <div className='standarts__content'>
                <div className='standarts__content_block'>
                    <h2 className='standarts__content_block_title'>
                        Высокие стандарты разработки
                    </h2>
                    <p className='standarts__content_block_description'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat dolores quibusdam adipisci sunt asperiores, harum sint, necessitatibus consectetur reprehenderit, nobis blanditiis ex quaerat aut nemo assumenda omnis dolorum odio atque?
                    </p>
                </div>
                <div className='standarts__content_block_image'/>
            </div>
            <ul className='standarts__list'>
                {
                    listComponentStandartText.map((item) => (
                        <ListComponentStandarts key={item.title} {...item} />))
                }
            </ul>
        </section>
    )
}