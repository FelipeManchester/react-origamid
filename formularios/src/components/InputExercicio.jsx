// Faça um fetch (POST) para a API abaixo
// Para a criação ser aceita é necessário enviar dodos de:
// nome, email, senha, cep, rua, numero, bairro, cidade e estado

/* Essa é a função utilizado para realizar o POST
fetch('https://ranekapi.origamid.dev/json/api/usuario', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  // form é o objeto com os dados do formulário
  body: JSON.stringify(form),
});

 Mostre uma mensagem na tela, caso a resposta da API seja positiva */

import React, { useState } from 'react';

const InputExercicio = () => {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: '',
    cep: '',
    rua: '',
    numero: '',
    bairro: '',
    cidade: '',
    estado: '',
  });

  const [mensagem, setMensagem] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const res = await fetch(
        'https://ranekapi.origamid.dev/json/api/usuario',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form),
        },
      );
      if (res.ok) {
        setMensagem('Dados enviados com sucesso!');
      } else {
        setMensagem(
          'Ocorreu um erro ao enviar os dados. Por favor, tente novamente.',
        );
      }
    } catch (error) {
      console.error('Erro ao enviar os dados: ', error);
      setMensagem(
        'Ocorreu um erro ao enviar os dados. Por favor, tente novamente.',
      );
    }
  };

  return (
    <div>
      <h1>Exercício Input</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor='nome'>Nome</label>
        <input
          type='text'
          name='nome'
          id='nome'
          onChange={handleChange}
          value={form.nome}
        />
        <label htmlFor='email'>E-mail</label>
        <input
          type='email'
          name='email'
          id='email'
          onChange={handleChange}
          value={form.email}
        />
        <label htmlFor='senha'>Senha</label>
        <input
          type='password'
          name='senha'
          id='senha'
          onChange={handleChange}
          value={form.senha}
        />
        <label htmlFor='cep'>CEP</label>
        <input
          type='text'
          name='cep'
          id='cep'
          onChange={handleChange}
          value={form.cep}
        />
        <label htmlFor='text'>Rua</label>
        <input
          type='text'
          name='rua'
          id='rua'
          onChange={handleChange}
          value={form.rua}
        />
        <label htmlFor='numero'>Número</label>
        <input
          type='text'
          name='numero'
          id='numero'
          onChange={handleChange}
          value={form.numero}
        />
        <label htmlFor='bairro'>Bairro</label>
        <input
          type='text'
          name='bairro'
          id='bairro'
          onChange={handleChange}
          value={form.bairro}
        />
        <label htmlFor='cidade'>Cidade</label>
        <input
          type='text'
          name='cidade'
          id='cidade'
          onChange={handleChange}
          value={form.cidade}
        />
        <label htmlFor='estado'>Estado</label>
        <input
          type='text'
          name='estado'
          id='estado'
          onChange={handleChange}
          value={form.estado}
        />
        <button type='submit'>Enviar</button>
      </form>
      {mensagem && <p>{mensagem}</p>}
    </div>
  );
};

export default InputExercicio;
