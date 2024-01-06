


import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const PostDetail = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({});

  useEffect(() => {
    const fetchPostDetails = async () => {
      try {
        const response = await axios.get(`http://localhost/wordpress/${postId}`);
        setPost(response.data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, [postId]);

  return (
    <div>
      <h2>Post Detail</h2>
      <h3>{post.title?.rendered}</h3>
      <div dangerouslySetInnerHTML={{ __html: post.content?.rendered }} />
    </div>
  );
};

export default PostDetail;