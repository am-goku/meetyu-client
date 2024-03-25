import React from 'react'
import SingleImage from './SingleImage'
import NewImage from './NewImage';

function ImageSection() {
  return (
    <div className=" bg-blue-400 p-2 flex overflow-x-auto no-scrollbar">
      <div className='flex gap-2'>
        <NewImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
        <SingleImage />
      </div>
    </div>
  );
}

export default ImageSection