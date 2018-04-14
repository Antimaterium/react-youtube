import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch  from 'youtube-api-search';

import SearchBar from './componets/search_bar';
import VideoList from './componets/video_list';
import VideoDetail from './componets/video_details';

const API_KEY = 'AIzaSyBtDNfz0gXvd2t6U-Vql0FYD80kU6uHLJg';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = { 
      videos: [],
      selectedVideo: null
    };

    YTSearch({key : API_KEY, term: 'surfers'}, videos => { 
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      }) 
    });
  }
  
  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail 
          video={this.state.selectedVideo}/>
        <VideoList 
          videos={this.state.videos}
          onVideoSelected={selectedVideo => this.setState({ selectedVideo })} />
      </div>
    );
  }
}
  


ReactDOM.render(<App />, document.querySelector('.container'));


