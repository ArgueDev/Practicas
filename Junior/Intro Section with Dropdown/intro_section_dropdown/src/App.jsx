import React from 'react'
import Header from './components/Header'

export default function App() {
  return (
    <>
      <Header />
      <main className='max-w-[1000px] mx-auto flex justify-between items-center gap-10'>
        
        <div className='flex flex-col h-full'> {/* Añade h-full para que el flex container ocupe toda la altura */}
          <div className='max-w-lg'>
            <h1 className='text-(--almost-black) text-6xl font-bold'>Make remote work</h1>
            <p className='text-(--medium-gray) text-lg my-10'>Get your team in sync, no matter your location. Streamline proccesses, create team rituals, and watch productivity soar.</p>
            <button className='bg-(--almost-black) rounded-2xl text-(--almost-white) px-4 py-2 font-semibold text-lg'>Learn more</button>
          </div>
          <div className='flex gap-10 mt-auto'> {/* Añade mt-auto */}
            <img className='object-contain' src="./images/client-databiz.svg" alt="client" />
            <img className='object-contain' src="./images/client-audiophile.svg" alt="client" />
            <img className='object-contain' src="./images/client-meet.svg" alt="client" />
            <img className='object-contain' src="./images/client-maker.svg" alt="client" />
          </div>
        </div>

        <div className=''>
          <img src="./images/image-hero-desktop.png" alt="hero" className='h-120 object-contain' />
        </div>

      </main>
    </>
  )
}