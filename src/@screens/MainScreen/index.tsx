import { ReactElement } from "react"

import { AppStyle } from "../../@styles/AppStyle"

export const MainScreen = ({ children }) : ReactElement => {
	return <AppStyle>
		{children}
	</AppStyle>
}