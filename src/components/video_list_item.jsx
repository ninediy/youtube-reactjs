import React,{Component} from 'react';

class VideoListItem extends Component {

    render(){
        let {videoData,onVideoSelect} = this.props;
        let title = videoData.snippet.title;
        let imageUrl = videoData.snippet.thumbnails.default.url;

        return(
            <li onClick={()=>onVideoSelect(videoData)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img src={imageUrl} alt={title} className="media-object"/>
                    </div>
                    <div className="media-body">
                        <div className="media-heading">
                            {title}
                        </div>
                    </div>
                </div>
            </li>
        );
    }
}

export default VideoListItem;
