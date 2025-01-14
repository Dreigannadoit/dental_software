import React from 'react'
import { tooth } from '../assets/img'

const TableLoadingAnimation = () => {
  return (
    <div className='loading-overlay glassmorphism shadow'>
        <img src={tooth} alt="loading img" />
        <img src={tooth} alt="loading img" />
        <img src={tooth} alt="loading img" />
        <img src={tooth} alt="loading img" />
        <img src={tooth} alt="loading img" />
    </div>
  )
}

export default TableLoadingAnimation