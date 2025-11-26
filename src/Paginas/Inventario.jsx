import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";
/*
  Nesta página de Inventário, foi implementado o carregamento do inventário
  a partir do localStorage ao abrir a página. Além disso, foi adicionada a
  funcionalidade de limpar o inventário, removendo os dados do localStorage
  e atualizando o estado local para refletir a mudança na interface do usuário.
*/ 

export function Inventario() {
  const [figurinhas, setFigurinhas] = useState([]);

  useEffect(() => {
    // Carrega o inventário salvo no localStorage ao abrir a página
    const armazenado = JSON.parse(localStorage.getItem("inventario")) || [];
    setFigurinhas(armazenado);
  }, []);

    const limparInventario = () => {
    // pede confirmação ao usuário
    if (!window.confirm("Deseja realmente limpar o inventário?")) return;

    // remove o item do localStorage
    localStorage.removeItem("inventario");

    // atualiza o estado local para refletir a limpeza na UI
    setFigurinhas([]);
    toast.success("Inventário limpo com sucesso!");
  };


  return (
    <main className="conteiner">
      <Toaster position="top-right" />
      <section className="inventario">
        <h2>Inventário</h2>
        <button className="limpar-inventario" onClick={limparInventario}>
          Limpar Inventário
        </button>

        {/* Caso o jogador ainda não tenha nenhuma figurinha */}
        {figurinhas.length === 0 ? (
          <p className="vazio">Nenhuma figurinha coletada ainda!</p>
        ) : (
          <section className="grid">
            {figurinhas.map((f) => (
              <div key={f.id} className="figurinha" aria-label="container">
                <img src={f.imagem} alt={f.nome} />
              </div>
            ))}
          </section>
        )}
      </section>
    </main>
  );
}
