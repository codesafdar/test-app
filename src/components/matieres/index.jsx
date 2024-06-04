import React from 'react'
import './matieres.scss'
import SearchItem from '../searchItem'
import MaterialsCard from '../materialsCard'


const Materials = () => {
  return (
    <div>
      <SearchItem />
      <div className='mt-15'>
      <MaterialsCard />
      <MaterialsCard />
      <MaterialsCard />
      <MaterialsCard />

      </div>
    </div>
  )
}

export default Materials