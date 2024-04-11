import React from 'react'

function Vsrn({ setName }) {



  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
    </div>
  )
}

export default Vsrn