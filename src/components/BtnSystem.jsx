export const BtnSystem = ({ children, startNewGame }) => {
  const handleClick = () => {
    startNewGame()
  }

  return (
    <button onClick={handleClick} className='btnReset'>{children}</button>
  )
}
