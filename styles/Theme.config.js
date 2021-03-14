import { createGlobalStyle } from 'styled-components'

export const lightTheme = {
	header: {
		bg: '#2D4867',
		text: '#eeeeee',
	},
	body: '#EDEBD9',
	background: "#363537",
	text: '#2D4867',
	blog: {
		header: "#B55276",
	},
	// buttons
	btn: {
		primary: '#b55276',
		info: '#2d4867',
		success: '#6c935b',
		warning: '#e98323',
		danger: '#f44336',
	}
	// #780000
}


const lightShades = '#EDEBD9'
const lightAccent = '#9CA273'
const main = '#B55276'
const darkAccent = '#7D99A6'
const darkShade = '#2D4867'


export const darkTheme = {
	header: {
		bg: '#FF935C',
		text: '#652A2B',
	},
	body: '#363537',
	text: '#FAFAFA',
	toggleBorder: '#6B8096',
	background: '#999',
	blog: {
		header: "#881A3E",
	},
	// buttons
	btn: {
		Primary: '#b55276',
		Info: '#2d4867',
		Success: '#6c935b',
		Warning: '#e98323',
		Danger: '#f44336',
	}

}

export const GlobalStyles = createGlobalStyle`
	html,body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
		transition: all 0.50s linear;
		margin: 0;
	  padding: 0;
	  box-sizing: border-box;
  }
`