import React from 'react'

export default function Count(props) {
  return (
    <div className="w-1/4 text-center self-center">
      <h3 className="my-3 text-2xl">Strikes: {props.strikes}</h3>
      <h3 className="my-3 text-2xl">Balls: {props.balls}</h3>
      <h3 className="my-3 text-2xl">Outs: {props.outs}</h3>
    </div>
  )
}
