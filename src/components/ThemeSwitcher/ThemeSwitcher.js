import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';

const Button = styled.button`
    background-color: ${props => props.theme.theme.bgPrimary};
    width: 30px;
	height: 30px;
	position: fixed;
    right: 10px;
    color: ${props => props.theme.theme.txtPrimary};
    bottom: 10px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.theme.bgSecondary};
    transition: all .3s;
`;

const ThemeSwitcher = ({ toggleTheme }) => (
    <Button onClick={toggleTheme}>
		<FontAwesomeIcon icon={faLightbulb} />
	</Button>
);

export default ThemeSwitcher;