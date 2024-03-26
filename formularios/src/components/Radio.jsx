import React, { useState } from 'react';

const Radio = () => {
  const [produto, setProduto] = useState('');

  const handleChange = ({ target }) => {
    setProduto(target.value);
  };
  return (
    <div>
      <h1>Radio</h1>
      <form>
        <label>
          <input
            type='radio'
            name='produto'
            value='smartphone'
            onChange={handleChange}
          />
          Smartphone
        </label>
        <label>
          <input
            type='radio'
            name='produto'
            value='notebook'
            onChange={handleChange}
          />
          Notebook
        </label>
      </form>
    </div>
  );
};

export default Radio;
