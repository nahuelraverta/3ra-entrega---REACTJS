import CategoryButton from "../CategoryButton/CategoryButton";
import logo from '../../../assets/img/logo.png';
import '../Navbar/NavBar.scss'
import CartWidget from "../CartWidget/CartWidget";
import {Link} from "react-router-dom"


function NavBar() {
    const manga = "MANGA"
    const dc = "DC COMICS"
    const marvel = "MARVEL COMICS"

  return (
    <div className="NavBar">

      <Link to={`/`}><img src={logo} alt='logo COMIX' className="ImgLogo"/></Link>

      <div className="NavMenu">
        <Link to={`category/manga`}><CategoryButton text={manga}/></Link>
        <Link to={`category/dc`}><CategoryButton text={dc}/></Link>
        <Link to={`category/marvel`}><CategoryButton text={marvel}/></Link>
      </div>

      <CartWidget/>

    </div>
  );
}

export default NavBar;