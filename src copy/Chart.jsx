import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineClose } from 'react-icons/ai';
import './Chart.css'

const Chart = ({ showChart, onChart, results, setResults, channelInfo }) => {
    return (
        <>
            {(showChart ? <div className="settings card">
                <div className="time-interval">
                    <h6 onClick={() => { setResults(60) }}>Hour</h6>
                    <h6 onClick={() => { setResults(1440) }}>Day</h6>
                    <h6 onClick={() => { setResults(10080) }}>Week</h6>
                    <h6 onClick={() => { setResults(43200) }}>Month</h6>
                    <AiOutlineClose onClick={onChart} />
                </div>
                <LineChart width={250} height={130} data={channelInfo.feeds} >
                    <Line type="monotone" dataKey="field1" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="created_at" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div> : null)
            }
        </>
    )
}

export default Chart