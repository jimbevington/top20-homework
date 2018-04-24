import React from 'react';

const ChartEntry = (props) => {
  return (
    <tr className="chart-entry">
      <td className="chart-position">{props.position}</td>
      <td className="song-title">{props.title}</td>
      <td className="artist">{props.artist}</td>
    </tr>
    // {/* <li className="chart-entry">
    //   <h2 className="chart-position">{props.position}</h2>
    //   <h3 className="song-title">{props.title}</h3>
    //   <h3 className="artist">{props.artist}</h3>
    // </li> */}
  );
}

export default ChartEntry;
