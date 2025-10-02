"use client"

import { Tile } from "./tile"

interface GameBoardProps {
  board: number[][]
}

export function GameBoard({ board }: GameBoardProps) {
  return (
    <div className="bg-secondary rounded-2xl p-4 shadow-lg">
      <div className="grid grid-cols-4 gap-3">
        {board.map((row, i) => row.map((value, j) => <Tile key={`${i}-${j}`} value={value} />))}
      </div>
    </div>
  )
}
