import React, { useState } from 'react';
import QuestionForm from './QuestionForm';
import ArticleForm from './ArticleForm';

const NewPostPage = () => {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (event) => {
    setPostType(event.target.value);
  };

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', border: '1px solid #ccc', borderRadius: '5px' }}>
      {/* 灰色标题栏 */}
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px', fontWeight: 'bold' }}>
        New Post
      </div>

      <div style={{ marginTop: '20px' }}>
        <label style={{ fontWeight: 'bold', marginBottom: '10px', display: 'block' }}>
          Select Post Type:
        </label>
        <label>
          <input
            type="radio"
            value="question"
            checked={postType === 'question'}
            onChange={handlePostTypeChange}
          /> Question
        </label>
        <label style={{ marginLeft: '10px' }}>
          <input
            type="radio"
            value="article"
            checked={postType === 'article'}
            onChange={handlePostTypeChange}
          /> Article
        </label>
      </div>

      {/* 灰色标题栏 */}
      <div style={{ backgroundColor: '#e0e0e0', padding: '10px', fontWeight: 'bold', marginTop: '20px' }}>
        What do you want to ask or share
      </div>

      <div style={{ marginTop: '20px' }}>
        {postType === 'question' ? <QuestionForm /> : <ArticleForm />}
      </div>
      <button style={{ marginTop: '20px', padding: '10px 20px' }}>Post</button>
    </div>
  );
};

export default NewPostPage;
