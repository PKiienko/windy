import React from 'react';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsGear, BsCalendarDay, BsStar } from 'react-icons/bs';
import { IoRefresh } from 'react-icons/io5';

import './Display.css'

const Display = ({ channelInfo, dateWithOffset, onSettings, onChart, onMyCalendar, getThermoData }) => {
    return (
        <div className='display'>
            <div className="top-bar-display">
                <AiOutlineLineChart onClick={onChart} />
                <BsCalendarDay onClick={onMyCalendar} />
                <BsGear onClick={onSettings} />
                <BsStar />
                <IoRefresh onClick={getThermoData} />
            </div>
            <h5 className="channel-name no-select">{channelInfo.channel.name}</h5>
            <p className='temperature-value no-select'>{channelInfo.feeds[0].field1}</p>
            <h5 className="channel-time no-select">{dateWithOffset}</h5>
        </div>
    )
}

export default Display