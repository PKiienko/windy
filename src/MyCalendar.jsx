import React, { useState, useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import * as xlsx from 'xlsx';
import Calendar from 'react-calendar';
import './MyCalendar.css';

const MyCalendar = ({ showMyCalendar, onMyCalendar }) => {
  const [fileData, setFileData] = useState(null);
  const [keeper, setKeeper] = useState('Lets findout');
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    keeperFinder();
  }, [date, fileData]);

  //select date on the calendar
  const dateSelecting = () => {
    console.log('Date is', date);
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    console.log(day, month, year);
  };

  //finding kepper on selected date
  const keeperFinder = () => {
    dateSelecting();
    if (fileData === null) {
      // setKeeper('Select file');
      console.log('file not selected');
    }
    console.log(date);

    if (fileData) {
      for (let i = 0; i < fileData.length; i++) {
        if (
          fileData[i].day === date.getDate() &&
          fileData[i].month === date.getMonth() + 1 &&
          fileData[i].year === date.getFullYear()
        ) {
          setKeeper(fileData[i].keeper);
          console.log(fileData);
          console.log('fileData is', fileData[i]);
          console.log('selectedDate is', date);
          console.log('FileData Kepper is', fileData[i].keeper);
          console.log('Setted Kepper is', keeper);
        }
      }
    }
  };

  const readUploadFile = (e) => {
    e.preventDefault();
    if (e.target.files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = xlsx.read(data, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        const worksheet = workbook.Sheets[sheetName];
        const json = xlsx.utils.sheet_to_json(worksheet);
        setFileData(json);
        console.log(fileData);
      };
      reader.readAsArrayBuffer(e.target.files[0]);
    }
  };

  return (
    <>
      {showMyCalendar ? (
        <div className='calendar '>
          <div className='top-bar-calendar'>
            <AiOutlineClose onClick={onMyCalendar} />
          </div>

          <Calendar
            onChange={setDate}
            value={date}
            className={['c1', 'c2']}
          />

          <div className='keeper-name'>
            <h4>Keeper:</h4>
            <h4>{keeper}</h4>
          </div>

          <form className='fileForm'>
            <input
              className='upload-file-button'
              type='file'
              name='upload'
              id='upload'
              onChange={readUploadFile}
            />
          </form>
        </div>
      ) : null}
    </>
  );
};

export default MyCalendar;
