import style from "./style.module.css";
import img1 from "./sensor.jpg";
import { useState } from "react";
import activeD from './desks/active.png'
import avaliableD from './desks/avaliable.png'
import baseD from './desks/base.png'
import blockedD from './desks/blocked.png'
import flexD from './desks/flex.png'
export default function Sidebar({draggImage}) {
    const [openType, setOpenType] = useState(null)

  return (
    <div className={style.sidebar}>
      <input placeholder="Search" />
      <br />
      <br />
      <div className={style.space}>
        <p>SENSOR TYPES</p>
        <div className={style.types}>
          <div className={style.card} onClick={()=>setOpenType(openType===null?'desk1':null)}>
            <img src={img1} alt='types' width={80}/>
            {openType==='desk1'&&<div className={style.res_types}>
                <div 
                onClick={()=>draggImage({dragg:true,image:activeD})}
                ><img alt="desks" src={activeD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:avaliableD})}
                ><img alt="desks" src={avaliableD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:baseD})}
                ><img alt="desks" src={baseD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:blockedD})}
                ><img alt="desks" src={blockedD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:flexD})}
                ><img alt="desks" src={flexD}/></div>
            </div>}
          </div>
          <div className={style.card} onClick={()=>setOpenType(openType===null?'desk2':null)}>
            <img src={img1} alt='types' width={80}/>
            {openType==='desk2'&&<div className={style.res_types}>
                <div 
                onClick={()=>draggImage({dragg:true,image:activeD})}
                ><img alt="desks" src={activeD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:avaliableD})}
                ><img alt="desks" src={avaliableD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:baseD})}
                ><img alt="desks" src={baseD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:blockedD})}
                ><img alt="desks" src={blockedD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:flexD})}
                ><img alt="desks" src={flexD}/></div>
            </div>}
          </div>
          <div className={style.card} onClick={()=>setOpenType(openType===null?'desk3':null)}>
            <img src={img1} alt='types' width={80}/>
            {openType==='desk3'&&<div className={style.res_types}>
                <div 
                onClick={()=>draggImage({dragg:true,image:activeD})}
                ><img alt="desks" src={activeD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:avaliableD})}
                ><img alt="desks" src={avaliableD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:baseD})}
                ><img alt="desks" src={baseD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:blockedD})}
                ><img alt="desks" src={blockedD}/></div>
                <div 
                onClick={()=>draggImage({dragg:true,image:flexD})}
                ><img alt="desks" src={flexD}/></div>
            </div>}
          </div>
        </div>
      </div>

       
    </div>
  );
}
