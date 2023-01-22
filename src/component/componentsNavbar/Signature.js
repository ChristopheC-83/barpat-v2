import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Signature({color}) {
  return (
    
    <div className="signature">
      <NavLink to="/mentions">
      <h2 style={{color:`${color}`}}>Christophe CHIAPPETTA ©️ 2023</h2>
      </NavLink>
    </div>
  )
}
