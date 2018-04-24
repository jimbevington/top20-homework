import React from 'react';
import ChartEntry from './ChartEntry';

const ChartList = (props) => {

  const chartEntries = props.top20.map((entry, index) => {
    return <ChartEntry key={index} position={index} />
  })

  return (
    <ul>
      {chartEntries}
    </ul>
  )
}

export default ChartList;
