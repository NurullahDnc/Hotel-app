import React from 'react'

const Input = ({ id, type, placeholder, title, required, register, errors }) => {
  return (
    <div className={`inputs`}>
      <p className='inputs-title'>{title}</p>
      <input className={` inputs-input ${errors[id] ? "err" : ""} `} {...register(id, { required })} type={type} name={id} placeholder={placeholder} />
    </div>
  )
}

export default Input
