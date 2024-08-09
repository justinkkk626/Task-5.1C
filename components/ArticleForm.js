import React from 'react';

const ArticleForm = () => {
  return (
    <div>
      <label>
        Title
        <input type="text" placeholder="Enter a descriptive title" style={{ width: '100%', marginBottom: '10px' }} />
      </label>
      <label>
        Abstract
        <textarea placeholder="Enter a 1-paragraph abstract" style={{ width: '100%', height: '60px', marginBottom: '10px' }} />
      </label>
      <label>
        Article Text
        <textarea placeholder="Enter the full content of your article" style={{ width: '100%', height: '200px', marginBottom: '10px' }} />
      </label>
      <label>
        Tags
        <input type="text" placeholder="Please add up to 3 tags to describe what your article is about e.g., Java" style={{ width: '100%', marginBottom: '10px' }} />
      </label>
    </div>
  );
};

export default ArticleForm;
