import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { Link, useParams } from 'react-router-dom'
import { useRecoilState } from 'recoil';
import { charactersState, selectedCharacterState } from '../state';
import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import styles from './CharacterDetail.module.css'
function CharacterDetail() {
	const { id } = useParams();
	const [character, setCharacter] = useRecoilState(selectedCharacterState);
	const [characters, setCharacters] = useRecoilState(charactersState);
	// const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
	// 	variables: { id },
	// 	skip: character.id === id,
	// });

	const [showModal, setShowModal] = useState(false);
	const [locationName, setLocationName] = useState("");

	useEffect(() => {
		const foundCharacter = characters.find((char) => char.id === id);
		if (foundCharacter) {
			setCharacter(foundCharacter);
		}
	}, [id, characters, setCharacter]);


	// if (loading) return <p>Loading...</p>;
	// if (error) return <p>Error :(</p>;

	const handleSaveChanges = () => {
		setCharacter(prevCharacter => ({
			...prevCharacter,
			location: {
				name: locationName
			}
		}));

		setCharacters(prevCharacters => prevCharacters.map(c =>
			c.id === character.id ? { ...c, location: { name: locationName } } : c
		));

		setShowModal(false);
	}

	return (
		<>
			<Container>
				<Card
					className={styles.card}
				// style={{ flexDirection: "row" }}
				>
					<Card.Img
						src={character?.image || 'https://placehold.co/200'}
						className={styles.cardImg}
					// style={{ width: "360px", height: "360px" }}
					/>
					<Card.Body>
						<Card.Title>
							{character?.name || "Character Name"}
						</Card.Title>
						<Card.Text>
							Status: {character?.status || "Status"}
						</Card.Text>
						<Card.Text>
							Species: {character?.species || "Species"}
						</Card.Text>
						<Card.Text>
							Gender: {character?.gender || "GENDER"}
						</Card.Text>

						<Card.Text>
							First seen in: #{character?.episode[0].id || "?"} {character?.episode[0].name || "Episode Name"}
						</Card.Text>

						<Card.Text>
							Location: {character?.location?.name || "-"}
						</Card.Text>

						<Button onClick={() => setShowModal(true)}>
							Assign New Location
						</Button>

						<Modal show={showModal} onHide={() => setShowModal(false)}>
							<Modal.Header closeButton>
								<Modal.Title>Assign New Location</Modal.Title>
							</Modal.Header>
							<Modal.Body>
								<Form>
									<Form.Group>
										<Form.Label>Location Name</Form.Label>
										<Form.Control type="text" placeholder="Enter location name" onChange={(e) => setLocationName(e.target.value)} />
									</Form.Group>
								</Form>
							</Modal.Body>
							<Modal.Footer>
								<Button variant="secondary" onClick={() => setShowModal(false)}>
									Close
								</Button>
								<Button variant="primary" onClick={handleSaveChanges}>
									Save Changes
								</Button>
							</Modal.Footer>
						</Modal>
					</Card.Body>
				</Card>
				<Link to={`/`}>
					<p>Back to Character List</p>
				</Link>
			</Container>
		</>
	)
}

export default CharacterDetail