// src/lib/types/form.types.ts

export interface Store {
	id: number;
	name: string;
	email: string;
	city: string;
	address: string;
	memberNumber: string;
	siteCode: string;
}

export interface FormData {
	civility: 'madame' | 'monsieur' | '';
	firstName: string;
	lastName: string;
	email: string;
	emailConfirm: string;
	phone: string;
	country: string;
	store: Store | null;
	acceptReglement: boolean;
	acceptEmailCommercial: boolean;
	acceptSMSCommercial: boolean;
}

export interface FormErrors {
	civility?: string;
	firstName?: string;
	lastName?: string;
	email?: string;
	emailConfirm?: string;
	phone?: string;
	country?: string;
	store?: string;
	acceptReglement?: string;
	global?: string;
}
