import { WinsCombos } from '../constant'

export const checkWinner = (checkboard) => {
  for (const combo of WinsCombos) {
    const [a, b, c] = combo
    if (
      checkboard[a] &&
            checkboard[a] === checkboard[b] &&
            checkboard[a] === checkboard[c]
    ) return checkboard[a]
  }
  return false
}

export const checkEndGame = (checkboard) => {
  return checkboard.every((square) => square !== null)
}
