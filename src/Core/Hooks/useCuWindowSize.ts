import React, { useEffect, useState } from 'react'

interface IwindowSize{
    width:number,height:number
}

const useCuWindowSize = () => {
    const [windowSize, setwindowSize] = useState<IwindowSize>({width:window.innerWidth,height:window.innerHeight})

    useEffect(() => {
        window.addEventListener('resize',()=>{
            setwindowSize({width:window.innerWidth,height:window.innerHeight});
        })
    }, [])
    
  return {windowSize}
}

export default useCuWindowSize