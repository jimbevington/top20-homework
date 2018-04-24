import React from 'react';
import ChartList from '../components/ChartList';
import Heading from '../components/Heading';

class ChartBox extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      top20: []
    }
  }

  componentDidMount(){
    fetch('https://itunes.apple.com/gb/rss/topsongs/limit=20/json')
      .then(response => response.json())
      .then(json => this.setState({top20: json.feed.entry}));
  }

  render(){
    return (
      <React.Fragment>
        <Heading />
        <ChartList top20={this.state.top20} />
      </React.Fragment>
    )
  }
}

export default ChartBox;
