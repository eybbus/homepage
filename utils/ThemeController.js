import React, { useContext } from 'react'
import { ThemeProvider } from "styled-components";
import { ThemeContext } from './ThemeProvider'
import { lightTheme, darkTheme, GlobalStyles } from '../styles/Theme.config'

const ThemeController = ({ children }) => {
	const { theme } = useContext(ThemeContext)
	return (
		<ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
			<GlobalStyles />
			{children}
		</ThemeProvider>
	)
}

export default ThemeController