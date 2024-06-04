import { Input } from 'antd'
import React from 'react'
import {
  SearchOutlined
} from '@ant-design/icons'
import './searchItem.scss'

const SearchItem = () => {
  return (
    <div className='flex'>
      <Input className='searchCon' size="large" placeholder="Search an item" prefix={<SearchOutlined />} />
    </div>
  )
}

export default SearchItem