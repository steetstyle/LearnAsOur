/* eslint-disable no-undef */
import { ReactElement } from 'react'
import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = () => createGlobalStyle`
* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

body {
	font-family: Arial, Helvetica, sans-serif;
	background-color:
	font-size: 16px;
	color: #E1E1E6;
}
` as unknown as ReactElement
