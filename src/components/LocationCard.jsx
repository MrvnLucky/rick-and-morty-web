import Card from 'react-bootstrap/Card'

function CharacterCard(props) {
	const { location } = props
	return (
		<>
			<Card>
				<Card.Body>
					<Card.Title>
						{location?.name || "Location Name"}
					</Card.Title>
				</Card.Body>
			</Card>
		</>
	)
}

export default CharacterCard