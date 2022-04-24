import styled from 'styled-components'
import WalkTheMoon from '../../assets/fonts/walk_the_moon/walkthemoon.ttf'
import WalkTheMoonGrad from '../../assets/fonts/walk_the_moon/walkthemoongrad.ttf'
export const AppStyle = styled.div`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: Walk The Moon, Arial, Helvetica, sans-serif;
}

@font-face {
	font-family: 'Walk The Moon';
	src: local('Walk The Moon'), local('Walk The Moon'),
	url(${WalkTheMoonGrad}) format('ttf2'),
	url(${WalkTheMoon}) format('ttf');
	font-weight: 500;
	font-style: normal;
}

body {
	font-size: 16px;
	color: #E1E1E6;
}
`