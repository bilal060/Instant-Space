import clsx from 'clsx'
import React from 'react'
import { toAbsoluteUrl } from '../../_metronic/helpers'

type Props = {
  className: string
  color: string
  image: string
  title: string
  btndata: string
  progress: string
  textdata:string
  className1?: string
}

const PaymentHistoryCard: React.FC<Props> = ({className, color, image, title, btndata,textdata, progress, className1}) => {
  return (
    <div className={`card ${className}`}>
      {/* begin::Body */}
      <div className='card-body !px-3 !pt-4 !pb-[11px]'>
        {/* begin::Heading */}
        <div className='d-flex flex-stack'>
          {/* begin:Info */}
          <div className='d-flex align-items-center'>
            {/* begin:Image */}
            <div className='symbol symbol-60px me-5'>
              <span style={{
                'borderRadius' : '100%'
              }} className={clsx(`symbol-label`, `!bg-[${color}]`)}>
                <img src={toAbsoluteUrl(image)} className='h-50 align-self-center' alt='' />
              </span>
            </div>
            <div className='d-flex flex-column flex-grow-1 my-lg-0 my-2 pr-3'>
              <a href='#' className='text-dark fw-bold text-hover-primary fs-5'>
                {title}
              </a>
              <div className='flex justify-around items-center pt-[11px]'>  
              <button className={`!m-0 !px-2 !py-[0.5px] !h-[20px] btn !text-xs font-bold btn-sm btn-light !rounded ${className1}`}>{btndata}</button>
              <button className='!m-0 !p-0 !h-[20px] btn btn-sm !text-indigo-600 !text-sm font-bold'>{textdata}</button>
              </div>
            </div>
          </div>
          <div className='ms-1 mb-[25px]'>
            <img src="/media/icons/duotune/arrows/more-vertical.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export {PaymentHistoryCard}