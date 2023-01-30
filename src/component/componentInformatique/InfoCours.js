import React from 'react'

export default function InfoCours({img, name, name2, comp1, comp2, comp3, comp4}) {
  return (
    <div className='infoCours'>
        <div className="left">

      <img src={img} alt="cours udemy" />
      <h2>{name}</h2>
      <h2>{name2}</h2>
        </div>
        <div className="right">
            <h2>Compétences abordées :</h2>
            <div className="comp">
                <h3>{comp1}</h3>
                <h3>{comp2}</h3>
                <h3>{comp3}</h3>
                <h3>{comp4}</h3>
            </div>


        </div>
    </div>
  )
}
