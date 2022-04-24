export type LanguageFile = 'russian/adjectives' | 'russian/nouns' | 'russian/others' | 'russian/verbs'

export function readLanguageCsvFile<CsvRow>(language: LanguageFile, header: string[], callback: (csvRows: CsvRow[]) => void) {
	const fullFilePath = `assets/languages/${language}.csv`
	return window.FileAPI.openCSVFile<CsvRow>(fullFilePath, '\t', header, callback)
}
