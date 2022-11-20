import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MyCalendar.css';

const MyCalendar = ({ showMyCalendar, onMyCalendar, onChange, value }) => {
    return (
        <>
            {(showMyCalendar ? <div className="calendar ">
                <div className='top-bar-calendar'>
                    <AiOutlineClose onClick={onMyCalendar} />
                    <Calendar onChange={onChange} value={value} />
                </div>
            </div> : null)
            }
        </>
    )
}

export default MyCalendar