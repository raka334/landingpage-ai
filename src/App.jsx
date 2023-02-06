import { useState } from 'react'
import reactLogo from './assets/react.svg'
// import './App.css'
import "./index.css"
import {AnimatePresence, motion}  from "framer-motion"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
     <AnimatePresence>
     <motion.h1 className="text-center p-6"
     
     layout
    initial={{opacity:0}}
    animate={{opacity:1}}
     transition={{
      delay: 0.5,
      x: { duration: 10 },
      default: { ease: "easeInOut" }
    }}
     >
     
     Workshop on AI/ML
     <div className=''> By </div>
    
     <div className=''>Speaker Name </div>
     </motion.h1>
     </AnimatePresence>
    
     
    
     
    
    </div>
    
   
  )
}

export default App
