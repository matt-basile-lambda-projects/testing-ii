import React from 'react'

export default function ButtonPad(props) {
  return (
    <div>
      <button onClick={e=>props.addStrike(e)}>Strike</button>
      <button>Hit</button>
      <button onClick={e=>props.addBall(e)}>Ball</button>
      <button onClick={e=>props.addFoul(e)}>Foul</button>
    </div>
  )
}
