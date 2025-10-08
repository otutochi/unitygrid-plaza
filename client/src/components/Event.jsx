import React, { useState, useEffect } from 'react'
import { formatDate, formatTime, getRemainingTime } from '../utils/dateUtils'
import '../css/Event.css'

const Event = ({ id, name, date_time, image_link }) => {

    const [date, setDate] = useState('')
    const [time, setTime] = useState('')
    const [remaining, setRemaining] = useState('')

    useEffect(() => {
        if (!date_time) return
        setDate(formatDate(date_time))
        setTime(formatTime(date_time))
        setRemaining(getRemainingTime(date_time))
    }, [id, date_time])

    return (
        <article className='event-information'>
            <img src={image_link} />

            <div className='event-information-overlay'>
                <div className='text'>
                    <h3>{name}</h3>
                    <p><i className="fa-regular fa-calendar fa-bounce"></i> {date} <br /> {time}</p>
                    <p id={`remaining-${id}`}>{remaining}</p>
                </div>
            </div>
        </article>
    )
}

export default Event