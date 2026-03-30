'use client'
import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { IconBrandReact, IconBox, IconPalette, IconBolt } from '@tabler/icons-react'
import { useScroll, useTransform, motion, useMotionTemplate, useSpring, useMotionValueEvent, easeInOut } from 'motion/react'

type feature = {
    icon:React.ReactNode;
    title:String;
    description:String;
    content:React.ReactNode;
}

const features: feature[] = [
  {
    icon: <IconBrandReact size={32} />,
    title: "React Components",
    description: "Build interactive UI with React, welcome to the website where you can learn some amazing animations",
    content: (
      <div className="w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="React" 
          width={500} 
          height={500}
          className="w-100 h-60 object-cover rounded-xl"
        />
      </div>
    )
  },
  {
    icon: <IconBox size={32} />,
    title: "Component Library",
    description: "Pre-built reusable components, welcome to the website where you can learn some amazing animations",
    content: (
      <div className="w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1555664424-778a1e5e1b48?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Components" 
          width={500} 
          height={500}
          className="w-100 h-60 object-cover rounded-xl"
        />
      </div>
    )
  },
  {
    icon: <IconPalette size={32} />,
    title: "Customizable Design",
    description: "Flexible styling and theming, welcome to the website where you can learn some amazing animations",
    content: (
      <div className="w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1482053450283-3e0b78b09a70?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Design" 
          width={500} 
          height={500}
          className="w-100 h-60 object-cover rounded-xl"
        />
      </div>
    )
  },
  {
    icon: <IconBolt size={32} />,
    title: "High Performance",
    description: "Optimized for speed and efficiency, welcome to the website where you can learn some amazing animations",
    content: (
      <div className="w-full h-full">
        <Image 
          src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Performance" 
          width={500} 
          height={500}
          className="w-100 h-60 object-cover rounded-xl"
        />
      </div>
    )
  }
]

const MotionHooksExample = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const {scrollYProgress} = useScroll({
        target:containerRef,
        offset:['start end','end start']
    })

    const backgrounds = ['#091413','#285A48','#408A71','#B0E4CC'];
    const [background,setBackground] = useState(backgrounds[0]);
    useMotionValueEvent(scrollYProgress,'change',(latest)=>{
        const finalValue = Math.floor(latest * backgrounds.length);
        setBackground(backgrounds[finalValue]);
    })
  return (
    <motion.div animate={{background}} transition={{duration:0.3, ease:'easeInOut'}} ref={containerRef} className='bg-neutral-900 flex items-center justify-center min-h-screen'>
        <div className='flex flex-col gap-10 max-w-2xl mx-auto p-10 '>
            {features.map((feature, index) => (
                <Card key={index} feature={feature}/>
            ))}
        </div>
      
    </motion.div>
  )
}

const Card = ({feature}:{feature:feature})=>{
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target:ref,
        offset: ['start end','end start']
    })

    const translateContent = useSpring(useTransform(scrollYProgress, [0,1], [200,-300])) ;
    const opacityContent = useTransform(scrollYProgress,[0,0.5,1],[0,1,0]);
    const blur = useTransform(scrollYProgress,[0.5,1],[0,10]);
    const scale = useTransform(scrollYProgress, [0.5,1],[1,0.8]);
    return(
        <div ref={ref} key={feature.title} className='grid grid-cols-2 gap-20 py-40'>
                    <motion.div style={{filter:useMotionTemplate`blur(${blur}px)`,scale:scale}} className='flex flex-col justify-center gap-4'>
                        {feature.icon}
                        <h3 className='text-2xl font-semibold'>{feature.title}</h3>
                        <p className='text-md font-medium text-neutral-500'>{feature.description}</p>
                    </motion.div>
                    <motion.div 
                    style={{
                        y:translateContent,
                        opacity:opacityContent
                    }}
                    >
                        {feature.content}
                    </motion.div>
        </div>
    )
}

export default MotionHooksExample
