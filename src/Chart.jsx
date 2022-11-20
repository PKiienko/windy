import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { AiOutlineClose } from 'react-icons/ai';
import './Chart.css'

const Chart = ({ showChart, onChart, results, setResults, channelInfo }) => {
    return (
        <>
            {(showChart ? <div className="chart">
                <div className="top-bar-chart">
                    <h4 onClick={() => { setResults(60) }}>Hour</h4>
                    <h4 onClick={() => { setResults(1440) }}>Day</h4>
                    <h4 onClick={() => { setResults(10080) }}>Week</h4>
                    <h4 onClick={() => { setResults(43200) }}>Month</h4>
                    <AiOutlineClose onClick={onChart} />
                </div>
                <LineChart width={200} height={130} data={channelInfo.feeds} >
                    <Line type="monotone" dataKey="field1" stroke="#8884d8" />
                    <CartesianGrid stroke="#ccc" />
                    <XAxis dataKey="created_at" />
                    <YAxis width={20} />
                    {/* <Tooltip /> */}
                </LineChart>
            </div> : null)
            }
        </>
    )
}

export default Chart