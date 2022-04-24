import { useContext } from "react";
import { LanguageContext } from "../../@contexts/languageContext";
import { Container, Image, Text } from "./styles";

export function Greetings() {
	const { russian } = useContext(LanguageContext)
	return (
		<Container>
			<Image
				src="https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
				alt="ReactJS logo"
			/>
			<Text>{russian.verbs.length > 0 ? russian.verbs[0].accented : 'yok'}</Text>
			<Text>An Electron boilerplate including TypeScript, React, Jest and ESLint.</Text>
		</Container>
	)
}