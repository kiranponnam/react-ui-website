import ImageViewer from "./ImageViewer/imageViewer";
import React from "react";
import './workcollection.css'
import { useState, useEffect } from "react";
const WorkCollection = () => {
  const images = [
    "/assests/work/09.jpg",
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
  const [isImageViewerOpen, setImageViewerOpen] = useState<boolean>(false);
  const [imageViewerURL, setImageViewerURL] = useState<any>("");
  const imageHandler = (data: any) => {
    setImageViewerOpen(true);
    setImageViewerURL(data);
  };
  return (
    <div style={{ marginTop: "65px" }}>
      {images?.map((each, index) => (
        <div
          key={index}
          className="mainWorkContainer"
        >
          <img
            className="workImageContainer"
            src={each}
            loading="lazy"
            onClick={() => imageHandler(each)}
          />
        </div>
      ))}
      {isImageViewerOpen ? (
        <ImageViewer
          setImageViewerOpen={setImageViewerOpen}
          isImageViewerOpen={isImageViewerOpen}
          imageViewerURL={imageViewerURL}
        />
      ) : (
        ''
      )}
    </div>
  );
};

export default WorkCollection;
