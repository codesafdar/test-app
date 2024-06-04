import { Table } from 'antd'
import React from 'react'
import ItemComp from './ItemComp'
import ProgressComp from './ProgressComp'
import StatusComp from './StatusComp'

const TableComp = () => {
  const columns = [
    {
      title: 'Items',
      dataIndex: 'items',
      responsive: ["xs", "sm", "lg", "xl"]
    },
    {
      title: 'Status',
      dataIndex: 'status',
      responsive: ["xs", "sm", "lg", "xl"]
    },
    {
      title: 'Questions',
      dataIndex: 'questions',
      responsive: ["xs", "sm", "lg", "xl"]
    },
    {
      title: 'Progress',
      dataIndex: 'progress',
      responsive: ["xs", "sm", "lg", "xl"]
    },
  ]

  const data = [
    {
      items: <ItemComp items={23} label={'Heart Failure'} />,
      status: '',
      questions: '10 Questions',
      progress: <ProgressComp percent={46} />
    },
    {
      items: <ItemComp items={29} label={'High Blood Pressure'} />,
      status: <StatusComp status={'In progress'} color='green' />,
      questions: '14 Questions',
      progress: <ProgressComp percent={86} />
    },
    {
      items: <ItemComp items={34} label={'Low Blood Pressure'} />,
      status: <StatusComp status={'Not completed'} color='red' />,
      questions: '13 Questions',
      progress: <ProgressComp percent={93} />
    },
    {
      items: <ItemComp items={43} label={'Heart Stunt'} />,
      status: <StatusComp status={'Completed'} color='green' />,
      questions: '24 Questions',
      progress: <ProgressComp percent={39} />
    },
  ]
  return (
    <div>
      <Table
        columns={columns}
        dataSource={data}
        className='material-table'
        pagination={false}
      />
    </div>
  )
}

export default TableComp