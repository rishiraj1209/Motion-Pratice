'use-client'
import { IconChartBar, IconChevronLeft, IconChevronRight, IconHome, IconSettings, IconUser } from '@tabler/icons-react';
import React, { useState } from 'react'
import { motion } from 'motion/react';

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = ()=>{
        setIsOpen(!isOpen);
    }

    const links = [
        {
            name:"Home",
            href:'/',
            icon: <IconHome/>
        },
        {
            name:"Analytics",
            href:"/analytics",
            icon:<IconChartBar/>
        },
        {
            name:"Users",
            href:"/users",
            icon:<IconUser/>
        },
        {
            name:"Settings",
            href:"/settings",
            icon:<IconSettings/>
        }
    ];

    const SidebarVariant = {
        open:{
            width:"16rem"
        },
        closed:{
            width:"4.5rem"
        }
    }

    const parentVariant = {
        open:{
            transition:{
                staggerChildren:0.07,
                delayChildren:0.2,
            }
        },
        closed:{
            transition:{
                staggerChildren: 0.05,
                staggerDirection:-1,
            }
        }
    }

    const childVariant={
        open:{
            scale:1.1,
            opacity:1,
            y:0,
        },
        closed:{
            scale:0.98,
            opacity:0,
            y:-10,
        }
    }

    

  return (
    <motion.div
    initial={false}
    animate={isOpen?'open':'closed'}
    exit='closed'
    transition={{
        duration:0.3,
    }}
     className='h-full border border-r border-neutral-100 '>
      <motion.nav
      variants={SidebarVariant}
       className='bg-white h-full shadow-md'>
        <div className='flex justify-between items-center p-4'>
            <h2 className={`text-neutral-700 text-xl font-semibold ${!isOpen && 'sr-only'}`}>Dashboard</h2>
            <button 
                onClick={toggleSidebar} 
                className='bg-white p-2 rounded-full text-gray-700 shadow-md focus:outline-none hover:bg-gray-200' 
                aria-label={isOpen?'close Sidebar':'open Sidebar'}
            >
                {isOpen ? <IconChevronLeft/> : <IconChevronRight/>}
            </button>
        </div>

        <div className='relative'>
            <nav className='p-4'>
                <motion.ul variants={parentVariant} className='space-y-2'>
                    {links.map((link)=>(
                        <motion.li variants={childVariant} key={link.name}>
                            <a 
                                className='flex items-center p-2 text-gray-700 rounded hover:bg-gray-200 gap-2' 
                                title={!isOpen?link.name : ''}
                                href={link.href}
                            >{link.icon}{isOpen && link.name}</a>
                        </motion.li>
                    ))}
                </motion.ul>
            </nav>
        </div>
      </motion.nav>
    </motion.div>
  )
}

export default Sidebar
