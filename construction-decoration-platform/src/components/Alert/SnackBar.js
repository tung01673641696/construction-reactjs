import * as React from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

export function SnackbarAlert({ handleOpen, message }) {
  const [open, setOpen] = React.useState(handleOpen);

  //errors close noti

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const action = (
    <React.Fragment>
      <Button color="secondary" size="small" onClick={handleClose}>
        UNDO
      </Button>
      <IconButton
        size="small"
        aria-label="close"
        color="inherit"
        onClick={handleClose}
      >
        <CloseIcon fontSize="small" />
      </IconButton>
    </React.Fragment>
  );

  return (
    <Snackbar
      open={handleOpen}
      autoHideDuration={3000}
      onClose={handleClose}
      message={message}
      action={action}
      sx={{
        marginBottom: "40px",
        marginLeft: "3px"
      }}
    />
  );
}
