import React from 'react'
import './modal.css'

const Model = ({setSuccess}) => {
  return (
    <div className='modal-bg w-screen h-screen absolute flex justify-center items-center'>
        <div className='modal-card bg-white h-1/6 w-52 rounded-2xl flex flex-col justify-center items-center gap-2'>
            <p className='text-xl font-mono font-bold'>Success</p>
        </div>
    </div>
  )
}

export default Model