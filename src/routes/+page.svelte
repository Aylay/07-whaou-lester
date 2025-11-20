<script lang="ts">
  import { onMount } from 'svelte';
  import { gameStore } from '$lib/stores/game.store';
  import { gameService } from '$lib/services/game.service';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Form from '$lib/components/Form.svelte';
	import Artifice from '$lib/components/Artifice.svelte';
	import NotStarted from '$lib/components/NotStarted.svelte';

	onMount(() => {
		// const state = gameService.getGameState();
		const state = 'not_started';
		gameStore.setState(state);
	});
</script>

<Header />

<div class="bigContainer flex gap-6">
<p class="flex-1">&nbsp;</p>

<div class="mt-5 mb-7 relative z-40 flex-1">
{#if $gameStore.currentState === 'not_started'}
<NotStarted />
{:else if $gameStore.currentState === 'ended'}
{:else if $gameStore.currentState === 'form'}
<Form />
{:else if $gameStore.currentState === 'confirmation'}
{/if}
</div>

<p class="flex-1">&nbsp;</p>
</div>

<Footer />

<Artifice />