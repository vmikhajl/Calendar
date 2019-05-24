import React from 'react';

const Day = (props) => {
    const days = props.state.map((day, index) => {
        if (!day.dayIndex){
            return <td key={index}>{}</td>
        }
        console.log(day);
        if (day.today){
            return (
                <td className='calendar__today' key={day.id}>
                <span className="calendar__day-data">
                     {day.dayIndex}
                </span>
                </td>);
        }
        return (
            <td key={day.id}>
                <span className="calendar__day-data">
                     {day.dayIndex}
                </span>
            </td>);
    });
    return (
        <tr>
            {days}
        </tr>
    );
};

export default Day;
