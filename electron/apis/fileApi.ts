import * as fs from 'fs'
import * as readline from 'readline'
import * as path from 'path'
import { parse, Options } from 'csv-parse';

export const fileApi = {
	openCSVFile: <CsvRow> (filePath: string, delimiter = ',', columns: Options['columns'], callback: (rows: CsvRow[]) => void) => {
		const csvFilePath = path.join(__dirname, '../../../', filePath)
		const fileContent = fs.readFileSync(csvFilePath, { encoding: 'utf-8' })

		parse(fileContent, {
			delimiter,
			columns,
			relaxQuotes: true,
			relaxColumnCountLess: true
		}, (error, _resultRows: CsvRow[]) => {
			if (error) {
				// throw new Error(error.message)
			}
			callback(_resultRows)
		});
	},

	/**
	 * Open file as buffer via on context
	 */
	openFileAsBuffer: (path: string) => fs.readFileSync(path),

	/**
	 * Open file as lines via on context
	 */
	openFileAsLines: (path: string) => {
		const fileStream = fs.createReadStream(path);

		const rl = readline.createInterface({
			input: fileStream,
			crlfDelay: Infinity
		});
		// Note: we use the crlfDelay option to recognize all instances of CR LF
		// ('\r\n') in input.txt as a single line break.

		return rl
	}
}
