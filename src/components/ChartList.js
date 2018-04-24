import React from 'react';
import ChartEntry from './ChartEntry';

const ChartList = (props) => {

  const chartEntries = props.top20.map((entry, index) => {
    return (
      <ChartEntry
        key={index}
        position={index + 1}
        image={entry['im:image'][2]['label']}
        title={entry['im:name']['label']}
        artist={entry['im:artist']['label']}
        sample={entry['link'][1]['attributes']['href']}
      />
    )
  })

  return (
    <ul className='chart-list'>
      {chartEntries}
    </ul>
  )
}

export default ChartList;
