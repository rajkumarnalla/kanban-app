import "../styles/filterButton.css";
import React, { useContext, useEffect, useRef, useState } from "react";
import { GroupBy, OrderBy } from "../contsants";
import { CommonContext } from "../context/CommonContext";

const FilterButton = () => {
    const [showPopup, setShowPopup] = useState(false);
    const {groupByValue, orderByValue, setGroupByValue, setOrderByValue} = useContext(CommonContext);
    const showPopupRef = useRef(showPopup);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (showPopupRef.current) {
                setShowPopup(false)
            }
        };
    
        window.addEventListener('click', handleClickOutside);
    
        return () => {
            window.removeEventListener('click', handleClickOutside);
        };
    }, [])

    useEffect(() => {
        showPopupRef.current = showPopup;
    }, [showPopup]);

    const togglePopup = (ev) => {
        ev.stopPropagation();
        setShowPopup(!showPopup);
    }

    const handleGroupChange = (ev) => {
        setGroupByValue(ev.target.value);
    }

    const handleOrderChange = (ev) => {
        setOrderByValue(ev.target.value);
    }

    const stopEventPropatation = (ev) => {
        ev.stopPropagation();
    }

    return (
        <>
            <div className="filter-btn flex-row column-center" onClick={togglePopup}>
                <img src="./images/Display.svg" alt="display logo"/>
                <button>Display</button>
                <img src="./images/down.svg" alt="down logo"/>
            </div>
            {showPopup && <div className="display-popup flex-column column-center" onClick={stopEventPropatation}>
                <div className="flex-row row-sb column-center mb-10">
                    <label>Grouping</label>
                    <select onChange={handleGroupChange} value={groupByValue}>
                        {GroupBy.map((el, index) => <option key={'group-'+index} value={el.value}>{el.label}</option>)}
                    </select>
                </div>
                <div className="flex-row row-sb column-center">
                    <label>Ordering</label>
                    <select onChange={handleOrderChange} value={orderByValue}>
                        {OrderBy.map((el, index) => <option key={'group-'+index} value={el.value}>{el.label}</option>)}
                    </select>
                </div>
            </div>}
        </>
    )
}

export default React.memo(FilterButton);