import './navbar.css'
import {
  Container,
} from "@material-ui/core";
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import { Link, useLocation } from "react-router-dom";
const Navbar = (props: any) => {
  const location = useLocation();
  return (
    <>
      <AppBar className="navbarMainContainer">
        <Container maxWidth="xl" style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly" }}>
          <Typography>
            <Link to="/" className={location?.pathname === '/' ? "headerbtnActive" : "mainHeaderContainer"}>HOME </Link>
          </Typography>
          <Typography>
            <Link to="/work" className={location?.pathname === '/work' ? "headerbtnActive" : "mainHeaderContainer"}>WORK</Link>
          </Typography>
          <Typography>
            <Link to="/about" className={location?.pathname === '/about' ? "headerbtnActive" : "mainHeaderContainer"}>ABOUT </Link>
          </Typography>
          <Typography>
            <Link to="/contact" className={location?.pathname === '/contact' ? "headerbtnActive" : "mainHeaderContainer"}>CONTACT US</Link>
          </Typography>
        </Container>
      </AppBar>
    </>
  );
};
export default Navbar;
