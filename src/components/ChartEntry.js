import React from 'react';

const ChartEntry = (props) => {
  return (
    <li className="chart-entry">
      <h2 className="chart-position">{props.position}</h2>
      <div className='media'>
        <img
          height="150px"
          width="150px"
          src={props.image}
          alt={props.title}/>
          <audio src={props.sample} controls></audio>
      </div>
      <div className="details">
        <p className="song-title centre-text">{props.title}</p>
        <p className="artist centre-text">{props.artist}</p>
      </div>
    </li>
  );
}

export default ChartEntry;
