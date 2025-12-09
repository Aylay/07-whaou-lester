<script lang="ts">
	import { fade } from 'svelte/transition';

	import Check from '$lib/assets/Check.svelte';

	let {
		name,
		checked = $bindable(false),
		error = undefined,
		children
	}: {
		name: string;
		checked: boolean;
		error?: string;
		children: any;
	} = $props();

	function handleChange() {
		checked = !checked;
	}
</script>

<div>
	<label class="flex cursor-pointer gap-2">
		<input
			type="checkbox"
			{name}
			{checked}
			onchange={handleChange}
			class="checkbox-field__input sr-only"
			aria-invalid={error ? 'true' : 'false'}
			aria-describedby={error ? `${name}-error` : undefined}
		/>

		<span
			class="flex h-4 w-4 items-center justify-center rounded-[3px] border-2 bg-white transition-colors"
		>
			{#if checked}
				<span transition:fade>
					<Check newClass="w-2 h-auto" />
				</span>
			{/if}
		</span>

		<span
			class="flex-1 text-left text-mention font-medium transition-colors"
			class:text-red={error}
			class:text-brown={!error}
		>
			{@render children()}
		</span>
	</label>
</div>
