import {connect} from "react-redux";
import Month from "./month";

let mapStateToProps = (state) => {
    return {
        calendarData: state.calendarData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {

    }
};
const MonthContainer = connect(mapStateToProps, mapDispatchToProps)(Month);

export default MonthContainer;
