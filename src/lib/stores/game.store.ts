// src/lib/stores/game.store.ts

import { writable } from 'svelte/store';
import type { GameState } from '$lib/types/game.types';

interface GameStore {
	currentState: GameState;
}

function createGameStore() {
	const { subscribe, set, update } = writable<GameStore>({
		currentState: 'active'
	});

	return {
		subscribe,

		setState: (newState: GameState) =>
			update((state) => ({
				...state,
				currentState: newState
			})),

		reset: () =>
			set({
				currentState: 'active'
			})
	};
}

export const gameStore = createGameStore();
