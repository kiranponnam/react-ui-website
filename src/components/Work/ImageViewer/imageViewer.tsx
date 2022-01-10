import {
  Box,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  IconButton,
} from "@material-ui/core";
import { Close } from "@material-ui/icons";
const imageViewer = (props: any) => {
  return (
    <div>
      <Dialog
        open={props?.isImageViewerOpen}
        onClose={() => props?.setImageViewerOpen(false)}
        aria-labelledby="sideEffects"
        // maxWidth={"xl"}
        fullWidth={true}
      >
        <>
          <DialogTitle id="confirm-dialog" style={{ padding: "4px 18px" }}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <b>T M PHOTOGRAPHY</b>
              <IconButton
                aria-label="close"
                onClick={() => props?.setImageViewerOpen(false)}
              >
                <Close />
              </IconButton>
            </Box>
          </DialogTitle>
          <DialogContent>
            <img
              src={props?.imageViewerURL}
              alt="img"
              style={{ width: "100%" }}
            />
          </DialogContent>
        </>
      </Dialog>
    </div>
  );
};
export default imageViewer;
