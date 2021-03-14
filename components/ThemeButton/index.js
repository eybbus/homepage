import React, { useContext } from 'react'
import { ThemeContext } from '../../utils/ThemeProvider'
const ThemeButton = () => {
	const { switchTheme, theme } = useContext(ThemeContext)
	return (
		<button onClick={() => switchTheme(theme === 'light' ? 'dark' : 'light')}>switch theme</button>
	)
}

export default ThemeButton;