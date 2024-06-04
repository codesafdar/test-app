import React from 'react'
import { MdKeyboardArrowDown, MdOutlineKeyboardArrowUp } from "react-icons/md";
import './materials.scss'


const Details = ({ setOpen, open }) => {
  return (
    <div className='flex pl-30 detail-container'>
      <div className='flex pointer' onClick={() => setOpen(!open)}>
        <div className='mr-15 mt-3 fs-15 fsmall'>
          {
            open ?
              <MdOutlineKeyboardArrowUp />
              : <MdKeyboardArrowDown />
          }
        </div>
        <div className='fs-15 fsmall'>
          Details
        </div>
      </div>
    </div>
  )
}

export default Details