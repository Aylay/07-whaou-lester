// src/lib/stores/game.store.ts

import { writable } from 'svelte/store';
import type { GameState } from '$lib/types/game.types';

interface GameStore {
	currentState: GameState;
	participation: any | null;
}

function createGameStore() {
	const { subscribe, set, update } = writable<GameStore>({
		currentState: 'form',
		participation: null,
	});

	return {
		subscribe,

		setState: (newState: GameState) =>
			update((state) => ({
				...state,
				currentState: newState
			})),

		setParticipation: (participation: any) =>
			update((state) => ({
				...state,
				participation
			})),

		reset: () =>
			set({
				currentState: 'form',
				participation: null,
			})
	};
}

export const gameStore = createGameStore();
