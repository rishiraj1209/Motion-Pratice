//       initial={{
//         rotate:0
//       }}
//       animate={{
//         rotate:[0,20,10,20,0]
//       }}
//       exit={{
//         rotate:0
//       }}
//       transition={{
//         duration:2,
//         ease:'easeInOut'
//       }}


'use client'
import React from 'react'
import { motion } from 'motion/react'

const Content = () => {
  return (
    <div 
      className='[perspective::100px] transform-3d h-screen w-full bg-neutral-950 flex items-center justify-center'
      style={{
        backgroundImage: `radial-gradient(circle at 0.5px 0.5px,rgba(255,255,255,0.1) 1px, transparent 0)`,
        backgroundSize:'8px 8px',
        backgroundRepeat:'repeat'
      }}
    >
      <motion.button
      initial={{
        opacity:0
      }}
      animate={{
        opacity:1
      }}
      whileHover={{
        rotateX:25,
        rotateY:10,
        boxShadow:"0px 20px 50px rgba(8,112,184,0.7)",
        y:-5
      }}
      whileTap={{
        y:0
      }}
      style={{
        translateZ:100
      }}
      transition={{
        duration:0.3,
        ease:'easeInOut'
      }}
        className='group cursor-pointer relative px-12 py-4 rounded-lg text-neutral-500 bg-black shadow-[0px_1px_2px_0px_rgb(255,255,255,0.1)_inset,0px_-1px_2px_0px_rgba(255,255,255,0.1)_inset]' 
        type='button'> <span className='group-hover:text-cyan-500 transition-colors duration-300 font-medium'>Subscribe</span>
        <span className='absolute inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-px w-3/4 mx-auto'></span>
        <span className='absolute opacity-0 group-hover:opacity-100 transition-all duration-300 inset-x-0 bottom-px bg-linear-to-r from-transparent via-cyan-500 to-transparent h-1 w-full mx-auto blur-sm'></span>
      </motion.button>
    </div>
  )
}

export default Content
