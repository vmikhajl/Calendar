import React from 'react';

const Day = (props) => {
    const days = props.state.map((day, index) => {
        if (!day){
            return <td key={index}>{}</td>
        }
        return (
            <td key={day + '' + new Date().getMonth() + '' + new Date().getFullYear()}>
                <span className="calendar__day-data">
                     {day}
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
