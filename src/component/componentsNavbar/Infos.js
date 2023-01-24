import {useRef, useEffect} from "react";
import { gsap } from "gsap";
import photoProfil from "../../images/navbar/photoCV.png";

export default function Infos({color}) {

 const photo = useRef()

const animated = sessionStorage.getItem('animated');
console.log(animated)

 useEffect(() => {
  if(!animated){
    gsap.from(photo.current, {
      opacity: 0,
      y:-250,
      duration: 1.5,
    })
    sessionStorage.setItem('animated', true);
  }
  }, [animated]);
  console.log(animated)

  return (
    <div className="infoPerso">
      <img
      ref={photo}
        src={photoProfil}
        alt="christophe"
        style={{ border: `7px solid ${color}` }}
      />

      <h2 style={{borderBottom:`2px solid ${color}`}}>Christophe</h2>
      <h2 style={{borderBottom:`2px solid ${color}`}}>CHIAPPETTA</h2>
    </div>
  );
}
