import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'AIzaSyAYE5WsNgjO63IKA3m9H2o3kmKUTqIrfZc';

// create a new component. This component should produce some HTML
class APP extends Component {
    constructor(props) {
        super(props);

        this.state = { 
            videos: [], 
            selectedVideo: null
        };

        this.videoSearch('surfboards')
    }

    videoSearch(term){
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            // 原本應該是{videos: videos}，但因為ES6的特性，如果key, value一樣的話，我們可以只用{ videos }就好
            this.setState({ 
                videos,
                selectedVideo: videos[0]
            }); 
            
        });
    }


    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch}/>
                <VideoDetail video={this.state.selectedVideo}/>
                <VideoList 
                onVideoSelect={selectedVideo => this.setState({selectedVideo})}
                videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's generated HTML and put it on the page (in the DOM)
ReactDOM.render(<APP />, document.querySelector('.container'));
