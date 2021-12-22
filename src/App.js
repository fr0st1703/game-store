import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Header } from "./components/Header";
import { Provider } from "react-redux";
import { store } from './redux'

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Header />
					<Routes>
						<Route path="/" element={<HomePage />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
