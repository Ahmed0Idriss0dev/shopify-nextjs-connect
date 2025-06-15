import React from 'react'

const Sbscribe = () => {
  return (
    <main className='flex justify-center  bg-neutral-50 text-black items-center h-dvh'>
        <div className="flex justify-center items-center flex-col gap-1">
            <h1>subscribe to our Products new</h1>
            <div className="flex items-center h-11 w-96 ">
                <input type="email" placeholder='Email' className='px-3   outline-0 w-full border border-neutral-200 h-full ' />
                <button className='w-40 h-full  bg-black text-white cursor-pointer' >Join</button>
            </div>
        </div>
    </main>
  )
}

export default Sbscribe