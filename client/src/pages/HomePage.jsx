import React from 'react'
import { useAppContext } from '../context/AppContext'
import PromptInput from '../components/PromptInput';

function Homepage() {
  const { user } = useAppContext();
  return (
    <div className="h-screen overflow-y-scroll text-white font-sans bg-[url('/bg-img.png')] bg-cover bg-center bg-no-repeat">
      {/* Nav */}
      <nav className='sticky top-0 z-10 flex items-center justify-between px-6 py-4'>
        <div className='flex items-center gap-2 '>
          <img src="/logo.svg" alt="logo" className='size-6' />
          <span className=' text-xl font-semibold tracking-tight'>BuildMind AI</span>
        </div>
        <div className='flex items-center gap-4 text-sm font-medium text-zinc-300 '>
          <span>
            {user?.name}
          </span>
          <button className='py-1.5 px-3 border border-white/20 text-white hover:bg-white/10 text-xs rounded-md cursor-pointer bg-transparent '>Sign out</button>
        </div>

      </nav>

      {/* Hero Section */}
      <div className='flex-1 flex flex-col items-center justify-center px-8 pb-20  mt-8 xl:mt-28'>
        <div className='w-full max-w-2xl flex flex-col items-center'>
          {/* Promo Badge      */}
          <div className='flex items-center gap-2 pr-3 p-2 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[13px] text-white/90'>
            <span className='px-3 py-1 text-[11px] bg-red-700 rounded-full font-medium tracking-wider cursor-pointer transition-all duration-300'>PROMO</span>
            <span className='font-medium tracking-wider'>Create your first project now. It's free.</span>
            <button className='rounded-md bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-100 cursor-pointer transition-all duration-300'>Sign up</button>
          </div>
        </div>

        {/* title */}
        <h1 className='text-center md:text-6xl max-w-2xl mt-7 text-4xl  text-white font-bold '>Lets build something amazing</h1>
        <p className='text-center text-sm text-white/65 leading-relaxed max-w-xl mt-4'>Describe what you want to build, and let BuildMind AI handle the rest. From code generation to deployment, we’ve got you covered.</p>


        {/* Prompt input with glassmorphic variant */}
        <div className='w-full mt-7 flex justify-center px-10 '>
          <PromptInput onSubmit={() => { }} loading={false} placeholder='Create portfolio website...' variant='glass' autoFocus />
        </div>

      </div>

    </div>
  )
}

export default Homepage