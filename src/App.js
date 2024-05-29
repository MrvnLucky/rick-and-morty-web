import { Route, Routes } from "react-router-dom";
import CharacterList from "./pages/CharacterList";
import CharacterDetail from "./pages/CharacterDetail";
import Header from "./components/Header";
import LocationList from "./pages/LocationList";
import CharacterByLocation from "./pages/CharacterByLocation";
import TestPage from "./pages/TestPage";

import { GET_CHARACTERS } from './queries';
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { charactersState } from "./state";
import { useEffect } from "react";



function App() {
	const [characters, setCharacters] = useRecoilState(charactersState);
	const { loading, error, data } = useQuery(GET_CHARACTERS)


	// if (data) setCharacters(data.characters.results);
	useEffect(() => {
		if (data) {
			setCharacters(data.characters.results);
		}
	}, [data, setCharacters]);
	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;

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
