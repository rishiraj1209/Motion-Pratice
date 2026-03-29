'use client'
import React, { useState } from 'react'
import {cn} from '@/src/lib/utils/cn'
import Image from 'next/image'
import { Icon24Hours, Icon360View, IconMessage, IconX } from '@tabler/icons-react'
import { AnimatePresence, motion } from 'motion/react'

const Card = () => {
    const [open,setOpen] = useState(true);
  return (
    <>
        <AnimatePresence>
            {open && (
            <motion.div
            initial={{
                opacity:0,
                scale:0.98,
                filter:'blur(10px)'
            }} 
            animate={{
                opacity:1,
                scale:1,
                filter:'blur(0px)'
            }}
            exit={{
                opacity:0,
                scale:0.98,
                filter:'blur(10px)'
            }}
            transition={{
                duration:0.3,
                ease:'easeInOut'
            }}
                
            className={cn('w-96 min-h-116 rounded-xl bg-white',
                    'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                    'p-8 flex flex-col'
                )}>
                <h2 className='font-semibold text-xl'>Aceternity UI components</h2>
                <p className='text-neutral-500 mt-2 text-sm'>A collection of beautiful UI components, let's go on with it.</p>

                <div className="flex items-center justify-center">
                    <button onClick={()=>{setOpen(false)}} className={cn('flex items-center gap-1 text-[16px] mt-4',
                            'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                            'px-2 py-1 rounded-md'
                    )}> 
                        <Image src='https://ui.aceternity.com/logo-dark.png' width={50} height={50} className='h-6 w-6' alt='logo'/> 
                        Aceternity
                        <IconX className='h-4 w-4 text-neutral-400'/>
                    </button>
                </div>

                <div className='bg-gray-100 flex-1 border border-dashed mt-4 rounded-lg border-neutral-200 relative'>

                    {/* motion div starts here */}
                    <motion.div 
                    initial={{
                        opacity:0,
                        scale:0.98,
                        filter:'blur(10px)'
                    }}
                    whileHover={{
                        opacity:1,
                        scale:1.05,
                        filter:'blur(0px)'
                    }}
                    transition={{
                        duration:0.3,
                        ease:'easeInOut'
                    }}
                    
                    className='absolute inset-0 h-full w-full bg-white rounded-lg divide-y divide-neutral-200 border border-neutral-200'>

                        <div className='flex gap-4 p-6'>
                            <div className={cn('h-10 w-10 bg-white bg-linear-to-br rounded-lg ',
                                    'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                                    'flex items-center justify-center'
                            )}>
                                <IconMessage className='w-6 h-6 text-neutral-600'/>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm font-semibold text-neutral-700'>Aceternity UI Components</p>
                                <p className='text-xs font-medium text-neutral-500 mt-1'>A collection of UI components</p>
                            </div>
                        </div>

                        <div className='flex gap-4 p-6'>
                            <div className={cn('h-10 w-10 bg-white bg-linear-to-br rounded-lg ',
                                    'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                                    'flex items-center justify-center'
                            )}>
                                <Icon24Hours className='w-6 h-6 text-neutral-600'/>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm font-semibold text-neutral-700'>24 hours turn around</p>
                                <p className='text-xs font-medium text-neutral-500 mt-1'>super fast delivery at warp speed</p>
                            </div>
                        </div>

                        <div className='flex gap-4 p-6'>
                            <div className={cn('h-10 w-10 bg-white bg-linear-to-br rounded-lg ',
                                    'shadow-[0_1px_1px_rgba(0,0,0,0.05),0_4px_6px_rgba(34,42,53,0.04),0_24px_68px_rgba(47,48,55,0.05),0_2px_3px_rgba(0,0,0,0.04)]',
                                    'flex items-center justify-center'
                            )}>
                                <Icon360View className='w-6 h-6 text-neutral-600'/>
                            </div>
                            <div className='flex flex-col'>
                                <p className='text-sm font-semibold text-neutral-700'>360 days all around</p>
                                <p className='text-xs font-medium text-neutral-500 mt-1'>We are here to help you 24/7</p>
                            </div>
                        </div>

                    </motion.div>
                    {/* motion div ends here */}

                </div>

            </motion.div>
        )}
        </AnimatePresence>
        
    </>
    
  )
}

export default Card
