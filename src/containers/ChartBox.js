import React from 'react';

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
    return <h1>Hello World</h1>
  }
}

export default ChartBox;
