import { TURNS } from '../constant'
import { Square } from './Square'
import { checkWinner, checkEndGame } from '../logic/checkWinner'
import confetti from 'canvas-confetti'

export const SectionBoard = ({
  turn,
  setTurn,
  board,
  setBoard,
  win,
  setWin,
  statistic,
  setStatistic
}) => {
  const winStatsX = {
    ...statistic,
    statsX: statistic.statsX + 1
  }

  const winStatsO = {
    ...statistic,
    statsO: statistic.statsO + 1
  }

  const tieStats = {
    ...statistic,
    statsTie: statistic.statsTie + 1
  }

  const updateBoard = (index) => {
    if (board[index] || win) return

    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)

    const newWin = checkWinner(newBoard)
    if (newWin) {
      setWin(newWin)
      confetti()
      newWin === TURNS.X ? setStatistic(winStatsX) : setStatistic(winStatsO)
    } else if (checkEndGame(newBoard)) {
      setWin(false)
      setStatistic(tieStats)
    }

    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)
  }

  return (
    <section className='sectionGame'>
      <div className='game'>
        {board.map((square, index) => {
          return (
            <Square
              key={index}
              updateBoard={updateBoard}
              turn={turn}
              index={index}
              board={board}
            >
              {square}
            </Square>
          )
        })}
      </div>
    </section>
  )
}
