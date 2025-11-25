// src/routes/api/players/validate/+server.ts

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { STRAPI_URL, STRAPI_API_TOKEN } from '$env/static/private';
import { DateTime } from 'luxon';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const { email, firstName, lastName } = await request.json();

		// Date du jour (début et fin) en UTC pour Strapi
		const today = DateTime.now().setZone('Europe/Paris');
		const startOfDay = today.startOf('day').toUTC().toISO().replace(/\+\d{2}:\d{2}$/, 'Z');
		const endOfDay = today.endOf('day').toUTC().toISO().replace(/\+\d{2}:\d{2}$/, 'Z');

		// 1. Vérifier si l'email a déjà participé aujourd'hui
		const emailCheckUrl = `${STRAPI_URL}/api/players?filters[email][$eq]=${encodeURIComponent(email)}&filters[createdAt][$gte]=${startOfDay}&filters[createdAt][$lte]=${endOfDay}`;

		const emailCheckResponse = await fetch(emailCheckUrl, {
			headers: {
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		});


		if (!emailCheckResponse.ok) {
			const errorText = await emailCheckResponse.text();
			console.error('❌ Erreur Strapi email check:', errorText.substring(0, 500));
			throw new Error('Erreur lors de la vérification de l\'email');
		}

		const emailData = await emailCheckResponse.json();

		if (emailData.data.length > 0) {
			return json({
				valid: false,
				error: 'Vous avez déjà participé aujourd\'hui. Revenez demain !'
			});
		}

		// 2. Vérifier si prénom + nom ont déjà participé aujourd'hui
		const nameCheckUrl = `${STRAPI_URL}/api/players?filters[firstName][$eq]=${encodeURIComponent(firstName)}&filters[lastName][$eq]=${encodeURIComponent(lastName)}&filters[createdAt][$gte]=${startOfDay}&filters[createdAt][$lte]=${endOfDay}`;

		const nameCheckResponse = await fetch(nameCheckUrl, {
			headers: {
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			}
		});

		if (!nameCheckResponse.ok) {
			const errorText = await nameCheckResponse.text();
			console.error('❌ Erreur Strapi name check:', errorText.substring(0, 500));
			throw new Error('Erreur lors de la vérification du nom');
		}

		const nameData = await nameCheckResponse.json();

		if (nameData.data.length > 0) {
			return json({
				valid: false,
				error: 'Vous avez déjà participé aujourd\'hui. Revenez demain !'
			});
		}

		return json({ valid: true });
	} catch (error) {
		console.error('💥 Erreur validation:', error);
		return json({ valid: false, error: 'Erreur lors de la validation' }, { status: 500 });
	}
};