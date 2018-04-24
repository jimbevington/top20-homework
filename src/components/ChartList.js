import React from 'react';
import ChartEntry from './ChartEntry';

const ChartList = (props) => {

  const chartEntries = props.top20.map((entry, index) => {
    return (
      <ChartEntry
        key={index}
        position={index + 1}
        title={entry['im:name']['label']}
        artist={entry['im:artist']['label']}
      />
    )
  })

  return (
    <table>
      <tr className='chart-list'>
        <th>#</th>
        <th>Track</th>
        <th>Artist</th>
      </tr>
      {chartEntries}
    </table>
  )
}

export default ChartList;
