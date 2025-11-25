<script lang="ts">
	import '../app.css';

	import { page } from '$app/state';

	import GTM from 'svelte-gtm/GTM.svelte';
	import GTMDataLayer from 'svelte-gtm/GTMDataLayer.svelte';

	let { children } = $props();

	const meta = {
		title: 'Grand Jeu Goutez la Chandeleur avec Whaou! Et LeSter !',
		description:
			'Célébrez la Chandeleur avec Whaou! Et LeSter ! Jouez et tentez de gagner 1 expérience insolite à partager d’une valeur de 1000 euros !'
	};
</script>

<svelte:head>
	{#if page.url.host.includes('preprod')}
		<meta name="robots" content="noindex, nofollow" />
	{:else}
		<GTM gtmID="GTM-TGX9HPK5" />
		<GTMDataLayer />
	{/if}

	<title>{meta.title}</title>
	<meta name="title" content={meta.title} />
	<meta property="og:title" content={meta.title} />
	<meta property="twitter:title" content={meta.title} />
	<meta name="description" content={meta.description} />
	<meta property="og:description" content={meta.description} />
	<meta property="twitter:description" content={meta.description} />
</svelte:head>

<main>
	{@render children()}
</main>
