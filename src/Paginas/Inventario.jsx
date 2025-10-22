import { useEffect, useState } from "react";

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
  };


  return (
    <main className="conteiner">
        <section className="inventario">
      <h2>Inventário</h2>
      <button className="limpar-inventario" onClick={limparInventario}>
            Limpar Inventário
          </button>

      {/* Caso o jogador ainda não tenha nenhuma figurinha */}
      {figurinhas.length === 0 ? (
        <p className="vazio">Nenhuma figurinha coletada ainda!</p>
      ) : (
        <div className="grid">
          {figurinhas.map((f) => (
            <div key={f.id} className="figurinha">
              <img src={f.imagem} alt={f.nome} />
             
            </div>
          ))}
        </div>
      )}
      </section>
    </main>
  );
}
