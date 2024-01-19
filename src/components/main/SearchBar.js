import React, { useState } from 'react';

const TextBox = () => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  return (
    <input
      type="text"
      value={text}
      onChange={handleChange}
    />
  );
};

export default TextBox;
