import React,{Component} from 'react';
//component
import VideoListItem from './video_list_item';

class VideoList extends Component {

    renderItem(videos,onVideoSelect){
        return videos.map((val,key)=>(
            <VideoListItem
                videoData={val}
                key={val.etag}
                onVideoSelect={onVideoSelect}/>
            ));
        }

        render(){
            let {videos,onVideoSelect} = this.props;
            return (
                <ul className="list-group">
                    {this.renderItem(videos,onVideoSelect)}
                </ul>
            );
        }
    }

    export default VideoList;
