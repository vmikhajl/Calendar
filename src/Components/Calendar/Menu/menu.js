import React from 'react';

const Menu = (props) => {
    return (
        <div className='calendar__menu'>
            <button onClick={props.prevMonth}>&#8249;</button>
            {' ' + props.calendarData.monthsName[props.calendarData.month] + ' '}
            {props.calendarData.year + ' '}
            <button onClick={props.nextMonth}>&#8250;</button>
            <button onClick={props.setDate}>Сегодня</button>
        </div>
    );
};

export default Menu;
