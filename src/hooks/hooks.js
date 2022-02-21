import {useEffect,useState} from 'react'

export default function useMousePosition(){
    const [position,setPosition] = useState({left:0,top:0})
    useEffect(()=>{
        const setFromEvent = e => setPosition({left:e.clientX, top:e.clientY})
        window.addEventListener('mousemove', setFromEvent)
        return ()=>{
            window.removeEventListener('mousemove', setFromEvent)
        }
    },[])

    return position
}