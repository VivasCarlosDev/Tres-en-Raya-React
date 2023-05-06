import { Square } from './Square'
import { BtnSystem } from './BtnSystem'

export const ModalWin = ({ startNewGame, win, statistic }) => {
  if (win === null) return

  return (
    <section className='sectionModal'>
      <article className='modal'>
        <h2>{win ? 'Ganador' : 'Empate'}</h2>
        <Square>{win || '-'}</Square>
        <section>
          <h3>Estadisticas</h3>
          <div>
            <aside>
              <h4>Ganó x:</h4>
              <span>{statistic.statsX}</span>
            </aside>
            <aside>
              <h4>Empates:</h4>
              <span>{statistic.statsTie}</span>
            </aside>
            <aside>
              <h4>Ganó o:</h4>
              <span>{statistic.statsO}</span>
            </aside>
          </div>
        </section>
        <BtnSystem class='btnReset' startNewGame={startNewGame}>Nuevo Juego</BtnSystem>
      </article>
    </section>
  )
}
