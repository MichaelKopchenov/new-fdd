import './ListComponent.css';

export default function ListComponent({ title, description }) {
    return (
        <>
            <li className='list-component__item'>
                <div className='list-component__logo'>
                    <div className='list-component__logo_image' />
                </div>
                <div className='list-component__item_block'>
                    <h3 className='list-component__item_block_title'>
                        {title}
                    </h3>
                    <p className='list-component__item_block_description'>
                        {description}
                    </p>
                </div>
            </li>
        </>
    );
};