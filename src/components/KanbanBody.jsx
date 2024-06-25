import React, { useContext, useMemo } from "react";
import { CommonContext } from "../context/CommonContext";
import { AllStatus, PriorityLevels } from "../contsants";
import Card, { DummyCard } from "./Card";
import "../styles/kanbanBody.css";

const KanbanBody = ({tickets, users}) => {
    const {groupByValue, orderByValue} = useContext(CommonContext);
    
    const Tickets = ({status, user, priorityLevel}, index, length) => {
        let filteredTickets;
        if (groupByValue === "status") {
            filteredTickets = tickets?.filter(el => el.status === status);
        } else if (groupByValue === "user") {
            filteredTickets = tickets?.filter(el => el.userId === user.id);
        } else if (groupByValue === "priority") {
            filteredTickets = tickets?.filter(el => el.priority == priorityLevel);
        }
        
        if (orderByValue === "priority") {
            filteredTickets = filteredTickets?.sort((v1, v2) => v1.priority - v2.priority)
        } else if (orderByValue === "title") {
            filteredTickets = filteredTickets?.sort((v1, v2) => v1.title.toLowerCase() < v2.title.toLowerCase() ? -1 : 1);
        }

        return (
            <div key={'kbody-group-'+index} className="flex-column row-center pr-20">
                {filteredTickets?.length > 0 ? filteredTickets.map((el, index) => {
                    return <Card key={'kbody-group-'+index} id={el.id} status={el.status} title={el.title} tag={el.tag[0]} priority={el.priority}/>
                }) : <DummyCard/>}
            </div>
        )
    }

    return (
        <div className="kanban-body flex-row">
            {groupByValue === "status" && AllStatus.map((status, index) => Tickets({status}, index, AllStatus.length))}
            {groupByValue === "user" && users?.map((user, index) => Tickets({user}, index, users.length))}
            {groupByValue === "priority" && Object.keys(PriorityLevels).map((priorityLevel, index) => Tickets({priorityLevel}, index, 5))}
        </div>
    )
}

export default React.memo(KanbanBody);