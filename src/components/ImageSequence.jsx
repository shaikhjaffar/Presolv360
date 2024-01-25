import React, { useEffect, useState } from 'react'

export default function ImageSequence({data}) {
   const [img,setImg] = useState(data.image[0])

    useEffect(()=>{
        let i = 0 ;
         setInterval(()=>{
            i >= data.image.length -1 ? i=0 : i++
            setImg(data.image[i]) 
         },data.time ? data.time : 1000)
    },[])

  return (
    <div className='img_sequence_wrap'>
        <img src={img} alt={data?.alt} />
    </div>
  )
}
