import React from 'react';
import { AiOutlineLineChart } from 'react-icons/ai';
import { BsGear } from 'react-icons/bs';

import './Display.css'

const Display = ({ channelInfo, dateWithOffset, onSettings, onChart }) => {
    return (
        <div className='modal'>
            <div className="top-bar">
                <AiOutlineLineChart onClick={onChart} />
                <h5 className="channel-name no-select">{channelInfo.channel.name}</h5>
                <BsGear onClick={onSettings} />
            </div>
            <p className={'temperature-value no-select'}>{channelInfo.feeds[0].field1}</p>
            <h5 className="channel-time no-select">{dateWithOffset}</h5>
        </div>
    )
}

export default Display