import React from 'react'

export default function ButtonPad(props) {
  return (
    <div className="w-full flex flex-wrap">
      <button className="w-1/3 border h-24 text-2xl font-bold bg-red-light" onClick={e=>props.addStrike(e)}>Strike</button>
      <button className="w-1/3 border h-24 text-2xl font-bold bg-green-light">Hit</button>
      <button className="w-1/3 border h-24 text-2xl font-bold bg-green-light">Run</button>
      <button className="w-1/3 border h-24 text-2xl font-bold bg-red-light">Out</button>
      <button className="w-1/3 border h-24 text-2xl font-bold bg-orange-light" onClick={e=>props.addBall(e)}>Ball</button>
      <button className="w-1/3 border h-24 text-2xl font-bold bg-orange-light" onClick={e=>props.addFoul(e)}>Foul</button>
    </div>
  )
}
