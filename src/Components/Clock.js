import React, { useState } from 'react';
import moment from 'moment';
import "./clock.css"

moment().format();

export default function Clock() {

    const [time, setTime] = useState('00:00:00');
    const [amPm, setAmPm] = useState('am');
    
    setInterval(() => {

        setTime(moment().format("hh:mm:ss"));
        setAmPm(moment().format('a'));

    }, 1000);

    return (
        <>
            <div className="clock">
                {/* <div className="outer"> */}
                    <div className="inner">
                        <span className="time"> {time} </span>
                        <span className="amPm"> {amPm} </span>
                    </div>
                {/* </div> */}
            </div>
        </>
    )
}
