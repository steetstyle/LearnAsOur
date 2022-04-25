import { LanguageContextProvider } from '@contexts';
import { MainScreen, Translator } from '@screens';
import {
	BrowserRouter,
	Routes,
	Route
} from "react-router-dom";

import '@styles/App.css'

export function App() {
	return (
		<>
			<LanguageContextProvider>
				<MainScreen>
					<Translator />
				</MainScreen>
			</LanguageContextProvider>
		</>
	)
}
