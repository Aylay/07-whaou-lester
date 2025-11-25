// src/routes/api/players/create/+server.ts

import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { STRAPI_URL, STRAPI_API_TOKEN } from '$env/static/private';

export const POST: RequestHandler = async ({ request }) => {
	try {
		const formData = await request.formData();

		// Récupérer les données
		const firstName = formData.get('firstName') as string;
		const lastName = formData.get('lastName') as string;
		const email = formData.get('email') as string;
		const eanCode = formData.get('eanCode') as string;
		const receiptFile = formData.get('receiptFile') as File;

		// Validation basique côté serveur
		if (!firstName || !lastName || !email || !eanCode || !receiptFile) {
			return json({ message: 'Tous les champs sont obligatoires' }, { status: 400 });
		}

		// 1. Upload du fichier dans Strapi
		const uploadFormData = new FormData();
		uploadFormData.append('files', receiptFile);

		const uploadResponse = await fetch(`${STRAPI_URL}/api/upload`, {
			method: 'POST',
			headers: {
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			},
			body: uploadFormData
		});

		if (!uploadResponse.ok) {
			const responseText = await uploadResponse.text();
			console.error('❌ Erreur upload Strapi (text):', responseText.substring(0, 500));
			return json({ message: `Erreur lors de l'upload du fichier (${uploadResponse.status})` }, { status: 500 });
		}

		const uploadResult = await uploadResponse.json();
		const proofFileId = uploadResult[0].id;

		// 2. Créer le joueur dans Strapi
		const playerData = {
			data: {
				firstName,
				lastName,
				email,
				eanCode,
				proof: proofFileId
			}
		};

		const playerResponse = await fetch(`${STRAPI_URL}/api/players`, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				Authorization: `Bearer ${STRAPI_API_TOKEN}`
			},
			body: JSON.stringify(playerData)
		});


		if (!playerResponse.ok) {
			const responseText = await playerResponse.text();
			console.error('❌ Erreur création player (text):', responseText.substring(0, 500));
			return json({ message: `Erreur lors de la création du joueur (${playerResponse.status})` }, { status: 500 });
		}

		const playerResult = await playerResponse.json();

		// Retourner le résultat
		return json({
			success: true,
			player: {
				id: playerResult.data.id,
				...playerResult.data.attributes
			}
		});
	} catch (error) {
		console.error('💥 Erreur création player:', error);
		return json({ message: 'Erreur lors de la création du joueur' }, { status: 500 });
	}
};