import React, { useContext } from 'react';
import { PriorityLevels } from '../contsants';
import '../styles/card.css';
import { CommonContext } from '../context/CommonContext';

const Card = ({id, title, status, tag, priority}) => {
    const {groupByValue} = useContext(CommonContext);
    const priorityName = PriorityLevels[priority].replace(/ /g, '-');
    status = status.replace(/ /g, '');

    return (
        <div className="app-card flex-column">
            <div className="app-card-title flex-row column-center row-sb">
                <h2>{id}</h2>
                <span className="user-icon"></span>
            </div>
            <div className="app-card-body flex-row column-start">
                {groupByValue !== "status" && <img className="pd-2 mr-5 mt-2" src={`./images/${status}.svg`} />}
                <span>{title}</span>
            </div>
            <div className="app-card-info flex-row column-center">
                <img className="app-round-border pd-2 mr-5" src={`./images/${priorityName}.svg`} />
                <div className="app-round-border">
                    {tag && <span className="user-icon ml-5"></span>}
                    {tag && <span>{tag}</span>}
                </div>
            </div>
        </div>
    )
}

export const DummyCard = () => {
    return (
        <div className="app-dummy-card flex-column"></div>
    )
}

export default React.memo(Card);