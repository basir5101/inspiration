import React from 'react'
import Image from 'next/image'

export default function Meet() {
    let startDate = new Date('2022-10-15');
    let endDate = new Date();

    // Calculate the difference in milliseconds
    let differenceMs = endDate.getTime() - startDate.getTime();

    // Convert milliseconds to days
    let differenceDays = Math.floor(differenceMs / (1000 * 60 * 60 * 24));
    const days = differenceDays % 365;
    const years = Math.floor(differenceDays / 365)

    return (
        <div className='min-h-screen relative flex items-center justify-center  bg-secondary overflow-hidden'>
            <Image src={'/images/meet.svg'} className='object-cover contrast-50 brightness-50 blur-sm overflow-hidden' height={800} width={600} alt='meet' />
            <div className="absolute text-center top-40">
                <div className='text-4xl font-bold text-white'>Remember ? </div>
                <div className='text-4xl font-bold text-white mt-5'> 📅 15th October, 2022 </div>
                <div className='text-4xl font-bold text-white mt-5'> It was {years} year {days} ago 🙊 </div>
            </div>
        </div>
    )
}
