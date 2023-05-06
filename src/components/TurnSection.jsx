import { Square } from './Square'
import { TURNS } from '../constant'

export const TurnSection = ({ turn }) => {
  return (
    <section className='turnSection'>
      <h3>Turno:</h3>
      <div className='turn'>
        <Square isSelect={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelect={turn === TURNS.O}>{TURNS.O}</Square>
      </div>
    </section>
  )
}
