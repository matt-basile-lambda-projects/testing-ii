import React from 'react'

export default function ScoreBoard(props) {
  return (
    <div className="w-3/5">
      <h3 className="text-3xl text-center">CITI FIELD</h3>
      <div className="flex w-full justify-center">
          <div className="w-inning">1</div>
          <div className="w-inning">2</div>
          <div className="w-inning">3</div>
          <div className="w-inning">4</div>
          <div className="w-inning">5</div>
          <div className="w-inning">6</div>
          <div className="w-inning">7</div>
          <div className="w-inning">8</div>
          <div className="w-inning">9</div>
          <div className="w-inning">R</div>
          <div className="w-inning">H</div>
          <div className="w-inning">E</div>
      </div>
      <div className="flex w-full justify-start">
          <div className="w-team-inning">Away</div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
      </div>
      <div className="flex w-full justify-start">
          <div className="w-team-inning">Home</div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
          <div className="w-inning"></div>
      </div>
    </div>
  )
}
