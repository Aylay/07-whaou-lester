<!-- src/lib/components/form/TextField.svelte -->
<script lang="ts">
	import type { HTMLInputAttributes } from 'svelte/elements';

	let {
		label,
		name,
		value = $bindable(''),
		error = undefined,
		autocomplete = undefined
	}: {
		label: string;
		name: string;
		value: string;
		error?: string;
		autocomplete?: HTMLInputAttributes['autocomplete'];
	} = $props();

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		value = target.value;
	}
</script>

<div>
	<input
		type="text"
		id={name}
		{name}
		{value}
		{autocomplete}
		oninput={handleInput}
		class="w-full rounded-[1.4rem] border-2 bg-white px-4 py-3 text-p font-extrabold transition-all outline-none placeholder:font-semibold placeholder:text-brown {error
			? 'border-red text-red'
			: 'border-white text-pink'}"
		aria-invalid={error ? 'true' : 'false'}
		aria-describedby={error ? `${name}-error` : undefined}
		placeholder={label}
	/>

	{#if error}
		<p class="mt-1 text-left text-mention text-red">{error}</p>
	{/if}
</div>
