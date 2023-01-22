import Infos from "./componentsNavbar/Infos";
import Navigation from "./componentsNavbar/Navigation";
import Signature from "./componentsNavbar/Signature";
import SocialNetwork from "./componentsNavbar/SocialNetwork";

export default function Navbar({ color }) {


  return (
    <div className="navbarContainer">
      <Infos color={color} />
      <Navigation color={color}/>
      <SocialNetwork color={color}/>
      <Signature color={color}/>
    </div>
  );
}
