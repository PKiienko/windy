import React from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import './Settings.css';

const Settings = ({ onSettings, showSettings, minT, setMinT, maxT, setMaxT }) => {
    return (
        <>
            {(showSettings ? <div className="settings ">
                <div className='close-btn'>
                    <AiOutlineClose onClick={onSettings} />
                </div>
                <div className="min-value">
                    <input className='input-field' type="number" min='-30' max='50' step='0.1' value={minT} onChange={(e) => setMinT(e.target.value)} />
                    <h4>Low Limit</h4>
                </div>
                <div className="max-value">
                    <input className='input-field' type="number" min='-30' max='50' step='0.1' value={maxT} onChange={(e) => setMaxT(e.target.value)} />
                    <h4>Hi Limit</h4>
                </div>
            </div> : null)
            }
        </>
    )
}

export default Settings