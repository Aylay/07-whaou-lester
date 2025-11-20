// src/lib/services/validation.service.ts

import type { FormData, FormErrors } from '$lib/types/form.types';

export const validationService = {
	validateForm(data: FormData): FormErrors {
		const errors: FormErrors = {};

		// Prénom
		if (!data.firstName.trim()) {
			errors.firstName = 'Le prénom est obligatoire';
		} else if (data.firstName.trim().length < 2) {
			errors.firstName = 'Le prénom doit contenir au moins 2 caractères';
		}

		// Nom
		if (!data.lastName.trim()) {
			errors.lastName = 'Le nom est obligatoire';
		} else if (data.lastName.trim().length < 2) {
			errors.lastName = 'Le nom doit contenir au moins 2 caractères';
		}

		// Email
		if (!data.email.trim()) {
			errors.email = "L'email est obligatoire";
		} else if (!this.isValidEmail(data.email)) {
			errors.email = "L'email n'est pas valide";
		}

		// RGPD
		if (!data.rgpd) {
			errors.store = 'Vous devez accepter que vos données puissent être recueillies et conservées pour participer au jeu';
		}

		// Règlement (obligatoire)
		if (!data.acceptReglement) {
			errors.acceptReglement = 'Vous devez accepter le règlement du jeu';
		}

		// Age (obligatoire)
		if (!data.age) {
			errors.age = "Vous devez certifier avoir plus de 18 ans ou avoir obtenu l'autorisation parentale pour participer au jeu";
		}

		// Message global si erreurs
		if (Object.keys(errors).length > 0) {
			errors.global = 'Veuillez corriger les erreurs ci-dessus';
		}

		return errors;
	},

	isValidEmail(email: string): boolean {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	}
};
