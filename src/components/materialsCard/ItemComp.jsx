import React from 'react'
import './materials.scss'
import { Tag } from 'antd'


const ItemComp = ({ items, label }) => {
  return (
    <div className='item-container'>
      <Tag className='ml-3 fs-12' color='gray'>{items}</Tag>
      <span className='fs-12'> {label} </span>
    </div>
  )
}

export default ItemComp