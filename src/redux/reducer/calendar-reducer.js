const SET_DATE = 'SET_DATE';
const PREV_MONTH = 'PREV_MONTH';
const NEXT_MONTH = 'NEXT_MONTH';

let fillCalendar = (year, month) => {
    let tr = [];
    console.log(year, month);
    let currentDate = new Date(year, month);
    let next = new Date(year,month + 1);
    let diff = (next - currentDate) / (1000 * 3600 * 24);
    let index = (currentDate.getDay() + 6) % 7;
    let i = 0;
    let dayIndex = 1 - index;

    while (i < 37) {
        tr.push(dayIndex > 0 && dayIndex <= diff ? dayIndex : "");
        dayIndex++;
        i++;
    }
    return tr;
};

let initialState = {
        monthsName: ['Январь' , 'Февраль' , 'Март' , 'Апрель' , 'Май' , 'Июнь' , 'Июль' , 'Август' , 'Сентябрь' , 'Октябрь' , 'Ноябрь' , 'Декабрь'],
        daysPerWeekName: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
        date: new Date(),
        year: new Date().getFullYear(),
        month: new Date().getMonth(),
        day: new Date().getDate(),
        t: []
};

const calendarReducer = (state = initialState , action) => {
    switch (action.type) {
        case SET_DATE: {
            return {
                ...state,
                year: state.date.getFullYear(),
                month: state.date.getMonth(),
                t: [...(fillCalendar(state.date.getFullYear(), state.date.getMonth()))]
            };
        }
        case NEXT_MONTH:
            return {
                ...state,
                month: (state.month + 1 > 11) ? 0 : state.month + 1,
                year: (state.month + 1 > 11) ? state.year + 1 : state.year,
                t: [...(fillCalendar(state.year, state.month + 1))]
            };
        case PREV_MONTH:
            return {
                ...state,
                month: (state.month - 1 < 0) ? 11 : state.month - 1,
                year: (state.month - 1 < 0) ? state.year - 1 : state.year,
                t: [...(fillCalendar(state.year, state.month - 1))]
            };
        default:
            return state;
    }

};
export const setDateAC = () => ({type: SET_DATE});
export const nextMonthAC = () => ({type: NEXT_MONTH});
export const prevMonthAC = () => ({type: PREV_MONTH});
export default calendarReducer;
