import React from 'react'
import { ClientHero, ClientList } from '../components'
import TalentHero from '../components/TalentHero'
import { TalentList } from '../components/TalentList'
import { CardDefault } from '../components/Card'

const Talent = () => {
  return (
    <div className='bg-flashWhite'>
    <div >
      <TalentHero/>
      <div className="h-auto">
      <TalentList/>
      </div>
    </div>
    </div>
  )
}

export default Talent