import React, { useContext, useEffect, useState } from "react";
import { CommonContext } from "../context/CommonContext";
import { AllStatus, PriorityLevels } from "../contsants";
import "../styles/kanbanHeader.css";

const KanbanHeader = ({users}) => {
    const {groupByValue} = useContext(CommonContext);
    const [headerData, setHeaderData] = useState(AllStatus);
    const logos = {};

    useEffect(() => {
        if (groupByValue === "status") {
            setHeaderData(AllStatus);
        }
    }, [groupByValue])

    const statusHeader = () => {
        return headerData.map((el, index) => {
            return (
                <div key={"kb-h-"+index} className="flex-row column-center" style={{paddingRight: '32px'}}>
                    <img src={`./images/${el.replace(/ /g, '')}.svg`}  alt={`${el} logo`}/>
                    <span>{el}</span>
                    <img src="./images/add.svg" alt="add logo" />
                    <img src="./images/3-dot-menu.svg" alt="menu logo"/>
                </div>
            )
        })
    }

    const userHeader = () => {
        return users.map((el, index) => {
            return (
                <div key={"kb-h-"+index} className="flex-row column-center" style={{paddingRight: '32px'}}>
                    <span className="user-icon"></span>
                    <span>{el.name}</span>
                    <img src="./images/add.svg" alt="add logo"/>
                    <img src="./images/3-dot-menu.svg" alt="menu logo"/>
                </div>
            )
        })
    }

    const priorityHeader = () => {
        return Object.values(PriorityLevels).map((el, index) => {
            return (
                <div key={"kb-h-"+index} className="flex-row column-center" style={{paddingRight: '32px'}}>
                    <img src={`./images/${el.replace(/ /g, '-')}.svg`} alt={`${el} logo`}/>
                    <span>{el}</span>
                    <img src="./images/add.svg" alt="add logo"/>
                    <img src="./images/3-dot-menu.svg" alt="menu logo"/>
                </div>
            )
        })
    }

    return (
        <div className="kanban-header flex-row">
            {groupByValue === "status" && statusHeader()}
            {groupByValue === "user" && userHeader()}
            {groupByValue === "priority" && priorityHeader()}
        </div>
    )
}

export default React.memo(KanbanHeader);