export function MissaoCard({ missao, onIniciarMissao,concluida  }) {
  return (
    <article className='missao-card'>
      <h3 id={missao.id}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button onClick={() => onIniciarMissao(missao)}  disabled={concluida}>{concluida ? "Missão concluída" : "Iniciar Missão"}</button>
    </article>
  )
}
