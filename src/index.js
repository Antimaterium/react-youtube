import _ from 'lodash';
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

    this.videoSearch('surfboards');

  }

  videoSearch(term) {
    YTSearch({key : API_KEY, term: term}, videos => { 
      this.setState({ 
        videos,
        selectedVideo: videos[0]
      }) 
    });
  }
  
  render() {

    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar 
          onSearchTerm={videoSearch} />
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


