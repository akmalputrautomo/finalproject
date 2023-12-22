import { Card, CardBody } from '@nextui-org/react'
import React from 'react'
import icon from "../../img/icon.png"
export const CardAdm = () => {
  return (
    <div className=' bg-[#F8F8F8] my-[2rem] '>
        <div className='flex justify-center items-center ml-[20rem] gap-11    '>

    <Card className='bg-[#F2A227] w-[322px] h-[108px] text-white rounded-[15px]'>
      <CardBody className='flex flex-row p-6 gap-3'>
        <div>
            <img src={icon} alt="" />
        </div>
        <div className='flex flex-col pt-1'>
            <h3 className='font-semibold'>450</h3>
            <p className='font-bold'>Active Users</p>
        </div>
      </CardBody>
    </Card>
    <Card className='bg-[#45C440] w-[322px] h-[108px] text-white rounded-[15px]'>
      <CardBody className='flex flex-row p-6 gap-3'>
        <div>
            <img src={icon} alt="" />
        </div>
        <div className='flex flex-col pt-1'>
            <h3 className='font-semibold'>25</h3>
            <p className='font-bold'>Active Class</p>
        </div>
      </CardBody>
    </Card>
    <Card className='bg-[#116E63] w-[322px] h-[108px] text-white rounded-[15px]'>
      <CardBody className='flex flex-row p-6 gap-3'>
        <div>
            <img src={icon} alt="" />
        </div>
        <div className='flex flex-col pt-1'>
            <h3 className='font-semibold'>20</h3>
            <p className='font-bold'>Premium Class</p>
        </div>
      </CardBody>
    </Card>
      </div>
    </div>
  )
}

export default CardAdm
