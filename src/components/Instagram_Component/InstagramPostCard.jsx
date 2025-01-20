import React from 'react';
import './InstagramPostCard.css';
import play_button from './assets/play.png';

const InstagramPostCard = ({ mediaType, mediaUrl, caption, likeCount, commentCount, permalink }) => {
  return (
    <div className="instagram-post-card">
      <a href={permalink}>
        <div className="media-container">
          {mediaType === 'IMAGE' && <img src={mediaUrl} alt="Instagram post" />}
          {mediaType === 'VIDEO' && (
            <div className="video-container">
              <video src={mediaUrl} muted />
              <div className="play-button-overlay"><img className='play-button-image' src={play_button}/></div>
            </div>
          )}
        </div>
      </a>
    </div>
  );
};

export default InstagramPostCard;
