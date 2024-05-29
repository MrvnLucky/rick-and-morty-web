import { Route, Routes } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
import Header from "./components/Header";
import LocationList from "./pages/LocationList";
import CharacterByLocation from "./pages/CharacterByLocation";
import TestPage from "./pages/TestPage";

function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<CharacterList />} />
				<Route path="/location" element={<LocationList />} />
				<Route path="/character/:id" element={<CharacterDetail />} />
				<Route path="/location/:name" element={<CharacterByLocation />} />
				<Route path="/test" element={<TestPage />} />
			</Routes>
		</>
	);
}

export default App;
