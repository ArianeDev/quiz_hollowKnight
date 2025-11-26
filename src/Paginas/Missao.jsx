import { useState } from "react";
import { missoes } from '../Dados/dadosMissao';
import { MissaoCard } from '../Componentes/MissaoCard';
import { MissaoModal } from '../Componentes/MissaoModal';

/*
  Nesta página de Missões, implementamos a funcionalidade de concluir missões.
  Foi adicionado um estado para rastrear as missões concluídas.
  Ao concluir uma missão, seu ID é adicionado a um array de missões concluídas.
  O componente MissaoCard agora recebe uma prop 'concluida' para indicar se a missão já foi concluída.
*/ 
export function Missao() {
  const [missaoSelecionada, setMissaoSelecionada] = useState(null);
  const [missoesConcluidas, setMissoesConcluidas] = useState([]); // ✅ novo estado

  const concluirMissao = (id) => {
    setMissoesConcluidas((prev) => [...prev, id]); // adiciona id no array
    setMissaoSelecionada(null); // fecha modal
  };

  return (
    <section className='conteiner'>
      <h2>Missões</h2>
      <div className="missoes-grid" aria-label="lista de missões">
        {missoes.map((m) => (
          <MissaoCard
            key={m.id} 
            missao={m}  
            onIniciarMissao={setMissaoSelecionada} 
            concluida={missoesConcluidas.includes(m.id)} 
          />
        ))}
      </div>

      {missaoSelecionada && (
        <MissaoModal 
          missao={missaoSelecionada} 
          onClose={() => setMissaoSelecionada(null)} 
          onConcluir={() => concluirMissao(missaoSelecionada.id)} 
        />
      )}
    </section>
  );
}
