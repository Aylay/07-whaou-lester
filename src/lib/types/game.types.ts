// src/lib/types/game.types.ts

export type GameState =
	| 'not_started'  // Jeu pas encore commencé
  | 'form'
  | 'confirmation'
  | 'ended';       // Jeu terminé
