import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyAfx4rTzqd9Mp9mtwxP21iSRUGRUgSYhnQ';
// npm --save is to save dependency to package.json

//
//
// YTSearch({key:API_KEY, term:'surfboards'}, function(videos) {
//   this.setState({videos})
// });

// create a new component this component should produce some html

// const App = function(){
//   return (
//     <div>
//       <SearchBar />
//     </div>
//   );
// }

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    YTSearch({key: API_KEY, term:'NBA'}, (videos) => {
      this.setState({videos});
    });
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoDetail video={this.state.selectedVideo}/>
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

//take this component's generated HTML and put it on the page (in the DOM)

ReactDOM.render(<App />, document.querySelector('.container'));// container is the target
