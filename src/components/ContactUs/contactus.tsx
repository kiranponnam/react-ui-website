import "./contactus.css";
import "../AboutUs/about.css";
import "../../App.css";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import LocalPhoneIcon from "@material-ui/icons/LocalPhone";
import { Grid } from "@material-ui/core";
import EmailIcon from "@mui/icons-material/Email";
const contactus = (props: any) => {
  return (
    <>
      <div className="middleAPPContainer">
        <Grid>
          <p className="contactustitle">CONTACT US</p>
          <Grid item sm={12} md={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img src="/assests/logo.jpg" className="profileContainer" />
                <Typography variant="h5" component="div" marginTop="12px">
                  TM Photography
                </Typography>
                <Typography
                  sx={{ mb: 1.5 }}
                  color="text.secondary"
                  marginTop="10px"
                >
                  <a
                    href="tel:+917702399797"
                    style={{ color: "rgba(0, 0, 0, 0.6)", marginRight: "10px" }}
                  >
                    <LocalPhoneIcon fontSize="large" />
                  </a>
                  <a
                    href="https://wa.me/917702399797"
                    style={{ color: "rgba(0, 0, 0, 0.6)", marginRight: "10px" }}
                  >
                    <WhatsAppIcon fontSize="large" />
                  </a>
                  <a
                    href="https://www.instagram.com/tmphotography_seenu/"
                    style={{ color: "rgba(0, 0, 0, 0.6)", marginRight: "10px" }}
                  >
                    <InstagramIcon fontSize="large" />
                  </a>
                  <a
                    href="mailto:fxsrinuponnam@gmail.com"
                    style={{ color: "rgba(0, 0, 0, 0.6)", marginRight: "10px" }}
                  >
                    <EmailIcon fontSize="large" />
                  </a>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <br />
          <Grid item sm={12} md={12}>
            <Card sx={{ minWidth: 275 }}>
              <CardContent
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h5" component="div">
                  LOCATION
                </Typography>
                <br />
                <Typography variant="h5" component="div" fontSize="17px">
                  GODHAVARIKHANI
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </>
  );
};
export default contactus;
