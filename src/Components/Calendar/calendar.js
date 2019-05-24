import React from 'react';
import MonthContainer from "./Month/monthContainer";
import MenuContainer from "./Menu/menuContainer";


const Calendar = (props) => {
    if (props.calendarData.t.length === 0){
        props.setDate();
    }
    return (
        <div>
            <MenuContainer/>
            <MonthContainer/>
        </div>
    );

};

export default Calendar;
