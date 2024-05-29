import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CharacterCard from "../components/CharacterCard";
import Container from 'react-bootstrap/Container';

function CharacterByLocation() {
	return (
		<>
			<Container>
				<h1> Earth</h1>
				<Row>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
					<Col sm={12} lg={6}>
						<CharacterCard />
					</Col>
				</Row>
			</Container>
		</>
	);
}

export default CharacterByLocation;