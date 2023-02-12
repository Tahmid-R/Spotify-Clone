import React from 'react'
import Sidebar from './Sidebar'
import Body from './Body'
import Footbar from './Footbar'
import './Player.css'


function Player({spotify}) {
  return (
    <div className="player">

      <div className="player_body">

      <Sidebar/>

      <Body spotify={spotify}/>
    
     </div>

      <Footbar/>

    </div>
  )
}

export default Player