import { useState } from 'react';
import React, { useRef } from 'react'
import Cards from './Cards'

function Frontsec() {
    const ref = useRef(null);
    const data=[
      {
        desc: "This is the first card for docs mini app.",
        mbs: "0.9 Mb",
        logo: true,
        tag: { isOpen: true, tagTitle: "Upload", tagColor: "blue"}
      },{
        desc: "This is the second card for docs mini app.",
        mbs: "0.9 Mb",
        logo: true,
        tag: { isOpen: true, tagTitle: "Download", tagColor: "green"}
      },
    ];
  return (
    <div ref={ref} className='absolute z-[3] w-full h-screen p-5 flex gap-5'>
        {data.map((item, index)=>(
            <Cards reference={ref} data={item}/>
          ))}
    </div>
  )
}

export default Frontsec
