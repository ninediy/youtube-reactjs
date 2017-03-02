//react default libs;
import React,{Component} from 'react';
import ReactDom from 'react-dom';
import __ from 'lodash';

//plugins
import YTSearch from 'youtube-api-search';

//component
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const YOUTUBE_API_KEY = "AIzaSyBUPuKgq_Hfnj0ZShmfXB5yEN7QykHxOn8";

class App extends Component {

    constructor(props){
        super(props);
        this.state = {videos:[],selectedVideo:null};
        this.videoSearch('reactjs');//setting default query
    }

    videoSearch(term){
        YTSearch({
            key:YOUTUBE_API_KEY,
            term:term,
            maxResults:8
        },(videos)=>{
            this.setState({
                videos:videos,
                selectedVideo:videos[0]//set default video
            });
            console.log(videos);
        });
    }

    render(){
        const videoSearch = __.debounce((term)=>{this.videoSearch(term)},300);
        return(
            <div className="container">
                <h1 className="page-header text-center txt-red">
                    <i className="glyphicon glyphicon-facetime-video"></i>
                    <br/>
                    Youtube Copy
                </h1>
                <div className="row">
                    <div className="col-md-12">
                        <SearchBar onSearchTermChange={videoSearch}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><hr/></div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <VideoDetail video={this.state.selectedVideo}/>
                    </div>
                    <div className="col-md-4">
                        <VideoList
                            videos={this.state.videos}
                            onVideoSelect={(selectedVideo)=>this.setState({selectedVideo})}/>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12"><hr/></div>
                </div>
            </div>
        );
    }
}

ReactDom.render(<App/>,document.querySelector('.container'));
