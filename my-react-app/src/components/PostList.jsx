


import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get('http://localhost/wordpress/');
        setPosts(response.data);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div>
      <h2>WordPress Post List</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title.rendered}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;