<script lang="ts">
	import { onMount } from 'svelte';

	import Smiley from '$lib/assets/Smiley.svelte';
	import Balloon from '$lib/assets/Balloon.svelte';

	let isMobile = $state<boolean>(false);

	onMount(() => {
		if (window.innerWidth < 1024) {
			isMobile = true;
		}
	});
</script>

{#if isMobile}
	<div class="-ml-6 flex w-[calc(100%+4.8rem)] items-end justify-between gap-3 overflow-hidden">
		<div class="relative flex flex-1 justify-center">
			<img src="/img/girafe1-hp.webp" alt="girage" class="h-auto w-full" />
			<Balloon newClass="rotate-[-29.37deg] w-[27.3%] left-[15%] top-[3.5%] absolute" />
		</div>
		<div class="relative flex-1">
			<img src="/img/crepes2.webp" alt="crepes" class="h-auto w-full" />
			<Smiley newClass="w-[25%] left-[6.5%] bottom-[7.8%] absolute" />
		</div>
	</div>
{/if}
