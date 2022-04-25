import { LanguagePopup } from "../../@components/LanguagePopup"
import { ReactElement, useContext, useEffect, useState } from "react"

import { Container, LanguageTextArea } from "./styles"
import { LanguageContext, LanguageSuggestion } from "../../@contexts/languageContext"

export const Translator = () : ReactElement => {
	const { russian, getRandomLanguageSuggestion } = useContext(LanguageContext)
	const [ suggestion, setSuggestion ] = useState<LanguageSuggestion>(null)
	const [ suggestionTimer, setSuggestionTimer ] = useState<any>(null)

	useEffect(() => {
		window.MainAPI.setSizeOfMainWindow({ width: 250, height: 150 })

		setTimeout(() => {
			if(! (russian.adjectives.length > 0)) return
			const suggestion = getRandomLanguageSuggestion()
			setSuggestion(suggestion)
		}, 1000)

		setSuggestionTimer(setInterval(() => {
			if(! (russian.adjectives.length > 0)) return
			const suggestion = getRandomLanguageSuggestion()
			setSuggestion(suggestion)
		}, 60 * 1000))

		return () => {
			clearInterval(suggestionTimer)
		}
	}, [ russian ])

	let languageText = ''
	if(suggestion){
		if(suggestion.type === 'adjective'){
			languageText = suggestion.adjective.bare
		}else if(suggestion.type === 'noun'){
			languageText = suggestion.noun.bare
		}else if(suggestion.type === 'other'){
			languageText = suggestion.other.bare
		}else if(suggestion.type === 'verb'){
			languageText = suggestion.verb.bare
		}
	}

	return(
	<Container>
		{
			suggestion ?
			<LanguageTextArea>
				<LanguagePopup languageText={languageText}/>
			</LanguageTextArea>
			: <div style={{ color: 'white'}}>Kelimeler yükleniyor...</div>
		}
	</Container>)
}