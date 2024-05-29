import { gql } from "@apollo/client";

export const GET_CHARACTERS = gql`
	query GetCharacters {
		characters {
			info {
				count
				pages
			}
			results {
				id
				name
				status
				species
				gender
				image
				episode {
					id
				  name
				}
			}
		}
	}
`

export const GET_CHARACTER_BY_ID = gql`
  query GetCharacterById($id: ID!) {
    character(id: $id) {
      id
      name
      status
      species
      gender
      image
      episode {
        id
        name
      }
    }
  }
`;