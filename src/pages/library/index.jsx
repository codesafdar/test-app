import React from 'react'
import { Tabs } from 'antd'
import './library.scss'
import {
  HomeOutlined,
  ArrowRightOutlined
} from '@ant-design/icons'
import Materials from '../../components/matieres'
import LibraryItems from '../../components/libItems'


const Library = () => {
  const onChange = (key) => {
    console.log(key)
  }

  const items = [
    {
      key: '1',
      label: 'Matières',
      children: <Materials />,
    },
    {
      key: '2',
      label: 'Items',
      children: <LibraryItems />,
    }
  ];

  return (
    <div className='lib-container'>
      <div className='flex itemsCenter'>
        <div className='mr-20'>
          <HomeOutlined />
        </div>
        <div>
          <ArrowRightOutlined />
        </div>
        <div className='ml-35 semiBold text'>
          Library
        </div>
      </div>
      <div className='main-heading'>
        Library
      </div>
      <div>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  )
}

export default Library