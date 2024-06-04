import { Tag } from 'antd'
import React from 'react'

const StatusComp = ({ status, color }) => {
  return (
    <div>
      <Tag color={color}>{status}</Tag>
    </div>
  )
}

export default StatusComp