import styled, { keyframes } from 'styled-components'

const rotate = keyframes`
from {
	transform: rotate(0deg);
}
to {
	transform: rotate(360deg);
}
`

export const Container = styled.div`
height: 132px;
width: 250px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center
`

export const Image = styled.img`
width: 2405px;
animation: ${rotate} 15s linear infinite;
`

export const Text = styled.p`
font-size: 18px;
color: white;
`

export const TextArea = styled.textarea`
height: 50vh;
color: 'white';
font-size: 10px;
font-weigth: 'bold';
`

export const LanguageTextArea = styled.div`
display: flex;
flex: 1;
width: 100%;
`