// src/lib/types/form.types.ts

export interface FormData {
	firstName: string;
  lastName: string;
  email: string;
  eanCode: string; 
  receiptFile: File | null; 
  rgpd: boolean; 
  acceptReglement: boolean; 
  age: boolean; 
}

export interface FormErrors {
	firstName?: string;
  lastName?: string;
  email?: string;
  eanCode?: string;
  receiptFile?: string;
  rgpd?: string;
  acceptReglement?: string;
  age?: string;
	global?: string;
}
