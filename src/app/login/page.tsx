import Image from 'next/image'
import React from 'react'

function page() {
    const logo="/facebook.png"
  return (
    <div className='flex flex-row justify-center h-screen  w-screen gap-4 overflow-hidden'>N
        <div className='flex flex-col items-end  justify-center  h-full ' >
            <Image height={300} width={300} src={logo} alt='facebook' />
            <p className='text-2xl w-[80%] text-ellipsis text-wrap'>Facebook helps you connect and share with the people in your life.</p>
        </div>
        <div className='flex flex-col items-center justify-center  h-full  '>
            <form className='flex flex-col h-[45vh] w-[30vw] items-center gap-3 px-3 py-6 shadow-lg rounded-md bg-white'>
                <input placeholder='Email address or phone number' className='w-full rounded-lg outline-none h-16 px-2 border border-slate-300 '/>
                <input placeholder='Email address or phone number' className='w-full rounded-lg outline-none h-16 px-2 border border-slate-300 '/>
                <button className='w-full  h-16 bg-blue-600 text-white'>Login</button>
                <p className='text-blue-600'>Forgotten password?</p>
                <hr className="text-slate-400 h-2 w-full" />
                <button className='w-[70%]  bg-green-600 h-16 text-white'>Create account</button>
            </form>
             <p>Create a Page for a celebrity, brand or business.</p>
        </div>
    </div>
  )
}

export default page