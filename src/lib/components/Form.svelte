<script lang="ts">
	import { validationService } from '$lib/services/validation.service';
	import { gameStore } from '$lib/stores/game.store';
	import type { FormData, FormErrors } from '$lib/types/form.types';

	import Info from '$lib/assets/Info.svelte';
	import CheckboxField from './form/CheckboxField.svelte';
	import EmailField from './form/EmailField.svelte';
	import TextField from './form/TextField.svelte';
	import FileUploadField from './form/FileUploadField.svelte';

	const DEV_MODE = true;
	let formData: FormData = $state(
		DEV_MODE
			? {
					// Mock data
					firstName: 'Lucas',
					lastName: 'Attali',
					email: 'lattali@beavers-agency.fr',
					eanCode: '3255290254085',
					receiptFile: null,
					rgpd: true,
					acceptReglement: true,
					age: true
				}
			: {
					// Données vides
					firstName: '',
					lastName: '',
					email: '',
					eanCode: '',
					receiptFile: null,
					rgpd: false,
					acceptReglement: false,
					age: false
				}
	);

	let errors: FormErrors = $state({});
	let isSubmitting = $state(false);

	async function handleSubmit() {
		errors = {};

		// Validation
		errors = validationService.validateForm(formData);
		
		if (Object.keys(errors).length > 0) return;

		isSubmitting = true;

		try {
			// 1. Validation côté serveur
			const validateResponse = await fetch('/api/players/validate', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					email: formData.email,
					firstName: formData.firstName,
					lastName: formData.lastName
				})
			});

			const validateResult = await validateResponse.json();

			if (!validateResult.valid) {
				errors.global = validateResult.error || 'Validation échouée';
				return;
			}
			
			// 2. Créer le Player dans Strapi
			const data = new FormData();
			data.append('firstName', formData.firstName);
			data.append('lastName', formData.lastName);
			data.append('email', formData.email);
			data.append('eanCode', formData.eanCode);

			if (formData.receiptFile) {
				data.append('receiptFile', formData.receiptFile);
			}

			const createResponse = await fetch('/api/players/create', {
				method: 'POST',
				body: data
			});

			if (!createResponse.ok) {
				const errorData = await createResponse.json();
				throw new Error(errorData.message || 'Erreur lors de la création du joueur');
			}

			// 3. TODO: Envoyer le mail au Player
			try {
				const emailResponse = await fetch('/api/send-confirmation-email', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json'
					},
					body: JSON.stringify({
						email: formData.email,
						firstName: formData.firstName
					})
				});

				if (!emailResponse.ok) {
					console.error('Erreur envoi email (non bloquant)');
				}
			} catch (emailError) {
				console.error('Erreur envoi email:', emailError);
			}

			window.scrollTo({ top: 0, behavior: 'smooth' });

			gameStore.setState('confirmation');
		} catch (error) {
			console.error('Erreur soumission:', error);
			errors.global = 'Une erreur est survenue. Veuillez réessayer.';
		} finally {
			isSubmitting = false;
		}
	}
</script>

<div class="bg-yellow rounded-[1.6rem] px-5 py-6 text-center">
	<p class="text-pink text-h5m lg:text-h5 font-sirenia text-center">Pour participer,</p>
	<p class="text-brown text-p text-center font-extrabold">
		veuillez remplir le formulaire ci-dessous.
	</p>
	<p class="text-brown text-mention mt-1 text-center font-medium">
		Tous les champs sont obligatoires.
	</p>
	<form
		onsubmit={(e) => {
			e.preventDefault();
			handleSubmit();
		}}
		class="mt-4 flex flex-col gap-3"
	>
		<TextField label="Nom" name="lastName" bind:value={formData.lastName} error={errors.lastName} />
		<TextField
			label="Prénom"
			name="firstName"
			bind:value={formData.firstName}
			error={errors.firstName}
		/>
		<EmailField label="Email" name="email" bind:value={formData.email} error={errors.email} />
		<div>
			<TextField
				label="Code barre EAN"
				name="eanCode"
				bind:value={formData.eanCode}
				error={errors.eanCode}
			/>
			<div class="mt-1 flex items-center justify-between">
				<p class="text-mention text-brown font-medium">
					Inscrit sur votre produit Whaou! ou Le Ster éligibles.
				</p>
				<Info newClass="w-3 h-auto" />
			</div>
		</div>

		<FileUploadField
			name="receiptFile"
			placeholder="Télécharger la preuve d'achat"
			buttonText="Parcourir"
			bind:value={formData.receiptFile}
			error={errors.receiptFile}
		/>

		<div class="flex flex-col gap-1">
			<CheckboxField name="rgpd" bind:checked={formData.rgpd} error={errors.rgpd}>
				J’accepte que mes données soient recueillies et conservées pour gérer ma participation au
				Jeu*
			</CheckboxField>
			<CheckboxField
				name="acceptReglement"
				bind:checked={formData.acceptReglement}
				error={errors.acceptReglement}
			>
				J’ai lu et j’accepte le <a
					href="/reglement.pdf"
					title="Règlement du jeu"
					class="font-extrabold underline"
					target="_blank">règlement</a
				> du Jeu*.
			</CheckboxField>
			<CheckboxField name="age" bind:checked={formData.age} error={errors.age}>
				Je certifie avoir plus de 18 ans ou avoir obtenu l’autorisation parentale pour participer à
				ce Jeu*.
			</CheckboxField>
		</div>
		{#if errors.global}
			<p class="text-mention text-red text-left font-extrabold">
				{errors.global}
			</p>
		{/if}
		<button type="submit" disabled={isSubmitting} class="cta">
			{isSubmitting ? 'Jeu en cours' : 'Je tente ma chance !'}
		</button>
	</form>
	<p class="text-brown text-mention my-3 text-center font-medium">
		Attention, après validation du dépôt, vous ne pourrez plus modifier vos téléchargements.
		Conservez votre preuve originale d’achat, elle peut vous être demandée dans le cadre de la
		gestion de l’offre.
	</p>
	<p class="text-brown text-mention text-center font-medium">
		Le groupe Goûters Magiques traite les données recueillies sur la base de votre consentement pour
		gérer votre participation à ce Jeu.
	</p>
</div>
