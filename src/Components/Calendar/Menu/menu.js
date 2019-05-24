import React from 'react';

const Menu = (props) => {
    return (
        <div className='calendar__menu'>
            <button className='menu__current-date--btn' onClick={props.prevMonth}>&#8249;</button>
            <div className='menu__current-date'>{' ' + props.calendarData.monthsName[props.calendarData.month] + ' '}
                {props.calendarData.year + ' '}</div>
            <button className='menu__current-date--btn' onClick={props.nextMonth}>&#8250;</button>
            <button className='menu__today-btn' onClick={props.setDate}>Сегодня</button>
        </div>
    );
};

export default Menu;
