import "./home.css";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import ImageSwapper from "../Image/image";
import EmailIcon from "@mui/icons-material/Email";
import { Button } from "@material-ui/core";
const home = (props: any) => {
  return (
    <div className="mainHomeProfileContainer">
      <div className="mainImageContainer">
        <div>
          <b className="homeTittleContainer">T M PHOTOGRAPHY</b>
          <div className="phoneNumberContainer">
            <a href="tel:+917702399797" style={{ color: "#ffff" }}>
              <LocalPhoneIcon fontSize="large" />
            </a>
            <b className="homeTittleContainer">+91 7702399797</b>
          </div>
        </div>
      </div>
      <div style={{ height: "10vh" }}></div>
      <b className="servicesTextContainer">SERVICES</b>
      <div className="mainCitiesContainer">
        <b className="serviceContainer">
          WEDDING PHOTOGRAPHY,
          <br /> PRE-POST WEDDING PHOTOGRAPHY,
          <br /> EVENT PHOTOGRAPHY,
          <br />
          CANDID PHOTOGRAPHY,
          <br /> CINEMATIC PHOTOGRAPHY,
          <br /> SIBLING PHOTOGRAPHY,
          <br /> CAKE SMASH
        </b>
      </div>
      <div className="mainCitiesContainer">
        <b className="serviceContainer" style={{ textTransform: "uppercase" }}>
          We Provide Our Services in Godhavarikhani, Karimnagar, Mancherial,
          Hyderabad Cities
        </b>
      </div>
      <Link
        to="/work"
        className="serviceContainer"
        style={{ textDecoration: "none" }}
      >
        <Button
          variant="contained"
          style={{
            backgroundColor: "#3f51b5",
            color: "#ffff",
            fontWeight: "bold",
          }}
        >
          Click here for our Work
        </Button>
      </Link>
      <ImageSwapper />
      <div className="middleServiceContainer">
        <b>
          <b className="servicesTextContainer" style={{ fontSize: "25px" }}>
            CONTACT DETAILS
          </b>
          <div className="phoneNumberContainer">
            <a href="tel:+917702399797" style={{ color: "#ffff" }}>
              <LocalPhoneIcon fontSize="large" />
            </a>
            <b className="homeTittleContainer">+91 7702399797</b>
          </div>
          <div className="phoneNumberContainer">
            <a
              href="mailto:fxsrinuponnam@gmail.com"
              style={{ color: "#ffff", marginRight: "6px" }}
            >
              <EmailIcon fontSize="large" />
            </a>
            <b className="homeTittleContainer">fxsrinuponnam@gmail.com</b>
          </div>
          <div className="phoneNumberContainer">
            <a
              href="https://wa.me/917702399797"
              style={{ color: "#ffff", marginRight: "6px" }}
            >
              <WhatsAppIcon fontSize="large" />
            </a>
            <a
              href="https://wa.me/917702399797"
              style={{
                color: "#ffff",
                textDecoration: "none",
                marginRight: "6px",
              }}
            >
              <b className="homeTittleContainer">WhatsApp</b>
            </a>
          </div>
          <div className="phoneNumberContainer">
            <a
              href="https://www.instagram.com/tmphotography_seenu/"
              style={{ color: "#ffff", marginRight: "6px" }}
            >
              <InstagramIcon fontSize="large" />
            </a>
            <a
              href="https://www.instagram.com/tmphotography_seenu/"
              style={{ color: "#ffff", textDecoration: "none" }}
            >
              <b className="homeTittleContainer">Instagram</b>
            </a>
          </div>
        </b>
      </div>
    </div>
  );
};
export default home;
