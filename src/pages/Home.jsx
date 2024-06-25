import { useEffect, useState } from "react";
import { kanbanData } from "../services/appServices"
import "../styles/home.css";
import FilterButton from "../components/FilterButton";
import { CommonTaskProvider } from "../context/CommonContext";
import KanbanHeader from "../components/KanbanHeader";
import KanbanBody from "../components/KanbanBody";

const Home = () => {
    const [tickets, setTickets] = useState();
    const [users, setUsers] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState();

    useEffect(() => {
        fetchKanbanData();
    }, []);

    const fetchKanbanData = async () => {
        try {
            setError(null);
            setLoading(true);
            const {tickets, users} = await kanbanData();
            setTickets(tickets);
            setUsers(users);
            setLoading(false);
        } catch(err) {
            setLoading(false);
            setError(err);
            // alert("Failed to fetch kanban data");
        }
    }

    return (
        <CommonTaskProvider>
            <div style={{height: "100%"}}>
                <FilterButton/>
                <div className="flex-column home-content">
                    <KanbanHeader tickets={tickets} users={users}/>
                    {!error && <KanbanBody tickets={tickets} users={users}/>}
                    {error && <Error/>}
                </div>
            </div>
        </CommonTaskProvider>
    )
}

const Error = () => {
    return (
        <div style={{textAlign: "center", margin: "20px"}}>Data failed to load, Please try again!</div>
    )
}

export default Home