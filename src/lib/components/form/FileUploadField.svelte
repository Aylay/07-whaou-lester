<script lang="ts">
	let {
		name,
		value = $bindable(null),
		error = '',
		accept = 'image/jpeg,image/jpg,image/png,application/pdf',
		maxSize = 2 * 1024 * 1024,
		disabled = false,
		buttonText = 'Parcourir',
		placeholder = "Télécharger la preuve d'achat"
	}: {
		name: string;
		value?: File | null;
		error?: string;
		accept?: string;
		maxSize?: number;
		disabled?: boolean;
		buttonText?: string;
		placeholder?: string;
	} = $props();

	let fileInput: HTMLInputElement;
	let localError = $state('');

	const handleFileSelect = (file: File | null) => {
		if (!file) {
			value = null;
			localError = '';
			return;
		}

		// Vérification du type de fichier
		const acceptedTypes = accept.split(',').map((type) => type.trim());
		if (!acceptedTypes.includes(file.type)) {
			localError = 'Format de fichier non accepté. Formats acceptés : JPG, PNG, PDF';
			value = null;
			return;
		}

		// Vérification de la taille
		if (file.size > maxSize) {
			const maxSizeMB = Math.round(maxSize / (1024 * 1024));
			localError = `Le fichier est trop volumineux. Taille maximale : ${maxSizeMB}MB`;
			value = null;
			return;
		}

		localError = '';
		value = file;
	};

	const handleChange = (event: Event) => {
		const target = event.target as HTMLInputElement;
		const file = target.files?.[0] || null;
		handleFileSelect(file);
	};

	const handleClick = () => {
		fileInput?.click();
	};

	const handleRemove = () => {
		value = null;
		localError = '';
		if (fileInput) {
			fileInput.value = '';
		}
	};

	const hasFile = $derived(!!value);
</script>

<div>
	<div
		class="relative flex items-center gap-0 overflow-hidden rounded-[1.4rem] border-2 bg-white transition-all {error
			? 'border-red'
			: 'border-white'}"
	>
		<input
			bind:this={fileInput}
			type="file"
			id={name}
			{name}
			{accept}
			{disabled}
			class="sr-only"
			onchange={handleChange}
		/>

		<div
			class="text-p flex-1 cursor-pointer py-3 pr-2 pl-4 text-left"
			onclick={handleClick}
			role="button"
			tabindex="0"
			onkeydown={(e) => {
				if (e.key === 'Enter' || e.key === ' ') {
					e.preventDefault();
					handleClick();
				}
			}}
		>
			{#if hasFile}
				<span class="text-pink font-extrabold"
					>{value?.name && value?.name.length > 22
						? value?.name.substring(0, 22) + '...'
						: value?.name}</span
				>
			{:else}
				<span class="text-brown font-semibold">{placeholder}</span>
			{/if}
		</div>

		{#if hasFile}
			<button
				type="button"
				class="text-p text-pink before:bg-greyperle relative flex h-full cursor-pointer items-center px-4 py-2 before:absolute before:inset-y-0 before:left-0 before:h-full before:w-px"
				onclick={handleRemove}
				{disabled}
			>
				Supprimer
			</button>
		{:else}
			<button
				type="button"
				class="text-p text-pink before:bg-greyperle relative flex h-full cursor-pointer items-center px-4 py-2 before:absolute before:inset-y-0 before:left-0 before:h-full before:w-px"
				onclick={handleClick}
				{disabled}
			>
				{buttonText}
			</button>
		{/if}
	</div>

	{#if localError}
		<p class="text-mention text-red mt-1 text-left">{localError}</p>
	{/if}
</div>
