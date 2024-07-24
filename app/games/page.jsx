import Link from 'next/link'
import React from 'react'

export default function pge() {
    const games = [
        {
            name: 'Luck Predictor',
            url: '/games/luck'
        },
        {
            name: 'Country Master',
            url: '/games/country-master'
        },
        {
            name: 'Dangerous',
            url: '/games/dangerous'
        },
        {
            name: 'Animation',
            url: '/games/animation'
        },
    ]
    return (
        <div className='bg-lime-800 text-white min-h-screen p-10'>
            <h1 className='text-3xl my-3 text-lime-50'>Games: </h1>
            {
                games.map((item, index) => (
                    <Link className='underline text-lg block' key={index} href={item.url}> {index + 1}. {item.name} </Link>
                ))
            }
        </div>
    )
}
