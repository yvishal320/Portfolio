import React from 'react'
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io";
import { RiReactjsLine } from 'react-icons/ri'
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from 'framer-motion'


const iconvarients=(duration)=>({
    initial:{y:-10},
    animate:{
        y:[10,-10],
        transition:{
            duration: duration,
            ease:"linear",
            repeat:Infinity,
            repeatType:"reverse",
        },
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <motion.h1 
            initial={{opacity:0,y:-100}}
            whileInView={{opacity:1,y:0,transition:{duration:1.5}}}
            className="my-20 text-center text-4xl ">Technologies</motion.h1>
            <motion.div 
            initial={{x:-100,opacity:0}}
            whileInView={{x:0,opacity:1}}
            transition={{duration:1.5}}
             className="flex flex-wrap items-center justify-center gap-4">
                <motion.div
                variants={iconvarients(2.5)}
                initial="intial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoHtml5 className='text-7xl text-orange-700'/>
                </motion.div>
                <motion.div
                 variants={iconvarients(3)}
                initial="intial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoCss3 className='text-7xl text-blue-700'/>
                </motion.div>
                <motion.div
                 variants={iconvarients(5)}
                initial="intial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <IoLogoJavascript className='text-7xl text-yellow-400'/>
                </motion.div>
                <motion.div
                 variants={iconvarients(2)}
                initial="intial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiReactjsLine className='text-7xl text-cyan-400'/>
                </motion.div>
                <motion.div
                 variants={iconvarients(4)}
                initial="intial"
                animate="animate"
                 className="rounded-2xl border-4 border-neutral-800 p-4">
                <RiTailwindCssFill className='text-7xl text-sky-600'/>
                </motion.div>
            </motion.div>

        </div>
    )
}

export default Technologies
