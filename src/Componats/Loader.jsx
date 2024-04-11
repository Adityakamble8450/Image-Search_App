import React from 'react'
import spinner  from '/spinner.gif'
const Loader = () => {
  return (
    <>
    <div className="flex justify-center items-center">
        <img src={spinner} alt="" />
    </div>
    </>
  )
}

export default Loader