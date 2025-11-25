// src/lib/types/game.types.ts

export type GameState =
	| 'not_started' // Jeu pas encore commencé
	| 'active'
	| 'confirmation'
	| 'ended'; // Jeu terminé
