<script lang="ts">
	import { onMount } from 'svelte';

	import Smiley from '$lib/assets/Smiley.svelte';

	let isMobile = $state<boolean>(false);

	onMount(() => {
		if (window.innerWidth < 1024) {
			isMobile = true;
		}
	});
</script>

{#if isMobile}
	<div
		class="mb-3 -ml-6 flex w-[calc(100%+4.8rem)] items-center justify-between gap-3 overflow-hidden"
	>
		<div class="flex-1">
			<img src="/img/pancake1.webp" alt="pancake" class="h-auto w-full" />
		</div>
		<div class="relative flex-1">
			<img src="/img/crepes2.webp" alt="crepes" class="h-auto w-full" />
			<Smiley newClass="w-[25%] left-[6.5%] bottom-[7.8%] absolute" />
		</div>
	</div>
{/if}
