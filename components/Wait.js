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
    ]
    return (
        <div className='my-8 min-h-screen'>
            <Heading title='When will We Meet?' />
            <div className="mt-4">
                {
                    messages.map((item, index) => (
                        <div key={index} className="chat chat-start">
                            <div className="chat-image avatar">
                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS chat bubble component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                            </div>
                            <div className="chat-bubble"> {item.mgs} </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
