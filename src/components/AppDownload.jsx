import React from 'react'
import {assets} from '../assets/frontend_assets/assets'

const AppDownload = () => {
  return (
    <div className='flex flex-col items-center justify-center w-[90vw] mx-auto mb-20' id='app'>
      <h2 className='font-bold text-2xl'>Download Our App</h2>
      <p className='text-gray-600'>Get the best food delivery experience at your fingertips.</p>
      <div className='flex flex-row gap-4 mt-4'>
        <img src={assets.app_store} alt="App Store" className='h-12' />
        <img src={assets.play_store} alt="Play Store" className='h-12' />
      </div>
    </div>
  )
}

export default AppDownload;