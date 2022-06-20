import ImageViewer from "./ImageViewer/imageViewer";
import React from "react";
import "./workcollection.css";
import { useState } from "react";
import {
  Chip
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    // width: 1000,
    // height: 1000,
  },
}));
const WorkCollection = () => {
  const classes = useStyles();
  const images = [
    "/assests/LatestMarriagePics/marriagePic1.jpg",
    "/assests/LatestMarriagePics/marriagePic2.jpg",
    "/assests/LatestMarriagePics/marriagePic3.jpg",
    "/assests/LatestMarriagePics/marriagePic5.jpg",
    "/assests/LatestMarriagePics/marriagePic6.jpg",
    "/assests/LatestMarriagePics/marriagePic7.jpg",
    "/assests/LatestMarriagePics/marriagePic8.jpg",
    "/assests/LatestMarriagePics/marriagePic9.jpg",
    "/assests/ModelCollection/modelImg1.jpeg",
    "/assests/ModelCollection/modelImg2.jpeg",
    "/assests/ModelCollection/modelImg3.jpeg",
    "/assests/ModelCollection/modelImg4.jpeg",
    "/assests/ModelCollection/modelImg5.jpeg",
    "/assests/HoliCollection/HoliImg1.jpeg",
    "/assests/HoliCollection/HoliImg2.jpeg",
    "/assests/HoliCollection/HoliImg3.jpeg",
    "/assests/HoliCollection/HoliImg4.jpeg",
    "/assests/work/10.jpg",
    "/assests/thanviWall.jpeg",
    "/assests/work/15.jpg",
    "/assests/thanvi/than2.jpg",
    "/assests/thanvi/than3.jpg",
    "/assests/thanvi/than4.jpg",
    "/assests/wedding/wedding01.jpg",
    "/assests/wedding/wedding3.jpg",
    "/assests/wedding/wedding4.jpg",
    "/assests/wedding/wedding6.jpg",
    "/assests/wedding/wedding7.jpg",
    "/assests/work/01.jpg",
    "/assests/work/02.jpg",
    "/assests/work/03.jpg",
    "/assests/work/04.jpg",
    "/assests/work/05.jpg",
    "/assests/work/06.jpg",
    "/assests/work/07.jpg",
    "/assests/work/08.jpg",
    "/assests/work/11.jpg",
    "/assests/work/12.jpg",
    "/assests/work/13.jpg",
    "/assests/work/14.jpg",
    "/assests/work/16.jpg",
    "/assests/work/17.jpg",
    "/assests/work/18.jpg",
    "/assests/work/19.jpg",
    "/assests/work/20.jpg",
    "/assests/work/21.jpeg",
    "/assests/work/22.jpeg",
    "/assests/work/23.jpeg",
  ];
  const modelImages = [
    "/assests/ModelCollection/modelImg1.jpeg",
    "/assests/ModelCollection/modelImg2.jpeg",
    "/assests/ModelCollection/modelImg3.jpeg",
    "/assests/ModelCollection/modelImg4.jpeg",
    "/assests/ModelCollection/modelImg5.jpeg",
  ];
  const holiImages = [
    "/assests/HoliCollection/HoliImg1.jpeg",
    "/assests/HoliCollection/HoliImg2.jpeg",
    "/assests/HoliCollection/HoliImg3.jpeg",
    "/assests/HoliCollection/HoliImg4.jpeg",
  ];
  const LatestMarriagePics = [
    "/assests/LatestMarriagePics/marriagePic1.jpg",
    "/assests/LatestMarriagePics/marriagePic2.jpg",
    "/assests/LatestMarriagePics/marriagePic3.jpg",
    "/assests/LatestMarriagePics/marriagePic4.jpg",
    "/assests/LatestMarriagePics/marriagePic5.jpg",
    "/assests/LatestMarriagePics/marriagePic6.jpg",
    "/assests/LatestMarriagePics/marriagePic7.jpg",
    "/assests/LatestMarriagePics/marriagePic8.jpg",
    "/assests/LatestMarriagePics/marriagePic9.jpg",
  ];
  const [isImageViewerOpen, setImageViewerOpen] = useState<boolean>(false);
  const [imageViewerURL, setImageViewerURL] = useState<any>("");
  const imageHandler = (data: any) => {
    setImageViewerOpen(true);
    setImageViewerURL(data);
  };
  const userScreenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;
  const desktopMode = () => {
    return (
      <div className={classes.root}>
        <GridList cellHeight={400} spacing={25} className={classes.gridList}>
          {images.map((each: any) => (
            <GridListTile key={each}>
              <img
                src={each}
                loading="lazy"
                onClick={() => imageHandler(each)}
              />
            </GridListTile>
          ))}
        </GridList>
      </div>
    );
  };
  var dynamicColors = function () {
    var r = Math.floor(Math.random() * 255);
    var g = Math.floor(Math.random() * 255);
    var b = Math.floor(Math.random() * 255);
    return "rgb(" + r + "," + g + "," + b + ")";
  };
  const arrayOfNames = ["Wedding", "Model", "Birthday", "Candid"];
  return (
    <React.Fragment>
      <div style={{ marginTop: "65px" }}>
        {arrayOfNames.map((name: any) => {
          return (
            <Chip
              variant="outlined"
              label={name}
              style={{
                margin: "5px",
                backgroundColor: dynamicColors(),
                color: "#ffff",
              }}
            ></Chip>
          );
        })}
        {userScreenWidth < 650
          ? images?.map((each, index) => (
              <div key={index} className="mainWorkContainer">
                <img
                  className="workImageContainer"
                  src={each}
                  loading="lazy"
                  onClick={() => imageHandler(each)}
                />
              </div>
            ))
          : desktopMode()}
        {isImageViewerOpen ? (
          <ImageViewer
            setImageViewerOpen={setImageViewerOpen}
            isImageViewerOpen={isImageViewerOpen}
            imageViewerURL={imageViewerURL}
          />
        ) : (
          ""
        )}
      </div>
    </React.Fragment>
  );
};

export default WorkCollection;
