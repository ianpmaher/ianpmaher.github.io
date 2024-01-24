import React, { useState } from "react";
import Popover from "@mui/material/Popover";
import Button from "../Button/Button";
import EmailSharpIcon from "@mui/icons-material/EmailSharp";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";

const PopoverElem = (props) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const [copySuccess, setCopySuccess] = useState(false);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? "popover" : undefined;

    const handleCopy = () => {
        navigator.clipboard.writeText("ianpmaher@gmail.com");
        setCopySuccess(true);
        setTimeout(() => {
            setCopySuccess(false);
        }, 2000); // hide the message after 2 seconds
    };

    return (
        <div className="" aria-haspopup="true">
            <Button aria-describedby={id} variant="contained" onClick={handleClick}>
                <EmailSharpIcon />
            </Button>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "left",
                }}
            >
                <a href="mailto:ianpmaher@gmail.com" aria-label="send email" className="">
                    <Button>📩</Button>
                </a>
                <Button onClick={handleCopy}>
                    <ContentCopyIcon />
                </Button>
                {copySuccess && <div className="text-green-500">Copied!</div>}
            </Popover>
        </div>
    );
};

export default PopoverElem;
