import React from 'react'
import './libraryItems.scss'
import { Divider, Progress } from 'antd'
import { RiProgress1Fill } from 'react-icons/ri'
import { GiProgression } from "react-icons/gi";
import { PiListChecksFill } from "react-icons/pi";
import { FaEdit } from "react-icons/fa";
import { BiSolidShow } from "react-icons/bi";


const LibItem = () => {
  return (
    <div className='items-container'>
      <div className='flex justifyBetween itemsCenter'>
        <div className='flex flexCol lib-item-main'>
          <div>
            139. Acute coronary syndromes
          </div>
          <Progress percent={80} showInfo={false} />
          <div className='status-text flex itemsCenter'>
            <GiProgression size={15} className='mr-5' />
            <span> 80% completed</span>
            <PiListChecksFill size={15} className='ml-30 mr-5' />
            <span> 12 questions</span>
          </div>
        </div>
        <div className='flex itemsCenter'>
          <Divider type='vertical' className='h-3' style={{ backgroundColor: '#C8C9CE' }} />
          <BiSolidShow className='ml-10 mr-15' color='#C8C9CE' size={22} />
          <FaEdit size={22} color='#C8C9CE' />
        </div>
      </div>
    </div>
  )
}

export default LibItem