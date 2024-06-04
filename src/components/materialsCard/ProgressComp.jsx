import { Progress } from 'antd'
import React from 'react'
import { FaEdit } from "react-icons/fa"

const ProgressComp = ({ percent }) => {
  return (
    <div className='flex itemsCenter'>
      <Progress size='small' percent={percent} />
      <div className='ml-30'>
        <FaEdit />
      </div>
    </div>
  )
}

export default ProgressComp