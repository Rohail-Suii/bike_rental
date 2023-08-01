import React from 'react'
import VehicleCard from '../components/childComponents/VehicleCard'
import honda from '../assets/Models/honda-cbr650f.jpg'
import kawasaki_er from '../assets/Models/kawasaki-er.jpg'
import kawasaki from '../assets/Models/kawasaki.jpg'
import ktm_rc from '../assets/Models/ktm-rc-390.jpg'
import suzuki_gsx from '../assets/Models/suzuki-gsx600f.jpg'
import yamaha from '../assets/Models/yamaha-xj6.jpg'
const Bikes = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-black text-center m-3 text-[50px]'>Bikes We Offer</h1>
      <div className='flex md:flex-row items-center flex-col justify-between space-x-2 mx-[80px] mb-5'>
        <VehicleCard image={honda} name="Honda" model="CBR650F" power="86 bhp" liter="2.9 L" strokes="4-S" />
        <VehicleCard image={kawasaki_er} name="Kawasaki" model="ER-6F " power="71 bhp" liter="1.9 L" strokes="4-S" />
        <VehicleCard image={kawasaki} name="Kawasaki" model="Ninja 650" power="67 bhp" liter="1.8 L" strokes="4-S" />
      </div>
      <div className='flex md:flex-row items-center flex-col justify-between space-x-2 mx-[80px] mb-5'>
        <VehicleCard image={ktm_rc} name="KTM " model="RC 390" power="44 bhp" liter="1.6 L" strokes="4-S" />
        <VehicleCard image={suzuki_gsx} name="Suzuki " model="GSX250R " power="25 bhp" liter="2.6 L" strokes="4-S" />
        <VehicleCard image={yamaha} name="Yamaha " model="XJ6 D F" power="78 bhp" liter="2.8 L" strokes="4-S" />
      </div>
    </div>
  )
}

export default Bikes