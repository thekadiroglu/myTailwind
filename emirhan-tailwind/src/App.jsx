import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Photo from './assets/me.jpg'
import LasVegas from './assets/lasvegas.jpg'
import Header from './components/header'

function App() {
  

  return (
    <>
      <Header/>
      <div className='max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl'>
  <div className='md:flex'>
    <div class="md:shrink-0">
      <img className='max-w-md min-h-full' src={LasVegas} alt="" />
    </div>
    <div class="p-8 font-mono">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Incredible accommodation for your team</a>
      <p class="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
    </div>
  </div>
</div>
      
    </>
  )
}

export default App
