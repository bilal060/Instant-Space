/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'
import "./components/cmpnt.css"
const AuthLayout = () => {
  useEffect(() => {
    const root = document.getElementById('root')
    if (root) {
      root.style.height = '100%'
    }
    return () => {
      if (root) {
        root.style.height = 'auto'
      }
    }
  }, [])

  return (
    
    <div className='row h-100'>

      <div className='flex flex-column col-xxl-5 col-xl-6 p-10  order-xl-0 order-1'>
        <div className='d-flex flex-column flex-lg-row-fluid'>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
     
     
      <div className='col-xxl-7 col-xl-6 pb-8  '>
       <div className='linearGradient lg:!mt-8 lg:!mr-0 order-xl-1 order-0 h-100 bgi-size-cover bgi-position-center rounded-l-3xl rounded32 relative'>
       
        <div className='d-flex flex-column py-18 px-20 w-100 absolute bottom-0'>
          <h1 className='text-white text-5xl fw-bolder '>
            Lorem ipsum dolor sit amet
          </h1>
          
          <div className=' text-lg text-[#A3A3A3] pt-8'>
          Lorem ipsum dolor sit amet consectetur. Non sit volutpat egestas tempus
          molestie posuere nullam cursus. Egestas venenatis fusce turpis aenean sem 
          sit bibendum. Libero sit tincidunt dui phasellus adipiscing fermentum molestie urna. 
          Non consectetur sapien eleifend leo lorem neque sed eget. Enim pellentesque ultrices 
          nisl sit odio nam nullam cursus. Neque morbi dui purus mattis.
          </div>
          {/* end::Text */}
        </div>
        </div>
      </div>
    

    </div>
  )
}

export {AuthLayout}
