import React from 'react'
import Sidebar from '../utils/main/Sidebar'
import SideBarWokout from '../utils/fitness/SideBarWokout'

function WorkoutPage() {
  return (
    <section className='workout-page'>
        <Sidebar color="slate-950"/>
        <SideBarWokout />
    </section>
  )
}

export default WorkoutPage