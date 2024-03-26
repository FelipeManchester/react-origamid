import React, { useState } from 'react';

const Input1 = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='nnome'>Nome</label>
      <input
        placeholder='ex: João da Silva'
        type='text'
        id='nnome'
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />
      <label htmlFor='eemail'>Email</label>
      <input
        placeholder='joao@gmail.com'
        type='email'
        name='email'
        id='eemail'
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <button>Enviar</button>
    </form>
  );
};

export default Input1;
