import { useState } from 'react';
import { Minus, Plus } from '../Svgs'
const Info = ({ title, period, location, description }) => {
  const [info, showInfo] = useState(false)
  return (
    <article className="info">
      <header>
        <button className="aboutbtn" onClick={() => showInfo(!info)}>{info ? <Minus /> : <Plus />}</button>
        <h3>{title}</h3>
        <span>{period}</span><span>{location}</span>
      </header>
      {info && <p>{description}</p>}
    </article>
  )
}


export default Info