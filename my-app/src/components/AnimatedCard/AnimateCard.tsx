import React from 'react'
import Card from './ui/Card'
import { Outfit } from 'next/font/google'
const outfit = Outfit({
  subsets:['latin']
})

const AnimateCard = () => {
  return (
    <div className={`${outfit.className} min-h-screen flex items-center justify-center bg-gray-50 text-neutral-950`}>
      <Card/>
    </div>
  )
}

export default AnimateCard
