import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signature({color, bgc}) {
  return (
    
    <div className="signature" style={{background:`${bgc}`}}>
      <NavLink to="/mentions">
      <h2 style={{color:`${color}`}}>Christophe CHIAPPETTA ©️ 2023</h2>
      </NavLink>
    </div>
  )
}
