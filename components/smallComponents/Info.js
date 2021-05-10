import { useState } from 'react';
import { Minus, Plus } from '../Svgs'
const Info = ({ title, period, location, description }) => {
  const [info, showInfo] = useState(false)
  return (
    <article className="info" onClick={() => showInfo(!info)}>
      <header className="info__header">
        <div className="info__longinfo">
          <button className="info__btn" >
            {info ? <Minus /> : <Plus />}
          </button>
          <h4>{title}</h4>
        </div>
        <div className="info__shortinfo">
          <p className="info__period">{period}</p>
          <p className="info__location">{location}</p>
        </div>

      </header>
      {info && <p className="info__description">{description}</p>}
    </article>
  )
}


export default Info