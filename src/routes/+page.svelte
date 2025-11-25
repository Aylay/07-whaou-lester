<script lang="ts">
	import { onMount } from 'svelte';
	import { gameStore } from '$lib/stores/game.store';
	import { gameService } from '$lib/services/game.service';

	import Header from '$lib/components/Header.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Active from '$lib/components/Active.svelte';
	import Artifice from '$lib/components/Artifice.svelte';
	import NotStarted from '$lib/components/NotStarted.svelte';
	import Ended from '$lib/components/Ended.svelte';
	import Confirmation from '$lib/components/Confirmation.svelte';

	let isMobile = $state<boolean>(false);

	onMount(() => {
		if (window.innerWidth < 1024) {
			isMobile = true;
		}

		const state = gameService.getGameState();
		// const state = 'active';
		gameStore.setState(state);
	});
</script>

<Header />

<div class="bigContainer flex gap-6 lg:min-h-[calc(100dvh-24rem)]">
	{#if !isMobile}
		<p class="flex-1">&nbsp;</p>
	{/if}

	<div class="relative z-40 mt-5 flex-1 lg:mb-7">
		{#if $gameStore.currentState === 'not_started'}
			<NotStarted />
		{:else if $gameStore.currentState === 'ended'}
			<Ended />
		{:else if $gameStore.currentState === 'active'}
			<Active />
		{:else if $gameStore.currentState === 'confirmation'}
			<Confirmation />
		{/if}
	</div>

	{#if !isMobile}
		<p class="flex-1">&nbsp;</p>
	{/if}
</div>

<Footer />

{#if !isMobile}
	<Artifice />
{/if}
