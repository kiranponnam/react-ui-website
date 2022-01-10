import { useState, useEffect } from "react";
import ImageViewer from "../Work/ImageViewer/imageViewer";

const images = [
  "/assests/slideShowImages/croppedImage2.jpg",
  "/assests/work/10.jpg",
  "/assests/work/02.jpg",
  "/assests/thanvi/than2.jpg",
  "/assests/thanvi/than3.jpg",
  "/assests/thanvi/than4.jpg",
  "/assests/thanviWall.jpeg",
];

export default function ImageSwapper() {
  const [currentIndex, setCurrentIndex] = useState<any>(0);
  const [isImageViewerOpen, setImageViewerOpen] = useState<boolean>(false);
  const [imageViewerURL, setImageViewerURL] = useState<any>("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      changeBackgroundImage();
    }, 5000);

    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const changeBackgroundImage = () => {
    let newCurrentImg = 0;
    const noOfImages = images?.length;

    if (currentIndex !== noOfImages - 1) {
      newCurrentImg = currentIndex + 1;
    }

    setCurrentIndex(newCurrentImg);
  };

  const imageHandler = (data: any) => {
    setImageViewerOpen(true);
    setImageViewerURL(data);
  };
  return (
    <div>
      <img
        style={{
          width: "100%",
          height: "255px",
          borderRadius: "15px",
          objectFit: "cover",
        }}
        src={images[currentIndex]}
        alt="img"
        onClick={() => imageHandler(images[currentIndex])}
      />
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
  );
}
