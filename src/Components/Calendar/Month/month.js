import React from 'react';
import Day from './Day/day'

const Month = (props) => {
    return (
        <table className='calendar__table'>
            <thead className='calendar__week'>
                <tr>
                    <td><span className="calendar__day-data">Пн</span></td>
                    <td><span className="calendar__day-data">Вт</span></td>
                    <td><span className="calendar__day-data">Ср</span></td>
                    <td><span className="calendar__day-data">Чт</span></td>
                    <td><span className="calendar__day-data">Пт</span></td>
                    <td><span className="calendar__day-data">Сб</span></td>
                    <td><span className="calendar__day-data">Вс</span></td>
                </tr>
            </thead>
            <tbody className='calendar__day'>
                <Day state = {props.calendarData.t.slice(0, 7)}/>
                <Day state = {props.calendarData.t.slice(7, 14)}/>
                <Day state = {props.calendarData.t.slice(14, 21)}/>
                <Day state = {props.calendarData.t.slice(21, 28)}/>
                <Day state = {props.calendarData.t.slice(28, 35)}/>
                {
                    props.calendarData.index > 5 &&
                    <Day state = {props.calendarData.t.slice(35, 42)}/>
                }

            </tbody>
        </table>
    );
};

export default Month;
