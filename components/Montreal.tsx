'use client';

import { useEffect, useState } from "react";

export default function MontrealTime() {
    const [time, setTime] = useState<string>("");

    useEffect(() => {
        const updateTime= () => {
            const formatter = new Intl.DateTimeFormat('en-CA' ,{
                timeZone: 'America/Montreal',
                hour: '2-digit',
                minute: '2-digit',
                second: '2-digit',
                hour12:false
            });
            const montrealTime = formatter.format(new Date());
            setTime(montrealTime);
        }
        updateTime();
        const id = setInterval(updateTime, 1000);
        return () => clearInterval(id);
    }, []);

    return <span>{time}</span> 
}