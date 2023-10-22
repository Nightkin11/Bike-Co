import React from "react";
import styled from "styled-components";
import { logout } from '../store/userSlice'
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";


const Wrapper = styled.div`
	position: absolute;
	top: 48px;
	left: -90px;
	z-index: 2;
@media (max-width: 768px) {
	left: -116px;
}
`

const StyledDropdown = styled.div`
	position: relative;
	width: 142px;
	background-color: #FFF;
	display: flex;
	flex-direction: column;
	border: 1px gray solid;
	box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.2);
/* :before {
	content: '';
	border: 12px solid transparent;
	border-bottom: 12px solid #FFF;
	position: absolute;
	left: 70%;
	margin-left: 4px;
	top: -24px;
	width: 0;
} */
`

const StyledLi = styled.li`
	padding: 8px;
	list-style-type: none;
	cursor: pointer;
:hover {
	background-color: #9ca1a8;
}
:first-child{
	padding-bottom: 4px;
}
:last-child {
	padding-top: 4px;
}
@media (max-width: 768px) {
	font-size: 32px;
}
`

const Dropdown = () => {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	return (
		<Wrapper>
			<StyledDropdown>
				<StyledLi onClick={() => navigate('/profile')}>Profile</StyledLi>
				<StyledLi onClick={() => dispatch(logout())}>Logout</StyledLi>
			</StyledDropdown>
		</Wrapper>
	)
}

export default Dropdown;