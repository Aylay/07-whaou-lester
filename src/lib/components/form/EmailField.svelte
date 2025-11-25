<!-- src/lib/components/form/TextField.svelte -->
<script lang="ts">
	let {
		label,
		name,
		value = $bindable(''),
		error = undefined
	}: {
		label: string;
		name: string;
		value: string;
		error?: string;
	} = $props();

	function handleInput(e: Event) {
		const target = e.target as HTMLInputElement;
		value = target.value;
	}
</script>

<div>
	<input
		type="email"
		id={name}
		{name}
		{value}
		autocomplete="email"
		oninput={handleInput}
		class="text-p placeholder:text-brown w-full rounded-[1.4rem] border-2 bg-white px-4 py-3 font-extrabold transition-all outline-none placeholder:font-semibold {error
			? 'border-red text-red'
			: 'text-pink border-white'}"
		aria-invalid={error ? 'true' : 'false'}
		aria-describedby={error ? `${name}-error` : undefined}
		placeholder={label}
	/>

	{#if error}
		<p class="text-mention text-red mt-1 text-left">{error}</p>
	{/if}
</div>
