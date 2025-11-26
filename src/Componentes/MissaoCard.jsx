/*
  Componente de cartão de missão que exibe informações da missão
  e permite iniciar a missão. Agora inclui uma prop 'concluida'
  para desabilitar o botão se a missão já foi concluída.
*/ 

export function MissaoCard({ missao, onIniciarMissao,concluida  }) {
  return (
    <article className='missao-card'>
      <h3 id={missao.id}>{missao.titulo}</h3>
      <p>{missao.missao}</p>
      <button onClick={() => onIniciarMissao(missao)}  disabled={concluida} className="button">{concluida ? "Missão concluída" : "Iniciar Missão"}</button>
    </article>
  )
}
