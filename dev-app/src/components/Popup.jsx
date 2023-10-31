import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import styled from 'styled-components';
import Button from './Button';
import Flex from './Flex';

const StyledPopup = styled(Popup)`
	&-overlay {
		background: rgba(0, 0, 0, 0.5);
	}
	&-content {
		width: 280px;
		background-color: #FFF;
		border: 1px black solid;
		box-shadow: 0px 20px 50px rgba(0, 0, 0, 0.4);
		padding: 1rem;
	}
	`;

export const PopupAlert = (props) => {
	const [open, setOpen] = useState(false);
	const closeModal = () => setOpen(false);
	return(
		<StyledPopup open={open} closeOnDocumentClick onClose={closeModal} position="center" {...props} nested modal>
			<Flex justify='center'>{props.children}</Flex>
		</StyledPopup>
	)
};

export const PopupConfirm = (props) => {
	return(
		<StyledPopup trigger={props.trigger} {...props} nested modal>
			{close => (
				<Flex direction='column' gap='1rem'>
					<span style={{textAlign: 'center'}}>Are you sure you want to delete{props.children}?</span>
					<Flex justify='space-between'>
						<Button onClick={props.onClick}>Yes</Button>
						<Button onClick={close}>Cancel</Button>
					</Flex>
				</Flex>
			)}
		</StyledPopup>
	)
};