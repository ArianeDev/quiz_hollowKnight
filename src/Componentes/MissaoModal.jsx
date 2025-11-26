import { useState } from "react";
import { Toaster } from "react-hot-toast";
import toast from "react-hot-toast";

/*
  Componente de modal para exibir detalhes da missão e permitir que o usuário
  envie uma resposta. Inclui verificação da resposta e feedback visual.
*/ 

export function MissaoModal({ missao, onClose, onConcluir }) {
  const [resposta, setResposta] = useState("");
  const [resultado, setResultado] = useState(null);
  const [status, setStatus] = useState(null);

  const verificarResposta = () => {
    if (!resposta.trim()) {
      toast.error("Por favor, digite uma resposta antes de enviar!");
      return;
    }

    if (
      resposta.trim().toLowerCase() ===
      missao.respostaCorreta.trim().toLowerCase()
    ) {
      toast.success("Resposta correta! Missão concluída.");
      setStatus("sucesso");

      // ✅ chama a função de concluir após 1s (tempo para mostrar feedback)
      setTimeout(() => {
        onConcluir(missao.id);
      }, 1000);
    } else {
      toast.error("Resposta incorreta. Tente novamente!");
      setStatus("erro");
    }
  };

  return (
    <dialog open className="modal">
      <Toaster position="top-right" />
      <h2 className="titulo" id="titulo-missao">
        {missao.titulo}
      </h2>
      <p id="descricao-missao">{missao.descricao}</p>

      <label htmlFor="resposta" className="sr-only">
        Digite sua resposta
        <input
          className="caixaTexto"
          id="resposta"
          type="text"
          placeholder="Digite sua resposta..."
          value={resposta}
          onChange={(e) => setResposta(e.target.value)}
          required
        />
      </label>

      <section className="modal-botoes">
        <button onClick={verificarResposta} className="buttonModal">Enviar</button>
        <button onClick={onClose} className="buttonModal">Fechar</button>
      </section>
    </dialog>
  );
}
