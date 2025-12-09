<script lang="ts">
	import Plane from '$lib/assets/Plane.svelte';
	import { onMount } from 'svelte';

	let isMobile = $state<boolean>(false);

	onMount(() => {
		if (window.innerWidth < 1024) {
			isMobile = true;
		}
	});
</script>

{#if isMobile}
	<div
		class="mt-3 -ml-6 flex w-[calc(100%+4.8rem)] items-center justify-between gap-3 overflow-hidden pt-18"
	>
		<div class="relative flex-1">
			<img src="/img/crepes1.webp" alt="crepes Whaou!" class="h-auto w-full" />
			<Plane newClass="rotate-[14.31deg] w-[36.5%] right-[10%] bottom-[92%] absolute" />
		</div>
		<div class="flex flex-1 items-center justify-center">
			<img src="/img/pancake1.webp" alt="pancake" class="h-auto w-4/5" />
		</div>
	</div>
{/if}
