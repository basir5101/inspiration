import React from 'react'
import Heading from './Heading'
import Image from 'next/image'
export default function Promise() {
    const dates = [
        '15 Oct 2022',
        '31 Dec 2022',
        '30 Jan 2023',
        '13 Apr 2023',
        // chadpur
        '16 Jun 2023',
        '09 Jul 2023',
        '13 Aug 2023',
        '4 Oct 2023',
        '17 Oct 2023',
        '26 Jan 2024',
    ]
    return (
        <div className='bg-pink-50 min-h-screen relative pb-5'>
            <div className="pt-5 px-10">
                <Heading className='text-secondary my-5 text-3xl' title='When We will meet again?' />
                <Heading className='text-pink-800 text-right my-5 text-3xl' title='We do not know ☹' />
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                    {
                        dates.map((date, i) => (
                            <div key={i} className="font-semibold relative text-center border-secondary border shadow-lg ">
                                <div className='py-10 px-10'>{date}</div>
                                <Image className='absolute -top-6 -right-6' height={70} width={70} src={'/images/heart.svg'} alt='heart' />
                            </div>

                        ))
                    }
                    <div className="font-semibold bg-secondary text-center border-secondary border shadow-lg py-10 px-10"> Infinity... </div>
                </div>

            </div>
            <Image className='absolute bottom-0 opacity-25 object-cover min-h-screen blur-sm' src={'/images/we.jpg'} height={400} width={400} alt='we' />
        </div>
    )
}
