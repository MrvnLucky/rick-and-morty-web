import { useRecoilValue } from 'recoil';
import { charactersState } from '../state'; // assuming you have this state defined somewhere
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from '../components/CharacterCard';
import { useParams } from 'react-router-dom';

function CharacterByLocation() {
	const { name } = useParams();
	const characters = useRecoilValue(charactersState);
	const location = 'Earth'; // replace with the desired location

	const charactersByLocation = characters.filter(character => character.location.name === location);

	return (
		<Container>
			<h1>{location}</h1>
			<Row>
				{charactersByLocation.map(character => (
					<Col sm={12} lg={6} key={character.id}>
						<CharacterCard character={character} />
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default CharacterByLocation;