import Card from 'react-bootstrap/Card'
import styles from './CharacterCard.module.css'

function CharacterCard(props) {
	const { character } = props
	return (
		<>
			<Card
				className={styles.card}
			// style={{ flexDirection: "row" }}
			>
				<Card.Img
					src={character ? character?.image : 'https://placehold.co/200'}
					className={styles.cardImg}
				// style={{ width: "192px", height: "192px" }}
				/>
				<Card.Body>
					<Card.Title>
						{character ? character?.name : "Character Name"}
					</Card.Title>
					<Card.Subtitle>
						{character ? character?.status : "Status"} - {character ? character?.species : "Species"}
					</Card.Subtitle>
					<Card.Text>
						Location:
					</Card.Text>
					<Card.Text>
						{character ? character?.location?.name : "Location Name"}
					</Card.Text>
				</Card.Body>
			</Card>
		</>
	)
}

export default CharacterCard