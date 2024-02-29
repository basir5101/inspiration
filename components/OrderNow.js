'use client'
import React from 'react'
import Image from 'next/image'

export default function OrderNow() {
    return (
        <div className="px-10  flex justify-center items-center bg-gray-900 text-white">
            <div className="relative">
                <Image className='' src={'/images/me.png'} height={400} width={400} alt='we' />
                <h1 className="absolute bottom-40 left-3 text-3xl font-bold">Abdul Basir</h1>
                <h1 className="absolute bottom-32 left-3 text-base-300 text-lg font-bold"> Web Developer | App Developer </h1>
                <div className="absolute left-3 bottom-12 bg-secondary rounded-full p-4">Free</div>
                <button onClick={() => document.getElementById('my_modal_1').showModal()} className="absolute bottom-3 right-3  btn hover:scale-x-95 bg-indigo-800 text-white  w-40 rounded-sm hover:bg-secondary border-none"> Order Now </button>

            </div>
            <dialog id="my_modal_1" className="modal">
                <div className="modal-box text-secondary">
                    <h3 className="font-bold text-lg mb-10">Out Of Stock!</h3>
                    <Image className='' src={'/images/sad.svg'} height={400} width={400} alt='we' />

                    <div className="modal-action">
                        <form method="dialog">
                            {/* if there is a button in form, it will close the modal */}
                            <button className="btn">Accha</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    )
}
