import { useContext, useEffect, useState } from 'react'
import { AdjectiveSuggestion, LanguageContext, NounSuggestion, OtherSuggestion, VerbSuggestion } from '@contexts'
import { Container, InfoContainer, WordContainer, WordBare, WordTranslated, WordStress, WordType, WordInput } from './styles'

export interface LanguagePopupProps {
	languageText: string;
}

export const LanguagePopup = ({ languageText }: LanguagePopupProps) => {
	const { getSuggesstion } = useContext(LanguageContext)
	const [ suggestionENText, setSuggestionENText ] = useState<string>('')
	const [ suggestionStress, setSuggestionStress ] = useState<string>('')
	const [ suggestionType, setSuggestionType ] = useState<(AdjectiveSuggestion | NounSuggestion | OtherSuggestion | VerbSuggestion)['type'] | null>(null)

	const [mouseEntered, setMouseEntered] = useState<boolean>(true)

	useEffect(() => {
		const suggestion = getSuggesstion(languageText)
		if(suggestion){
			if(suggestion.type === 'adjective'){
				setSuggestionENText(suggestion.adjective.translations_en)
				setSuggestionStress(suggestion.adjective.accented)
				setSuggestionType('adjective')
			}else if(suggestion.type === 'noun') {
				setSuggestionENText(suggestion.noun.translations_en)
				setSuggestionStress(suggestion.noun.accented)
				setSuggestionType('noun')
			}else if(suggestion.type === 'other'){
				setSuggestionENText(suggestion.other.translations_en)
				setSuggestionStress(suggestion.other.accented)
				setSuggestionType('other')
			}else if(suggestion.type === 'verb'){
				setSuggestionENText(suggestion.verb.translations_en)
				setSuggestionStress(suggestion.verb.accented)
				setSuggestionType('verb')
			}
		}
	}, [ languageText ])

	return (
	<Container>
		<WordContainer>
			{
				! mouseEntered && (
					<>
						<WordType>{suggestionType}</WordType>
						<WordStress>{suggestionStress}</WordStress>
						<WordBare
							onMouseEnter={(event) => setMouseEntered(true)}>
							{languageText}
						</WordBare>
					</>
				)
			}
			{
				mouseEntered && (
					<WordInput onMouseLeave={(event) => setMouseEntered(false)}>
						<input type='text' />
					</WordInput>
				)
			}
		</WordContainer>
		{
			! mouseEntered && (
				<InfoContainer>
					<WordTranslated>{suggestionENText}</WordTranslated>
				</InfoContainer>
			)
		}
	</Container>)
}