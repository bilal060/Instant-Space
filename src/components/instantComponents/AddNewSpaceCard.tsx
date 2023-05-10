import React from 'react'

export default function AddNewSpaceCard() {
  return (
    <div className="spacing px-10 rounded-lg items-center py-sm-0 py-8  ">
    <div className="img flex-col justify-center items-center ">
      <img
        src="/media/icons/cardIcons/space.svg"
        className="h-20 w-20 m-auto"
        alt=''
      />
      <div className='my-4 text-sm font-medium text-gray flex justify-center'>Total Spaces</div>
      <div className=' text-4xl font-bold text-black pb-12 flex justify-center'>205</div>
      <button className='font-bold text-base bg-[#0064FA1A] text-primary py-4 w-full !border !border-solid border-[#0064FA] rounded-xl mb-4'>View All Spaces</button>
      <button className='font-bold text-base text-white bg-[#0064FA] py-4 w-full !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center'> <div className="text-3xl font-light mb-1 mr-2 leading-3">+</div> Add New Space</button>
    </div>
  </div>  )
}
