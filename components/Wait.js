import React from 'react'
import Heading from './Heading'

export default function Wait() {
    const messages = [
        {
            mgs: '😒 samanno dekha kortei aste pare nh',
            time: '01/10/22'
        },
        {
            mgs: 'dekha korte aste pare nh',
            time: '01/10/22'
        },
        {
            mgs: 'dekha korbo nh 🙄',
            time: '05/10/22'
        },
        {
            mgs: '😒 dekha korte aso age 😭',
            time: '05/10/22'
        },
        {
            mgs: 'nh dekha korar kotha sunle amr akhn birokto lge',
            time: '13/10/22'
        },
        {
            mgs: 'apu ke phn kore bollm j apnr sathe dekha korsi 🙈',
            time: '15/10/22'
        },
    ]
    return (
        <div className='my-8 min-h-screen'>
            <Heading title='When will We Meet?' />
            <div className="mt-4">
                {
                    messages.map((item, index) => (
                        <div key={index} className="chat pb-8 chat-start">
                            <div className="chat-image avatar">
                                <div className="w-8 text-warning text-xl rounded-full">
                                    {index === (messages.length - 1) ?
                                        <div className='bg-error w-8 h-8'></div>
                                        : <div className='bg-secondary w-8 h-8'></div>}
                                </div>
                            </div>
                            <div className="chat-bubble">
                                <div className="relative">
                                    {item.mgs}
                                    <div className="absolute z-20 text-secondary -bottom-9 right-30 ">
                                        {item.time}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
