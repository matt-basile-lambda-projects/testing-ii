import React from 'react'

export default function Count(props) {
  return (
    <div>
      <h3>Strikes: {props.strikes}</h3>
      <h3>Balls: {props.balls}</h3>
      <h3>Outs: {props.outs}</h3>
    </div>
  )
}
