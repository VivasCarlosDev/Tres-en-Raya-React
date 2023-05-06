import './App.css'
import { Navbar } from './components/Navbar'
import { Oval } from './components/Oval'
import { SectionBoard } from './components/sectionBoard'
import { TurnSection } from './components/TurnSection'
import { TURNS } from './constant'
import { ModalWin } from './components/Modal'
import { useState } from 'react'

function App () {
  const [board, setBoard] = useState(Array(9).fill(null))
  const [turn, setTurn] = useState(TURNS.X)
  const [win, setWin] = useState(null)
  const [statistic, setStatistic] = useState({
    statsX: 0,
    statsO: 0,
    statsTie: 0
  })

  const startNewGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(TURNS.X)
    setWin(null)
  }

  return (
    <main>
      <Navbar />
      <section className='boardMain'>
        <h1>Tres En Raya</h1>
        <SectionBoard
          turn={turn} setTurn={setTurn}
          board={board} setBoard={setBoard}
          win={win} setWin={setWin}
          statistic={statistic} setStatistic={setStatistic}
        />
        <TurnSection turn={turn} />
      </section>
      <Oval zone={`left ${turn === TURNS.X ? 'activate' : ''}`} />
      <Oval zone={`right ${turn === TURNS.O ? 'activate' : ''}`} />
      <ModalWin startNewGame={startNewGame} win={win} statistic={statistic} />
    </main>
  )
}

export default App
