import React, { useState } from 'react'

const ThemeContext = React.createContext();

const ThemeProvider = ({ children }) => {
	const [theme, setTheme] = useState('light')

	const switchTheme = (theme) => setTheme(theme)

	return (
		<ThemeContext.Provider value={{ switchTheme, theme }}>
			{children}
		</ThemeContext.Provider>
	)
}

export { ThemeContext, ThemeProvider }