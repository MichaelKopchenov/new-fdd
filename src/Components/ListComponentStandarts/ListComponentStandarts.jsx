import './ListComponentStandarts.css'

export default function ListComponentStandarts({ title, description }) {
    return (
        <li className="list-component-standarts">
            <div className="list-component-standarts__block">
                <div className="list-component-standarts__image" />
                <h3 className="list-component-standarts__title">
                    {title}
                </h3>
            </div>
            <p className="list-component-standarts__description">
                {description}
            </p>
        </li>
    )
}