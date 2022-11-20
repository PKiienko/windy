import { useState, useEffect, useMemo } from "react";
import Display from './Display';
import Chart from './Chart';
import Settings from "./Settings";
import './App.css'

const App = () => {
  const [channelInfo, setChannelInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [results, setResults] = useState(20);
  const [currentTemp, setCurrentTemp] = useState();
  const [minT, setMinT] = useState(-50);
  const [maxT, setMaxT] = useState(50);
  const [showSettings, setShowSettings] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const dateWithOffset = useMemo(() => {
    if (!channelInfo) return "";
    setCurrentTemp(channelInfo.feeds[0].field1);
    const channelDate = channelInfo.feeds[0].created_at;
    const date = new Date(channelDate);
    const timestampWithOffset = date.getTime();
    return new Date(timestampWithOffset).toString().slice(4, 21);
  }, [channelInfo]);

  let effect = 'neutral';
  if (parseFloat(currentTemp) >= parseFloat(maxT)) {
    effect = 'hot';
  }
  if (parseFloat(currentTemp) < parseFloat(maxT) & parseFloat(currentTemp) > parseFloat(minT)) {
    effect = 'neutral';
  }
  if (parseFloat(currentTemp) <= parseFloat(minT)) {
    effect = 'cold';
  }

  const getThermoData = async () => {
    setIsLoading(true);
    const response = await fetch(
      `https://api.thingspeak.com/channels/835534/fields/1.json?results=${results}`
    );
    const data = await response.json();
    setChannelInfo(data);
    setIsLoading(false);
    console.log(data);
  };

  useEffect(() => {
    getThermoData();
  }, [results]);

  const onSettings = () => {
    setShowSettings((prev) => !prev);
  }

  const onChart = () => {
    setShowChart((prev) => !prev);
  }

  return (
    <div className={`card ${effect}`}>
      {isLoading ? <p className="loading">Loading...</p> : <>
        <Display channelInfo={channelInfo} dateWithOffset={dateWithOffset} onSettings={onSettings} onChart={onChart} />
        <Settings onSettings={onSettings} showSettings={showSettings} minT={minT} setMinT={setMinT} maxT={maxT} setMaxT={setMaxT} />
        <Chart results={results} setResults={setResults} channelInfo={channelInfo} showChart={showChart} onChart={onChart} />
      </>
      }
    </div>
  );
};

export default App;