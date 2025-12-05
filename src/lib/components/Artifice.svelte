<script lang="ts">
	import { onMount } from 'svelte';

	import Balloon from '$lib/assets/Balloon.svelte';
	import Plane from '$lib/assets/Plane.svelte';
	import Smiley from '$lib/assets/Smiley.svelte';

	let screenHeight = $state(0);

	onMount(() => {
		// Initialisation
		screenHeight = window.innerHeight;
	});
</script>

<section class="fixed inset-x-0 bottom-0 z-0">
	<div class="bigContainer flex gap-6">
		<div class="relative flex-2">
			<img src="/img/crepes1.webp" alt="crepes Whaou!" class="h-auto w-full" />
			<Plane newClass="rotate-[14.31deg] w-[36.5%] right-[10%] bottom-[88%] absolute" />
		</div>
		<p class="flex-3">&nbsp;</p>
		{#if screenHeight > 720}
			<div class="relative flex-2">
				<img src="/img/girafe1.webp" alt="girage" class="h-auto w-full" />
				<Balloon newClass="rotate-[-29.37deg] w-[27.3%] right-[10%] bottom-[17%] absolute" />
			</div>
		{:else}
			<p class="flex-2">&nbsp;</p>
		{/if}
	</div>
</section>

{#if screenHeight > 720}
	<section class="fixed inset-x-0 bottom-[45dvh] z-0">
		<div class="bigContainer flex gap-6">
			<div class="flex-2">
				<img src="/img/pancake1.webp" alt="pancake" class="h-auto w-full" />
			</div>
			<p class="flex-3">&nbsp;</p>
			<p class="flex-2">&nbsp;</p>
		</div>
	</section>
{/if}

<section class="fixed inset-x-0 top-[30.5dvh] z-0">
	<div class="bigContainer flex gap-6">
		<p class="flex-2">&nbsp;</p>
		<p class="flex-3">&nbsp;</p>
		<div class="relative flex-2">
			<img src="/img/crepes2.webp" alt="crepes" class="h-auto w-full" />
			<Smiley newClass="w-[25%] left-[6.5%] bottom-[12%] absolute" />
		</div>
	</div>
</section>
