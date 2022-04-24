import { useContext, useEffect, useState } from 'react'
import { LanguageContext } from '../../@contexts/languageContext'
import { Container, InfoContainer, WordContainer, WordBare, WordTranslated, WordStress } from './styles'

export interface LanguagePopupProps {
	languageText: string;
}

export const LanguagePopup = ({ languageText }: LanguagePopupProps) => {
	const { getSuggesstion } = useContext(LanguageContext)
	const [ suggestionENText, setSuggestionENText ] = useState<string>('')
	const [ suggestionStress, setSuggestionStress ] = useState<string>('')

	useEffect(() => {
		const suggestion = getSuggesstion(languageText)
		if(suggestion){
			if(suggestion.type === 'adjective'){
				setSuggestionENText(suggestion.adjective.translations_en)
				setSuggestionStress(suggestion.adjective.accented)
			}else if(suggestion.type === 'noun') {
				setSuggestionENText(suggestion.noun.translations_en)
				setSuggestionStress(suggestion.noun.accented)
			}else if(suggestion.type === 'other'){
				setSuggestionENText(suggestion.other.translations_en)
				setSuggestionStress(suggestion.other.accented)
			}else if(suggestion.type === 'verb'){
				setSuggestionENText(suggestion.verb.translations_en)
				setSuggestionStress(suggestion.verb.accented)
			}
		}
	}, [ languageText ])

	return (
	<Container>
		<WordContainer>
			<WordStress>{suggestionStress}</WordStress>
			<WordBare onMouseEnter={(event) => {}}
			onMouseLeave={(event) => {}}>{languageText}</WordBare>
		</WordContainer>
		<InfoContainer>
			<WordTranslated>{suggestionENText}</WordTranslated>
		</InfoContainer>
	</Container>)
}