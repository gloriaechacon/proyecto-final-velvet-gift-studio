import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";

export const Header = () => {
  return (
    <header>
      <Link to={"/"}>
        <img 
          src="https://i.ibb.co/3ywQC3Dn/Logo-proyecto-final.png" 
          alt="Velvet Gift Studio Logo" 
          style={{ height: '60px', width: 'auto' }}
        />
      </Link>
      <Nav />
    </header>
  );
};
