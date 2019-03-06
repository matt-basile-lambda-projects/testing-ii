import React from 'react'

export default function Count(props) {
  return (
    <div className="w-1/4 text-center self-center">
    <div className="flex items-baseline my-3">
      <h3 className="text-2xl">Strikes: </h3>
      {props.strikes === 0 ? null : 
      props.strikes === 1 ? <div data-testid="strikeDot" className="bg-green-light rounded h-4 w-4 mx-2"></div> :
     (<><div data-testid="strikeDot" className="bg-green-light rounded h-4 w-4 mx-2"></div>
      <div data-testid="strikeDot" className="bg-green-light rounded h-4 w-4 mx-2"></div></>)
      }
    </div>
    <div className="flex items-baseline my-3">
      <h3 className="text-2xl">Balls: </h3>
      {props.balls === 0 ? null : 
      props.balls === 1 ? <div className="bg-orange-light rounded h-4 w-4 mx-2"></div> :
      props.balls === 2 ?
     (<><div className="bg-orange-light rounded h-4 w-4 mx-2"></div>
      <div className="bg-orange-light rounded h-4 w-4 mx-2"></div></>) 
      :
     (<><div className="bg-orange-light rounded h-4 w-4 mx-2"></div>
      <div className="bg-orange-light rounded h-4 w-4 mx-2"></div> 
      <div className="bg-orange-light rounded h-4 w-4 mx-2"></div></>) 
      }
    </div>
    <div className="flex items-baseline my-3">
      <h3 className="text-2xl">Outs: </h3>
      {props.outs === 0 ? null : 
      props.outs === 1 ? <div className="bg-red-light rounded h-4 w-4 mx-2"></div> :
     (<><div className="bg-red-light rounded h-4 w-4 mx-2"></div>
      <div className="bg-red-light rounded h-4 w-4 mx-2"></div></>)
      }
    </div>
    </div>
  )
}
