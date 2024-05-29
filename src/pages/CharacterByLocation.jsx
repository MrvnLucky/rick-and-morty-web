import { useRecoilValue } from 'recoil';
import { charactersState } from '../state'; // assuming you have this state defined somewhere
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from '../components/CharacterCard';
import { Link, useParams } from 'react-router-dom';

function CharacterByLocation() {
	const { name } = useParams();
	const characters = useRecoilValue(charactersState);

	const charactersByLocation = characters.filter(character => character?.location?.name === name);

	console.log(charactersByLocation);
	return (
		<Container>
			<h1>{name}</h1>
			<Row>
				{charactersByLocation.map(character => (
					<Col sm={12} lg={6} key={character.id}>
						<Link to={`/character/${character.id}`}>
							<CharacterCard character={character} />
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default CharacterByLocation;