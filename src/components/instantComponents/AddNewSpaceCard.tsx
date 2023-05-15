import React from 'react'
import { Link } from 'react-router-dom'
import { useIntl } from 'react-intl';

export default function AddNewSpaceCard() {
  const intl = useIntl();

  return (
    <div className="spacing px-10 rounded-lg items-center py-sm-0 py-8  ">
    <div className="img flex-col justify-center items-center ">
      <img
        src="/media/icons/cardIcons/space.svg"
        className="h-20 w-20 m-auto"
        alt=''
      />
      <div className='my-4 text-sm font-medium text-gray flex justify-center'>{intl.formatMessage({ id: 'NewSpace.Heading' })}
</div>
      <div className=' text-4xl font-bold text-black pb-12 flex justify-center'>{intl.formatMessage({ id: 'NewSpace.TotalSpaces' })}</div>
      <Link to='/my-spaces' className='font-bold flex justify-center   text-base bg-[#0064FA1A] text-primary py-4 w-full !border !border-solid border-[#0064FA] rounded-xl mb-4'>{intl.formatMessage({ id: 'NewSpace.ViewAll' })}</Link>
      <button className='font-bold text-base text-white bg-[#0064FA] py-4 w-full !border !border-solid border-[#0064FA] rounded-xl flex justify-center items-center'> <div className="text-3xl font-light mb-1 mr-2 leading-3">+</div> {intl.formatMessage({ id: 'NewSpace.AddNew' })}</button>
    </div>
  </div>  )
}
