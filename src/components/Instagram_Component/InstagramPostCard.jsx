import React from 'react';
import './InstagramPostCard.css';

const InstagramPostCard = ({ mediaType, mediaUrl, caption, likeCount, commentCount, permalink }) => {
  return (
    <div className="instagram-post-card">
      <a href={permalink}>
      <div className="media-container">
        {mediaType === 'IMAGE' && <img src={mediaUrl} alt="Instagram post" />}
        {mediaType === 'VIDEO' && <video src={mediaUrl} controls />}
      </div>
      </a>
      {/* <div className="post-details">
        <p className="caption">{caption || "No caption provided."}</p>
        <div className="engagement-metrics">
          <span><strong>❤️ Likes:</strong> {likeCount || 0}</span>
          <span><strong>💬 Comments:</strong> {commentCount || 0}</span>
        </div>
        <a href={permalink} target="_blank" rel="noopener noreferrer" className="view-on-instagram">
          View on Instagram
        </a>
      </div> */}
    </div>
  );
};

export default InstagramPostCard;
