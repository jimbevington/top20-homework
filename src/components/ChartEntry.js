import React from 'react';

const ChartEntry = (props) => {
  return (
    <li className="chart-entry">
      <h2 className="chart-position">{props.position}</h2>
      <img
        height="50px"
        width="50px"
        src={props.image}
        alt={props.title}/>
      <h3 className="song-title">{props.title}</h3>
      <h3 className="artist">{props.artist}</h3>
    </li>
  );
}

export default ChartEntry;
