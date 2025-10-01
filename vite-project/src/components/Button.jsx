import React, { Children } from 'react'

const Button = ({children , disabled}) => {
  return (
    <span className={`text-white-500 text-1xl rounded-2xl py-1 px-18
         ${disabled?'bg-green-500':'bg-[#748aa1]'} cursor-pointer mt-3 text-center`}>{children}</span>
  )
}

export default Button
