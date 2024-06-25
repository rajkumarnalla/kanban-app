import { PriorityLevels } from '../contsants';
import '../styles/card.css';

const Card = ({id, title, tag, priority}) => {
    const priorityName = PriorityLevels[priority].replace(/ /g, '-');

    return (
        <div className="app-card flex-column">
            <div className="app-card-title flex-row column-center row-sb">
                <h2>{id}</h2>
                <span className="user-icon"></span>
            </div>
            <div className="app-card-body">
                {title}
            </div>
            <div className="app-card-info flex-row column-center">
                <img src={`./images/${priorityName}.svg`} />
                {tag && <span className="user-icon"></span>}
                {tag && <span>{tag}</span>}
            </div>
        </div>
    )
}

export const DummyCard = () => {
    return (
        <div className="app-dummy-card flex-column"></div>
    )
}

export default Card;