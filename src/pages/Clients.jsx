import React from 'react'
import { ClientHero, ClientList } from '../components'

const Clients = () => {
  return (
    <div className='bg-flashWhite'>
    <div >
      <ClientHero/>
      <div className="h-auto">
        <ClientList/>
      </div>
    </div>
    </div>
  )
}

export default Clients