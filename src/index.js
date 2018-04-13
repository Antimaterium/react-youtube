import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch  from 'youtube-api-search';

import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';

const API_KEY = 'AIzaSyBtDNfz0gXvd2t6U-Vql0FYD80kU6uHLJg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { videos: [] };

    YTSearch({key : API_KEY, term: 'surfers'}, videos => { 
      this.setState({ videos }) 
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos}/>
      </div>
    );
  }
}
  


ReactDOM.render(<App />, document.querySelector('.container'));


