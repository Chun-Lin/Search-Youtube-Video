import React from 'react';

const VideoListItem = ({ video , onVideoSelect}) => {
    /* {video}可以直接取用原本props這個object裡面的video element
    原本應該是要在參數丟props，並且宣告const video = props.video
    但是ES6 destructuring的特性，可以讓我們直接在參數丟{video}取用props.video的資料
    */

    
    const imageUrl = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onVideoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div classname="media-left">
                    <img className="media-object" src={imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading">{video.snippet.title}</div>
                </div>
            </div>
        </li>
    );

    return <li>Video</li>;
};

export default VideoListItem;
