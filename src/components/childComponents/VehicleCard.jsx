import React from 'react'
import bike from '../../assets/svgs/HeavyMotorcycle.svg';
import keyimg from '../../assets/key.png';
import Button from './Button';
import { Link } from "react-router-dom";
const VehicleCard = ({ image, name, model, power, liter, strokes }) => {
  return (
    <div className='flex flex-col w-[400px] h-1/2 border'>
      <div className='img'>
        <img src={image} alt="" />
      </div>
      <div className='flex flex-row border-b-2 pb-2'>
        <div className='px-4 space-y-2 w-1/2'>
          <h1 className='text-black font-bold text-lg  text-left'>{name}</h1>
          <h2>&#11088;&#11088;&#11088;&#11088;&#11088;</h2>
          <div className='flex flex-row items-center space-x-3'>
            <img src={bike} alt="" className='w-[24px] h-6' />
            <h2>{model}</h2>
          </div>
          <div className='flex flex-row items-center space-x-3'>
            <img src={bike} alt="" className='w-[24px] h-6' />
            <h2>HP{' '}{power}</h2>
          </div>
        </div>
        <div className='flex flex-col px-4 space-y-4 w-1/2'>
          <h2><span className='text-black font-bold text-lg  text-center'>$45 </span><br />
            per day</h2>
          <div className='fkex flex-row'>
            <h1>Oil capacity{"  "}{liter}</h1>
          </div>
          <div className='fkex flex-row'>
            <h1>Engine strokes{"  "}{strokes}</h1>
          </div>
        </div>
      </div>
      <div className='m-4'>
        <Link to='/'>
          <Button text='Book Now' image={keyimg} />
        </Link>
      </div>
    </div>
  )
}

export default VehicleCard