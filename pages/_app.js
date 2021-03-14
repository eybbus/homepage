import "../styles/globals.css";

import { ThemeProvider } from "../utils/ThemeProvider";
import ThemeController from '../utils/ThemeController'

function App({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider>
				<ThemeController>
					<Component {...pageProps} />
				</ThemeController>
			</ThemeProvider>
		</>
	);
}

export default App;
