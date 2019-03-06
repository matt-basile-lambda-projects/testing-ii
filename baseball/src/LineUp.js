import React from 'react'

export default function LineUp(props) {
  return (
    <div className="w-1/5">
      <h2 className="text-center">{props.away ? 'AWAY' : 'HOME'}</h2>
      {props.roster.map((player, i) => (
          <div className=" h-12 justify-center items-center border flex" key={i}>{player}</div>
      ))}
    </div>
  )
}
