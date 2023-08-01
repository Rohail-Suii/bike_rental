import React from 'react'
import ImageCard from '../components/childComponents/ImageCard'
import Person1 from '../assets/People/Person 1.jpg'
import Person2 from '../assets/People/Person 2.jpg'
import Person3 from '../assets/People/Person 3.jpg'
import Person4 from '../assets/People/Person 4.jpg'
const TeamPage = () => {
    return (
        <div className='flex flex-col m-4 space-y-3'>
            <h1 className='text-4xl text-black text-center font-bold'>Our Team</h1>
            <div className='items-center flex flex-row justify-center '>
                <ImageCard image={Person4} name="Khan" rank="CEO" />
            </div>
            <div className='flex flex-col space-y-5 md:flex-row justify-center items-center md:space-x-20'>
                <div>
                    <ImageCard image={Person1} name="Ali Khan" rank="Bike Detailist" />
                </div>
                <div>
                    <ImageCard image={Person2} name="Usman khan" rank="Salesman" />
                </div>
                <div>
                    <ImageCard image={Person3} name="Umar Khan" rank="Mechanic" />
                </div>
                
            </div>
        </div>
    )
}

export default TeamPage