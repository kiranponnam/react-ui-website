import React, { FC, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
export const ScrollBottomToTop: FC<any> = ({ showBelow }) => {
  const [show, setShow] = React.useState<any>(showBelow ? false : true);
  const handScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true);
    } else {
      if (show) setShow(false);
    }
  };

  useEffect(() => {
    if (showBelow) {
      window.addEventListener("scroll", handScroll);
      return () => window.removeEventListener("scroll", handScroll);
    }
  });
  const handleClick = () => {
    window["scrollTo"]({ top: 0, behavior: "smooth" });
  };
  return (
    <React.Fragment>
      {show && (
        <IconButton
          onClick={handleClick}
          style={{
            background: "#DCDCDC",
            color: "balck",
            right: "3%",
            bottom: "2vh",
            zIndex: "2",
            position: "fixed",
          }}
        >
          <ExpandLessIcon />
        </IconButton>
      )}
    </React.Fragment>
  );
};
