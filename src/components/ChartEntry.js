import React from 'react';

const ChartEntry = (props) => {
  return (
    <li>
      <h2 className="chart-position">{props.position}</h2>
      <h3 className="song-title">{props.title}</h3>
      <h3 className="artist">{props.artist}</h3>
    </li>
  )
}

export default ChartEntry;
