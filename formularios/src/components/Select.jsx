import React, { useState } from 'react';

const Select = () => {
  const [select, setSelect] = useState('');

  return (
    <div>
      <h1>Select</h1>
      <form>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          id='produtos'
        >
          <option disabled value=''>
            Selecione
          </option>
          <option value='notebook'>Notebook</option>
          <option value='smartphone'>Smartphone</option>
          <option value='tablet'>Tablet</option>
        </select>{' '}
        {select}
      </form>
    </div>
  );
};

export default Select;
