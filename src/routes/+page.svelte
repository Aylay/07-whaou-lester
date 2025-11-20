<script lang="ts">
  import { onMount } from 'svelte';
  import { gameStore } from '$lib/stores/game.store';
  import { gameService } from '$lib/services/game.service';

  import Header from '$lib/components/Header.svelte';
  import Footer from '$lib/components/Footer.svelte';
  import Form from '$lib/components/Form.svelte';
	import Artifice from '$lib/components/Artifice.svelte';

	onMount(() => {
		// const status = gameService.getGameStatus();
		const status = 'not_started';
		gameStore.setGameStatus(status);
	});
</script>

<Header />

{#if $gameStore.currentState === 'form'}
<Form />
{:else if $gameStore.currentState === 'confirmation'}
{/if}

<Footer />

<Artifice />