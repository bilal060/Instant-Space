/* eslint-disable jsx-a11y/anchor-is-valid */
import {useEffect} from 'react'
import React from 'react'
import {Outlet, Link} from 'react-router-dom'
import {toAbsoluteUrl} from '../../../_metronic/helpers'

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
    
    <div className='d-flex flex-column flex-lg-row flex-column-fluid h-100'>

      <div className='d-flex flex-column flex-lg-row-fluid w-lg-75 p-10 order-2 order-lg-1'>
        <div className='d-flex flex-center flex-column flex-lg-row-fluid'>
          <div className='p-10'>
            <Outlet />
          </div>
        </div>
      </div>
     
     
      <div className='d-flex flex-lg-row-fluid w-lg-100 bgi-size-cover bgi-position-center order-1 rounded'
        style={{backgroundImage: `url(${toAbsoluteUrl('/media/misc/Rectangle.png')})`}}
      >
        <div className='d-flex flex-column flex-center py-15 px-5 px-md-15 w-100'>


          <h1 className='text-white fs-2qx fw-bolder text-center mt-96'>
            Lorem ipsum dolor sit amet
          </h1>
          
          <div className='text-white fs-base text-center'>
          Lorem ipsum dolor sit amet consectetur. Non sit volutpat egestas tempus
          molestie posuere nullam cursus. Egestas venenatis fusce turpis aenean sem 
          sit bibendum. Libero sit tincidunt dui phasellus adipiscing fermentum molestie urna. 
          Non consectetur sapien eleifend leo lorem neque sed eget. Enim pellentesque ultrices 
          nisl sit odio nam nullam cursus. Neque morbi dui purus mattis.
          </div>
          {/* end::Text */}
        </div>
        {/* end::Content */}
      </div>
    

    </div>
  )
}

export {AuthLayout}
