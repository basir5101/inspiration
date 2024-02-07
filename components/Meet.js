import React from 'react'
import Image from 'next/image'

export default function Meet() {
    return (
        <div className='min-h-screen relative flex items-center justify-center  bg-secondary overflow-hidden'>
            <Image src={'/images/meet.svg'} className='object-cover contrast-50 brightness-50 blur-sm overflow-hidden' height={800} width={600} alt='meet' />
            <div className="absolute text-center top-40">
                <div className='text-4xl font-bold text-white'>Remember ? </div>
                <div className='text-4xl font-bold text-white mt-5'> 📅 15th October, 2023 </div>
                <div className='text-4xl font-bold text-white mt-5'> It was the starting 🎉🎉 </div>
            </div>
        </div>
    )
}
