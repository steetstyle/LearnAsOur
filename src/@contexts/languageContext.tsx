import React, { createContext, useCallback, useEffect, useState } from 'react'
import { RussianAdjective, RussianAdjectivesHeader, RussianNoun, RussianNounsHeader, RussianOther, RussianOthersHeader, RussianVerb, RussianVerbsHeader } from '../@types/languages/russian'
import { readLanguageCsvFile } from '../@helpers/readCsvFile';

export interface RussianLanguage {
	adjectives: RussianAdjective[];
	nouns: RussianNoun[];
	others: RussianOther[];
	verbs: RussianVerb[];
}

export interface AdjectiveSuggestion {
	type: 'adjective';
	adjective: RussianAdjective;
}

export interface NounSuggestion {
	type: 'noun';
	noun: RussianNoun;
}

export interface OtherSuggestion {
	type: 'other';
	other: RussianOther;
}

export interface VerbSuggestion {
	type: 'verb';
	verb: RussianVerb;
}

export type LanguageSuggestion = AdjectiveSuggestion | NounSuggestion | OtherSuggestion | VerbSuggestion | null

interface LanguageProps {
	russian: RussianLanguage;

	getSuggesstion: (languageString: string) => LanguageSuggestion;
	getRandomLanguageSuggestion: () => LanguageSuggestion;
}

export const LanguageContext = createContext<LanguageProps>({} as LanguageProps)

export const LanguageContextProvider = ({ children }: { children: React.ReactNode }) => {
	//
	// Russian
	//

	const [russianAdjectives, setRussianAdjectives] = useState<RussianAdjective[]>([])
	const [russianNouns, setRussianNouns] = useState<RussianNoun[]>([])
	const [russianOthers, setRussianOthers] = useState<RussianOther[]>([])
	const [russianVerbs, setRussianVerbs] = useState<RussianVerb[]>([])

	const russian = {
		adjectives: russianAdjectives,
		nouns: russianNouns,
		others: russianOthers,
		verbs: russianVerbs
	}

	//
	// Load Language CSV Files
	//

	useEffect(() => {
		// Load Russian Adjectives
		readLanguageCsvFile<RussianAdjective>('russian/adjectives', RussianAdjectivesHeader, (adjectives) => {
			window.MainAPI.sendMessage('Russian Adjectives CSV Files LOADED')
			setRussianAdjectives(adjectives)
		})

		// Load Russian Nouns
		readLanguageCsvFile<RussianNoun>('russian/nouns', RussianNounsHeader, (nouns) => {
			window.MainAPI.sendMessage('Russian Nouns CSV Files LOADED')
			setRussianNouns(nouns)
		})

		// Load Russian Others
		readLanguageCsvFile<RussianOther>('russian/others', RussianOthersHeader, (others) => {
			window.MainAPI.sendMessage('Russian Others CSV Files LOADED')
			setRussianOthers(others)
		})

		// Load Russian Verbs
		readLanguageCsvFile<RussianVerb>('russian/verbs', RussianVerbsHeader, (others) => {
			window.MainAPI.sendMessage('Russian Verbs CSV Files LOADED')
			setRussianVerbs(others)
		})
	}, [])


	//
	// Get Suggesstion
	//

	function getSuggesstion(languageString: string): LanguageSuggestion {
		languageString = languageString.toLowerCase()

		if (languageString.length > 2) {
			// Find a word in adjectives, nouns, verbs
			const hasInAdjectives = russian.adjectives?.find((adjective) => adjective.bare.toLowerCase() === languageString)
			if (hasInAdjectives) return {
				type: 'adjective',
				adjective: hasInAdjectives
			}

			const hasInNouns = russian.nouns?.find((nouns) => nouns.bare.toLocaleLowerCase() === languageString)
			if (hasInNouns) return {
				type: 'noun',
				noun: hasInNouns
			}

			const hasInVerbs = russian.verbs?.find((verbs) => verbs.bare.toLowerCase() === languageString)
			if (hasInVerbs) return {
				type: 'verb',
				verb: hasInVerbs
			}
		}

		const hasInOther = russian.others?.find((other) => other.bare.toLowerCase() === languageString)
		if (hasInOther) return {
			type: 'other',
			other: hasInOther
		}

		return null
	}

	//
	// Get Random Language Suggestion
	//

	const getRandomLanguageSuggestion = useCallback(() => {
		const randomSuggestionSelectIndex = Math.floor(Math.random() * 4)

		if (randomSuggestionSelectIndex === 0) {
			const randomIndex = Math.floor(Math.random() * russian.adjectives.length) - 1
			return {
				type: 'adjective',
				adjective: russianAdjectives[randomIndex]
			}
		} else if (randomSuggestionSelectIndex === 1) {
			const randomIndex = Math.floor(Math.random() * russian.nouns.length) - 1
			return {
				type: 'noun',
				noun: russianNouns[randomIndex]
			}
		} else if (randomSuggestionSelectIndex === 2) {
			const randomIndex = Math.floor(Math.random() * russian.others.length) - 1
			return {
				type: 'other',
				other: russianOthers[randomIndex]
			}
		} else if (randomSuggestionSelectIndex === 3){
			const randomIndex = Math.floor(Math.random() * russian.verbs.length) - 1
			return {
				type: 'verb',
				verb: russianVerbs[randomIndex]
			}
		}

		return null
	}, [ russianAdjectives, russianNouns, russianOthers, russianVerbs ])

	return <LanguageContext.Provider value={{
		russian,

		getSuggesstion,
		getRandomLanguageSuggestion
	} as LanguageProps}>
		{children}
	</LanguageContext.Provider>
}