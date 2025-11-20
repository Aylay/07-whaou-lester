// src/lib/services/game.service.ts

import { DateTime } from 'luxon';
import type { GameStatus } from '$lib/types/game.types';

export const gameService = {
	getGameStatus(): GameStatus {
		const startDate = DateTime.fromISO('2025-12-15T00:00:01', {
			zone: 'Europe/Paris',
			locale: 'fr'
		});
		const endDate = DateTime.fromISO('2026-03-15T23:59:59', {
			zone: 'Europe/Paris',
			locale: 'fr'
		});
		const now = DateTime.now().setZone('Europe/Paris').setLocale('fr');

		if (now < startDate) {
			return 'not_started';
		} else if (now > endDate) {
			return 'ended';
		}

		return 'active';
	}
};
