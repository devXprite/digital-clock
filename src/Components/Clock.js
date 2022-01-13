import React, { useState } from 'react'
import "./clock.css"

export default function Clock() {

    const takeTwelve = n => n > 12 ? n - 12 : n;
    const addZero = n => n < 10 ? "0" + n : n;

    const [time, setTime] = useState('00:00:00');
    const [amPm, setAmPm] = useState('am');

    setInterval(() => {
        let d, h, m, s, t, amPm;

        d = new Date();
        h = addZero(takeTwelve(d.getHours()));
        m = addZero(d.getMinutes());
        s = addZero(d.getSeconds());
        t = `${h}:${m}:${s}`;

        amPm = d.getHours() >= 12 ? "pm" : "am";

        setTime(t);
        setAmPm(amPm);

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
