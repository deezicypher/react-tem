import React from 'react'
import {clients} from '../constants'
import styles from '../style'


const {flexCenter} = styles;

const Clients = () => {
  return (
    <section className={`${flexCenter} my-4`}>
      <div className={`${flexCenter} flex-wrap  w-full`}>
        {clients.map(client => (
          <div key={client.id} className={`${flexCenter} flex-1 sm:mx-0 mx-2  sm:w-[192px] w-[100px] `}>
            <img src={client.logo} alt="" className="sm:w-[192px] w-[100px] object-contain"/>
            </div>
        ))}
      </div>
    </section>
  )
}

export default Clients