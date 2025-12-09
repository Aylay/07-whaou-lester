<script lang="ts">
	import { onMount } from 'svelte';

	import LeSter from '$lib/assets/LeSter.svelte';
	import Logo from '$lib/assets/Logo.svelte';
	import Waves from '$lib/assets/Waves.svelte';
	import Whaou from '$lib/assets/Whaou.svelte';
	import MobileWaves from '$lib/assets/MobileWaves.svelte';

	let isMobile = $state<boolean>(false);

	onMount(() => {
		if (window.innerWidth < 1024) {
			isMobile = true;
		}
	});
</script>

<header class="relative bg-brown pt-6 lg:flex lg:items-start lg:justify-center lg:gap-37 lg:pt-12">
	{#if isMobile}
		<div class="flex justify-between px-6">
			<Whaou newClass="w-25 h-auto relative z-10" />
			<LeSter newClass="w-25 h-auto relative z-10" />
		</div>
		<div class="flex justify-center">
			<Logo newClass="w-40 h-auto relative z-10" />
		</div>
		<MobileWaves newClass="w-full h-auto absolute -bottom-px z-0" />
	{:else}
		<Whaou newClass="w-50 h-auto relative z-10" />
		<Logo newClass="w-80 h-auto relative z-10" />
		<LeSter newClass="w-50 h-auto relative z-10" />
		<Waves newClass="w-full h-auto absolute -bottom-px z-0" />
	{/if}
</header>
