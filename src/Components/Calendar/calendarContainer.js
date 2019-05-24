import {connect} from "react-redux";
import {setDateAC} from "../../redux/reducer/calendar-reducer";
import Calendar from "./calendar";

let mapStateToProps = (state) => {
    return {
        calendarData: state.calendarData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        setDate: () => {
            dispatch(setDateAC());
        }
    }
};
const CalendarContainer = connect(mapStateToProps, mapDispatchToProps)(Calendar);

export default CalendarContainer;
