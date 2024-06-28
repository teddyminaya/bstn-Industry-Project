import React from "react";
import "./MainSearchPopover.scss";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { red } from "@mui/material/colors";

const MainSearchPopover = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  return (
    <div>
      <p onClick={handleClick}>What is this?</p>
      <div className="popover__custom">
        <Popover
          sx={{ borderRadius: 40 }}
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        >
          <Typography sx={{ background: "#F3EDF7", p: 2, fontSize: 13 }}>
            The content of the Popover.
          </Typography>
        </Popover>
      </div>
    </div>
  );
};

export default MainSearchPopover;
