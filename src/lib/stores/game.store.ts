// src/lib/stores/game.store.ts

import { writable } from 'svelte/store';
import type { GameState, GameStatus } from '$lib/types/game.types';

interface GameStore {
	currentState: GameState;
	gameStatus: GameStatus | null;
	participation: any | null;
}

function createGameStore() {
	const { subscribe, set, update } = writable<GameStore>({
		currentState: 'form',
		gameStatus: null,
		participation: null,
	});

	return {
		subscribe,

		setGameStatus: (status: GameStatus) =>
			update((state) => ({
				...state,
				gameStatus: status
			})),

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
				currentState: 'pre_home',
				gameStatus: null,
				participation: null,
			})
	};
}

export const gameStore = createGameStore();
