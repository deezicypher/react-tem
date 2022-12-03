import React from 'react'

const Button = ({styles}) => {
  return (
    <button type='button' className={`sm:py-4 sm:px-6 py-2 px-4 bg-blue-gradient 
    font-poppins 
    font-meduim
    text-[18px]
    text-primary
    outline-none
    rounded-lg
    ${styles}
    `}>
      Get Started
    </button>
  )
}

export default Button