import React from 'react'
import Nav from '../component/Navbar'
import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";

export default function Parcours() {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("parcours");
  return (
    <div className="container">
      <div
        className="halo"
        style={{
          background: `${color}`,
          boxShadow: `0 0 80px 100px ${color}`,
        }}
      ></div>
      <Nav color={color}/>
    <div className='pageContainer parcoursContainer'>Parcours</div></div>
  )
}
