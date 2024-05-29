import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from "../components/CharacterCard";
import Container from 'react-bootstrap/Container';
import { useQuery } from '@apollo/client';
import { GET_CHARACTERS } from '../queries';
import { useRecoilState } from 'recoil';
import { useEffect } from 'react';
import { charactersState } from '../state';
import { Link } from 'react-router-dom';
function CharacterList() {
	const [characters, setCharacters] = useRecoilState(charactersState);

	console.log(characters)

	return (

		<>
			<Container>
				<h1>Character List</h1>
				<Row>
					{characters.map(character => (
						<Col sm={12} lg={6} key={character.id}>
							<Link to={`character/${character.id}`}>
								<CharacterCard character={character} />
							</Link>
						</Col>
					))}
				</Row>
			</Container>
		</>

	);
}

export default CharacterList;