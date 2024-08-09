import React from 'react';

const QuestionForm = () => {
  return (
    <div>
      <label>
        Title
        <input type="text" placeholder="Start your question with how, what, why, etc." style={{ width: '100%', marginBottom: '10px' }} />
      </label>
      <label>
        Describe your problem
        <textarea placeholder="Describe your problem" style={{ width: '100%', height: '100px', marginBottom: '10px' }} />
      </label>
      <label>
        Tags
        <input type="text" placeholder="Please add up to 3 tags to describe what your question is about e.g., Java" style={{ width: '100%', marginBottom: '10px' }} />
      </label>
    </div>
  );
};

export default QuestionForm;
