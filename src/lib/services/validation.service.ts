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

		// Code EAN
		if (!data.eanCode.trim()) {
			errors.eanCode = 'Le code-barres du produit est obligatoire';
		} else if (!this.isValidEAN(data.eanCode)) {
			errors.eanCode = "Ce code-barres n'est pas valide pour ce jeu";
		}

		// Ticket d'achat
		if (!data.receiptFile) {
			errors.receiptFile = "Le ticket d'achat est obligatoire";
		} else if (!this.isValidImageFile(data.receiptFile)) {
			errors.receiptFile = 'Le fichier doit être une image (JPG, PNG, PDF)';
		}

		// RGPD
		if (!data.rgpd) {
			errors.rgpd =
				'Vous devez accepter que vos données puissent être recueillies et conservées pour participer au jeu';
		}

		// Règlement (obligatoire)
		if (!data.acceptReglement) {
			errors.acceptReglement = 'Vous devez accepter le règlement du jeu';
		}

		// Age (obligatoire)
		if (!data.age) {
			errors.age =
				"Vous devez certifier avoir plus de 18 ans ou avoir obtenu l'autorisation parentale pour participer au jeu";
		}

		// Message global si erreurs
		if (Object.keys(errors).length > 0) {
			errors.global = 'Veuillez corriger les erreurs ci-dessus.';
		}

		return errors;
	},

	isValidEmail(email: string): boolean {
		const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return regex.test(email);
	},

	isValidEAN(eanCode: string): boolean {
		const validCodes = [
			'3252753020003',
			'3252753110001',
			'3252753100002',
			'3255290252623',
			'3243610097474',
			'3255290250520',
			'3255290252777',
			'3255290250797',
			'3322680010290',
			'3255290254085',
			'3255290253965',
			'3255290253033',
			'3243610060249',
			'3255290254559',
			'3255290254566',
			'3255290254573',
			'3255290254207',
			'3255290254528',
			'3252755250002',
			'3255290254016',
			'3255290252050',
			'3252755150005',
			'3255290254078',
			'3252755350009',
			'3255290254184',
			'3255290250285',
			'3322680005289',
			'3322680009799',
			'3322680009935',
			'3322680009942',
			'3322680009966',
			'3322680009980',
			'3322680010405',
			'3322680010412',
			'3322680010481',
			'3322680010498',
			'3322680010504',
			'3322680010511',
			'3322680010528',
			'3322680010535',
			'3322680010672',
			'3322680010689',
			'3322680010801',
			'3322680010818',
			'3322680010894',
			'3322680010924',
			'3322680010993',
			'3322680011013',
			'3322680011082',
			'3322680011105',
			'3322680011099',
			'3322680011136'
		];
		return validCodes.includes(eanCode.trim());
	},

	isValidImageFile(file: File): boolean {
		const validTypes = ['image/jpeg', 'image/jpg', 'image/png', 'application/pdf'];
		const maxSize = 4 * 1024 * 1024;

		if (!validTypes.includes(file.type)) {
			return false;
		}

		if (file.size > maxSize) {
			return false;
		}

		return true;
	}
};
