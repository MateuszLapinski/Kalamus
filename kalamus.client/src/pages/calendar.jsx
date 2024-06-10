import MyCalendar from '../components/MyCalendar';
import 'react-calendar/dist/Calendar.css'
function CalendarSide() {

    return (
        <div className="calendarPageWrapper">
            <MyCalendar local='calendarMain'/>
        </div>
       
    );

}

export default CalendarSide;