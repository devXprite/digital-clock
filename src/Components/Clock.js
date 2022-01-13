import React, { useState } from 'react';
import moment from 'moment';
import "./clock.css"

moment().format();

export default function Clock() {

    const [time, setTime] = useState('00:00:00');
    const [amPm, setAmPm] = useState('am');
    const [date, setDate] = useState(moment().format("dddd, Do MMMM YYYY"));

    setInterval(() => {

        setTime(moment().format("hh : mm : ss"));
        setAmPm(moment().format('a'));

    }, 1000);


    return (
        <>
            <div className="clock">
                <div >
                    <span className="time"> {time} </span>
                    <span className="amPm"> {amPm} </span>
                </div>
                <div >
                    <span className="date">{date} </span>
                </div>
            </div>
        </>
    )
}
