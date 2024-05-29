import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import LocationCard from "../components/LocationCard";
import Container from 'react-bootstrap/Container';
import { useRecoilValue } from 'recoil';
import { charactersState } from '../state';
import { Link } from 'react-router-dom';

function LocationList() {
	const characters = useRecoilValue(charactersState);

	const uniqueLocations = characters.reduce((unique, character) => {
		if (character.location) {
			return unique.find(location => location.name === character.location.name)
				? unique
				: [...unique, character.location];
		} else {
			return unique;
		}
	}, []);

	return (
		<Container>
			<h1>Location List</h1>
			<Row>
				{uniqueLocations.map((location, index) => (
					<Col key={index} sm={12} lg={4}>
						<Link to={`/location/${location.name}`}>
							<LocationCard location={location} />
						</Link>
					</Col>
				))}
			</Row>
		</Container>
	);
}

export default LocationList;