import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../redux/postsSlice';

const PostForm = ({ initialPost }) => {
  const [title, setTitle] = useState(initialPost?.title || '');
  const [content, setContent] = useState(initialPost?.content || '');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (initialPost) {
      dispatch(
        updatePost({ id: initialPost.id, updatedPost: { title, content } })
      );
    } else {
      dispatch(createPost({ title, content }));
    }
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title:</label>
        <input
          type='text'
          id='title'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor='content'>Content:</label>
        <textarea
          id='content'
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </div>
      <button type='submit'>
        {initialPost ? 'Update Post' : 'Create Post'}
      </button>
    </form>
  );
};

export default PostForm;
