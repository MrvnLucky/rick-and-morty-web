import { useQuery } from "@apollo/client"
import { GET_CHARACTERS } from "../queries"

function TestPage() {
	const { loading, error, data } = useQuery(GET_CHARACTERS)
	if (loading) return <p>Loading...</p>
	if (error) return <p>Error :(</p>

	return data.characters.results.map(character => (
		<div key={character.id}>
			<img src={character.image} alt={character.name} />
			<h2>{character.name}</h2>
			<p>{character.status} - {character.species}</p>
		</div>
	))
}

export default TestPage