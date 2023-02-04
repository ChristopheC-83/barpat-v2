import Infos from "./componentsNavbar/Infos";
import Navigation from "./componentsNavbar/Navigation";
import Signature from "./componentsNavbar/Signature";
import SocialNetwork from "./componentsNavbar/SocialNetwork";

export default function Navbar({ color, bgc }) {


  return (
    <div className="navbarContainer">
      <Infos color={color} bgc={bgc}/>
      <Navigation color={color} bgc={bgc}/>
      <SocialNetwork color={color} bgc={bgc}/>
      <Signature color={color} bgc={bgc}/>
    </div>
  );
}
