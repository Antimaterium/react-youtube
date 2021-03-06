import React, { Component } from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
  const items = props.videos.map(video => {
    return (
            <VideoListItem 
              key={video.etag} 
              video={video}
              onVideoSelected={ props.onVideoSelected } />
    );
  });

  return (
    <ul className="col-md-4 list-group">
      { items }
    </ul>
  );
}

export default VideoList;