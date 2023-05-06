export const Square = ({ children, updateBoard, isSelect, index, board }) => {
  
  const handleClick = () => {
    updateBoard(index)
  }

  const className = `square ${isSelect ? 'isSelect' : ''}`

  return <div className={className} onClick={handleClick}>{children}</div>
}
