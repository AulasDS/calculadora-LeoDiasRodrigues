import { useState } from 'react';

export default function Jogos() {
  const [jogoInput, setJogoInput] = useState('');
  const [jogos, setJogos] = useState([
    { id: 0, nome: 'Resident Evil' },
    { id: 1, nome: 'Uncharted' },
    { id: 2, nome: 'Mario' }
  ]);


  function adicionarJogo() {
    if (jogoInput.trim() === '') return; 

    const novoJogo = {
      id: Date.now(), 
      nome: jogoInput
    };

    setJogos([...jogos, novoJogo]);
    setJogoInput('');
  }

  function excluirJogo(id) {
    const listaAtualizada = jogos.filter(jogo => jogo.id !== id);
    setJogos(listaAtualizada);
  }

  return (
    <div style={{ display: 'flex', gap: '50px', padding: '20px', fontFamily: 'sans-serif' }}>
      
      {}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {jogos.map(jogo => (
          <div 
            key={jogo.id} 
            style={{ 
              border: '1px solid black', 
              borderRadius: '10px', 
              padding: '10px 20px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '250px'
            }}
          >
            <span>{jogo.nome}</span>
            <button 
              onClick={() => excluirJogo(jogo.id)}
              style={{ borderRadius: '8px', cursor: 'pointer' }}
            >
              excluir
            </button>
          </div>
        ))}
      </div>

      {}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
        <div style={{ border: '1px solid black', borderRadius: '10px', padding: '5px 10px' }}>
          <label>jogo: </label>
          <input 
            type="text" 
            value={jogoInput}
            onChange={(e) => setJogoInput(e.target.value)}
            style={{ border: 'none', outline: 'none' }}
          />
        </div>
        <button 
          onClick={adicionarJogo}
          style={{ 
            padding: '5px 30px', 
            borderRadius: '10px', 
            border: '1px solid black',
            backgroundColor: 'white',
            cursor: 'pointer',
            fontSize: '16px'
          }}
        >
          Inserir
        </button>
      </div>

    </div>
  );
}