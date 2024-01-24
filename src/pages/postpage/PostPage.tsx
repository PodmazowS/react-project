import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PostPage.css'; 
import { Post } from '../../types';

export const PostPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, []);

  return (
    <div className="posts-container">
    <h1>Posts</h1>
    <div className="posts-list">
    {posts.map(post => (
    <div key={post.id} className="post-item">
    <h2>{post.title}</h2>
    <p>{post.body}</p>
    {/* Additional post details here */}
    </div>
    ))}
    </div>
    </div>
    );
    };
    

