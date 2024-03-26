import React, { useState } from 'react';

const TextArea = () => {
  const [textarea, setTextarea] = useState('');

  return (
    <>
      <h1>TextArea</h1>
      <form>
        <textarea
          value={textarea}
          onChange={({ target }) => setTextarea(target.value)}
          rows='5'
        />
      </form>
    </>
  );
};

export default TextArea;
