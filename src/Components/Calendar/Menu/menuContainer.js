import {connect} from "react-redux";
import Menu from "./menu";
import {nextMonthAC, prevMonthAC, setDateAC} from "../../../redux/reducer/calendar-reducer";

let mapStateToProps = (state) => {
    return {
        calendarData: state.calendarData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        nextMonth: () => {
            dispatch(nextMonthAC());
        },
        prevMonth: () => {
            dispatch(prevMonthAC());
        },
        setDate: () => {
            dispatch(setDateAC());
        }

    }
};
const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer;
