import { useContext } from "react";
import { dataColorContext } from "../component/Context/ColorContext";
import React from 'react'
import Nav from '../component/Nav'

export default function Sport(props) {
  const { getColorByName } = useContext(dataColorContext);

  let color = getColorByName("sport");
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
        <div className='pageContainer sportContainer'>Sport</div>
        </div>
      )
    }
    
