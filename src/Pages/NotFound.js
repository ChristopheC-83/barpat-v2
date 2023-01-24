import React from 'react'
import { NavLink } from 'react-router-dom'
import gif404 from "../images/NoFound/gif404.gif"

export default function NotFound() {
  return (
    <div className='notFoundContainer'>
      <h2>La fameuse erreur 404 !!! on y est !!!</h2>
      <div className="content">
        <h3>
          Toi .... tu as voulu taper trop vite !!!!
        </h3>
        <img src={gif404} 
        alt="un chat tape sur un clavier d'ordinateur" />
   
        
        <NavLink to="/">
        <h3>On retourne à l'accueil ? </h3>
          <h3>C'est par ici !</h3></NavLink>

      </div>
     
    </div>
  )
}
