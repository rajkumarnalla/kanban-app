import React, { useContext, useEffect, useMemo, useState } from "react";
import { CommonContext } from "../context/CommonContext";
import { AllStatus, PriorityLevels } from "../contsants";
import "../styles/kanbanHeader.css";

const KanbanHeader = ({tickets, users}) => {
    const {groupByValue} = useContext(CommonContext);

    const getTicketsCount = (value) => {
        if (groupByValue === "status") {
            return tickets?.filter((el) => el.status === value).length || 0;
        } else if (groupByValue === "user") {
            return tickets?.filter((el) => el.userId === value).length || 0;
        } else if (groupByValue === "priority") {
            return tickets?.filter((el) => PriorityLevels[el.priority] === value).length || 0;
        }
        
    }

    const statusHeader = () => {
        return AllStatus.map((el, index) => {
            return (
                <div key={"kb-h-"+index} className="flex-row column-center" style={{paddingRight: '32px'}}>
                    <img src={`./images/${el.replace(/ /g, '')}.svg`}  alt={`${el} logo`}/>
                    <span>{el}</span>
                    <span>{getTicketsCount(el)}</span>
                    <img src="./images/add.svg" alt="add logo" />
                    <img src="./images/3-dot-menu.svg" alt="menu logo"/>
                </div>
            )
        })
    }

    const userHeader = () => {
        return users?.map((el, index) => {
            return (
                <div key={"kb-h-"+index} className="flex-row column-center" style={{paddingRight: '32px'}}>
                    <span className="user-icon"></span>
                    <span>{el.name}</span>
                    <span>{getTicketsCount(el.id)}</span>
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
                    <span>{getTicketsCount(el)}</span>
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