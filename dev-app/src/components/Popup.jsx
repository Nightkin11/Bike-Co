import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';

const StyledPopup = styled(Popup)`
    &-overlay {
        background: rgba(0, 0, 0, 0.5);
    }
    &-content {
        background-color: #FFF;
        border: 1px black solid;
        box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.4);
        padding: 1rem;
    }
    `;

const PopupAlert = (props) => {
    const [open, setOpen] = useState(false);
    const closeModal = () => setOpen(false);
    return(
        <StyledPopup open={open} closeOnDocumentClick onClose={closeModal} position="center" {...props}>
            <span>{props.children}</span>
        </StyledPopup>
    )
};

export default PopupAlert