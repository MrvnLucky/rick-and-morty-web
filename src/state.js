import { atom, selector } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

export const charactersState = atom({
	key: 'charactersState',
	default: [],
	effects_UNSTABLE: [persistAtom]
});

export const selectedCharacterState = atom({
	key: 'selectedCharacterState',
	default: null,
	effects_UNSTABLE: [persistAtom]
})

export const characterByIdSelector = selector({
	key: 'characterByIdSelector',
	get: ({ get }) => (id) => {
		const characters = get(charactersState);
		return characters.find(character => character.id === id);
	},
})

