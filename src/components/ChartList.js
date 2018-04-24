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

  // const entry = props.top20[0];
  // console.log(entry);

  return (
    <ul>
      {chartEntries}
    </ul>
  )
}

export default ChartList;
