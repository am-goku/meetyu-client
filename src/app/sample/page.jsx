'use client'

import React, { useEffect, useState } from 'react'

import "./style.css"
import Vsrn from './VideoInterface';

function page() {

  const [name, setName] = useState('Sample name');


  return (
    <div className='flex gap-5 flex-col'>
      <Vsrn setName={setName}/>
      <hr /><hr />
        {name}
    </div>
  );
}

export default page