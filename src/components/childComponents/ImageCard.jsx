import React from 'react'

const ImageCard = ({image,name,rank}) => {
  return (
    <div className='items-center flex flex-col h-[470px] w-fit shadow-xl '>
        <div className='w-fit'>
            <img src={image} alt="" className='h-[400px] w-full rounded-xl '/>
        </div>
        <div className='flex flex-col items-center mb-2'>
            <h1 className='text-black text-2xl font-bold'>{name}</h1>
            <h2 className='font-bold'>{rank}</h2>
            <br />
        </div>
    </div>
  )
}

export default ImageCard