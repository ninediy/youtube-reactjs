import React,{Component} from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        let {video} = this.props;

        if(!video){//if this props undefined
            return <div>Loading...</div>;
            }

            const videoId = video.id.videoId;
            const url = `https://www.youtube.com/embed/${videoId}`;

            return(//if this props is ready to render
                <div className="video-detail">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe src={url} className="embed-responsive-item"></iframe>
                    </div>
                    <div className="details">
                        <h3>{video.snippet.title}</h3>
                        <div className="txt-red">
                            <i className="glyphicon glyphicon-facetime-video"></i>
                            &nbsp;{video.snippet.channelTitle}
                        </div>
                        <hr/>
                        <p>{video.snippet.description}</p>
                    </div>
                </div>
            );
        }
    }

    export default VideoDetail;
