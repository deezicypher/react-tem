import React from 'react';
import {stats} from '../constants';
import styles from '../style';
const {flexCenter} = styles;

const Stats = () => {
  return (
    <section className={`${flexCenter} flex-row flex-wrap sm:mb-20 mb-6 `} >
      <div className='flex sm:flex-row flex-col flex-start'>
      {stats.map(stat => (
        <div key={stat.id} className={`flex  flex-row  items-center justify-start m-3 `}>
          <h4 className='font-poppins font-semibold 
          xs:text-[30px] text-[20px] xs:leading-[53px] leading-[43px] text-white'>
            {stat.value}
          </h4>
          <p className='font-poppins font-normal xs:text-[14px] text-[9px]
          xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>
              {stat.title}
          </p>
        </div>
      ))}
      </div>
    </section>
  )
}

export default Stats