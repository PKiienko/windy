import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import * as xlsx from 'xlsx';
import './MyCalendar.css';

const MyCalendar = ({ showMyCalendar, onMyCalendar }) => {
  const [fileData, setFileData] = useState(null);
  const [selectedDate, setSelectedDate] = useState({
    day: 13,
    month: 11,
    year: 2022,
  });

  //setting date according to date picker
  const selectingDate = (e) => {
    console.log(e.target.value);
  };

  //finding kepper on selected date
  const keeperFinder = () => {
    if (fileData === null) {
      console.log('file not selected');
      return;
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

          <div className='date-picker'>
            <input
              className='date-unit'
              type='number'
              min='1'
              max='31'
              defaultValue={selectedDate.day}
              onChange={selectingDate}
            />
            <input
              className='date-unit'
              type='number'
              min='1'
              max='12'
              defaultValue={selectedDate.month}
              onChange={selectingDate}
            />
            <input
              className='date-unit'
              type='number'
              min='2020'
              max='2030'
              defaultValue={selectedDate.year}
              onChange={selectingDate}
            />
          </div>

          <div className='keeper-name'>
            <h4>Keeper:</h4>
            <h4>KEEPER</h4>
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
