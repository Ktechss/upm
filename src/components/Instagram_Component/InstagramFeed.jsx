import React, { useEffect, useState } from 'react';
import InstagramPostCard from './InstagramPostCard';
import './InstagramFeed.css';

const InstagramFeed = () => {
  const [posts, setPosts] = useState([]);
  const [accountInfo, setAccountInfo] = useState({}); // To store username and profile picture
  const [loading, setLoading] = useState(true);
  const [visiblePosts, setVisiblePosts] = useState(8); // Number of posts initially visible

  // Access token for API calls
  const url_id ='';
  const ACCESS_TOKEN = 'EAAWADqZBELDIBO5hD1bKZCW3bwiAN6ZB4aP31sZCNnXXkH73ZCLMv6GxgUaphTJStz6ZCA9V8dfU0W7pDhP6DxY6t2dW8nKvjWWh3EOAzaSMgrZC5k5RBeRuoiVXWJVcXnhZBIFrCleaOy6WTWrwQ8IzsNvSC5nNhZAFGaGQoShU3Dh0DLHHD1fibZCS6S';

  useEffect(() => {
    const fetchInstagramData = async () => {
      try {
        // Fetch account information (username and profile picture)
        const accountResponse = await fetch(
          `https://graph.facebook.com/v12.0/17841413939426541?fields=username,profile_picture_url&access_token=${ACCESS_TOKEN}`
        );
        const accountData = await accountResponse.json();
        setAccountInfo(accountData);

        // Fetch posts
        const postsResponse = await fetch(
          `https://graph.facebook.com/v12.0/17841413939426541/media?fields=id,caption,media_type,media_url,permalink,like_count,comments_count&access_token=${ACCESS_TOKEN}`
        );
        const postsData = await postsResponse.json();
        setPosts(postsData.data || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching Instagram data:', error);
        setLoading(false);
      }
    };

    fetchInstagramData();
  }, []);

  const handleLoadMore = () => {
    setVisiblePosts((prevVisiblePosts) => Math.min(prevVisiblePosts + 8, posts.length));
  };

  if (loading) {
    return <p>Loading Instagram Feed...</p>;
  }

  if (posts.length === 0) {
    return <p>No posts available to display.</p>;
  }

  return (
    <div className="instagram-feed">
      {/* Display account information */}
      <div className="account-info">
        <img
          src={accountInfo.profile_picture_url}
          alt={`${accountInfo.username}'s profile`}
          className="profile-picture"
        />
        <h2>{accountInfo.username}</h2>
      </div>

      <div className="post-container">
        {posts.slice(0, visiblePosts).map((post) => (
          <InstagramPostCard
            key={post.id}
            mediaType={post.media_type}
            mediaUrl={post.media_url}
            caption={post.caption}
            likeCount={post.like_count}
            commentCount={post.comments_count}
            permalink={post.permalink}
          />
        ))}
      </div>

      {/* Load More Button */}
      {visiblePosts < posts.length && (
        <div className="load-more-container">
          <button className="load-more-button" onClick={handleLoadMore}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
};

export default InstagramFeed;
